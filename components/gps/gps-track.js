import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {AnimatedRegion} from 'react-native-maps';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';
//import * as TaskManager from 'expo-task-manager';

const { width } = Dimensions.get('window');
const height = 200;
const aspect_ratio = width / height;
const latitude_delta = 0.005;
const longitude_delta = latitude_delta * aspect_ratio;


const GPS_Track = ({ isRecording }) => {
  const [location, setLocation] = useState(null); // {latitude, longitude}
  const [isTracking, setIsTracking] = useState(false);
  const [watchID, setWatchID] = useState(null);

  useEffect(() => {
    if(!isRecording && !isTracking) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    } else if(isRecording) {
      setIsTracking(true);
      trackLocation();
    } else if(!isRecording && isTracking) {
      setIsTracking(false);
      navigator.geolocation.clearWatch(watchID);
      setWatchID(null);
    }
  }, [isRecording]);

  const trackLocation = () => {
    let id = navigator.geolocation.watchPosition((position) => {
      let {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
    }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    setWatchID(id);
  }

  let text = 'Acquiring gps signal...';
  if (location) {
    const { latitude, longitude } = location;
    let coordstext = `latitude: ${latitude} \n longitude: ${longitude} \n tracking: ${isTracking}`
    return (
      <>
        <MapView style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: latitude_delta, // need to research
          longitudeDelta: longitude_delta, // need to research
        }}
        showsUserLocation={true}
        followUserLocation={true}
         />
        <Text style={styles.coords}>{coordstext}</Text>
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
    //...StyleSheet.absoluteFillObject,
    width: width,
    height: height
  },
  coords: {
    flex: 1
  }
});

export default GPS_Track;
