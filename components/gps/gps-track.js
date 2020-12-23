import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

// The following are the informational fields which are typically only recognized in the first row of a track's data:
// name, desc, width, color, opacity, fill_color, fill_opacity.

// write data to current activity data map
// trackpoint,time,latitude,longitude,alt,speed,course,name (track,T or Waypoint,W),color

const trackpoint = 'FILL_ME_IN';
const time = 'FILL_ME_IN';
const latitude = 'FILL_ME_IN';
const longitude = 'FILL_ME_IN';
const alt = 'FILL_ME_IN';
const speed = 'FILL_ME_IN';
const course = 'FILL_ME_IN';
const name = 'FILL_ME_IN';
const color = 'FILL_ME_IN';


// if recording, return current location on map
// if stopped recording, display tracks
const GPS_Track = ({ isRecording, location }) => {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;

  return (
    <MapView style={StyleSheet.absoluteFillObject} region={{
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.015, // need to research
      longitudeDelta: 0.0121, // need to research
    }} showsUserLocation={true} />
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GPS_Track;

