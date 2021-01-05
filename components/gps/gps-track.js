import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import haversine from 'haversine';
//import * as TaskManager from 'expo-task-manager';

const { width } = Dimensions.get('window');
const height = 200;
const aspect_ratio = width / height;
const latitude_delta = 0.005;
const longitude_delta = latitude_delta * aspect_ratio;

const GPS_Track = ({ isRecording, updateDistance }) => {
  const [location, setLocation] = useState(null); // {latitude, longitude}
  const [coordinates, setCoordinates] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [watchID, setWatchID] = useState(null);
  //const [distance, setDistance] = useState(0);

  useEffect(() => {
    if(!isRecording && !isTracking) {
      if(watchID) {
        navigator.geolocation.clearWatch(watchID);
      }
      getPosition();
    } else if(isRecording) {
      navigator.geolocation.clearWatch(watchID);
      setIsTracking(true);
      trackLocation();
    } else if(!isRecording && isTracking) {
      setIsTracking(false);
      navigator.geolocation.clearWatch(watchID);
      //setDistance(0);
      updateDistance(0);
      getPosition();
    }
    return () => {
      navigator.geolocation.clearWatch(watchID);
    }
  }, [isRecording]);

  const getPosition = () => {
    let id = navigator.geolocation.watchPosition(
      (position) => {
        let {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        setCoordinates([{latitude, longitude}]);
      }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    setWatchID(id);
  }

  const trackLocation = () => {
    let id = navigator.geolocation.watchPosition(
      (position) => {
        let {latitude, longitude} = position.coords;
        let prevLocation = location;
        let newLocation = {latitude, longitude};
        setLocation(newLocation);
        //setLocation({latitude, longitude});
        //setDistance(haversine(prevLocation, newLocation, {unit: 'mile'}));
        updateDistance(haversine(prevLocation, newLocation, {unit: 'mile'}));
        setCoordinates(oldCoords => ([...oldCoords, {latitude, longitude}]));
      }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    setWatchID(id);
  }

  let text = 'Acquiring gps signal...';
  if (location) {
    const { latitude, longitude } = location;
    return (
      <>
        <MapView style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitude_delta,
            longitudeDelta: longitude_delta,
          }}
          showsUserLocation={true}
          followUserLocation={true}
        >
          <Polyline coordinates={coordinates} strokeWidth={5} />
        </MapView>
      </>
    );
  } else {
    return (
      <Text>{text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    // width: width,
    // height: height
  },
  coords: {
    flex: 1
  }
});

export default GPS_Track;
