import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/header';
import Metrics from './components/metrics';
import Timer from './components/timer';
import GPS_Track from './components/gps/gps-track';
import RecordButton from './components/record-button';

const App = () => {

  const [isRecording, setIsRecording] = useState(false);
  const [distance, setDistance] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.timerContainer}>
        <Metrics isStarted={isRecording} totalDist={distance}/>
      </View>
      <View style={styles.gpsContainer}>
        <GPS_Track isRecording={isRecording} updateDistance={setDistance} />
      </View>
      <View style={styles.buttonContainer}>
        <RecordButton isRecording={isRecording} toggleRecording={()=>setIsRecording(!isRecording)} />
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    flex: 0.6,
  },
  gpsContainer: {
    flex: 1.4,
    width: width,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.7,
  }
});

export default App;
