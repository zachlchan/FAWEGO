import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FinishButton from './finish-button';
import ResumeButton from './resume-button.js';

const RecordButton = ({ isRecording, toggleRecording }) => {
  const [isStopped, setIsStopped] = useState(true);

  if (!isRecording) {
    return (
      <TouchableOpacity
        onPress={toggleRecording}
        style={styles.startButton}>
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>START</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (isRecording && isStopped) {
    return (
      <TouchableOpacity
        onPress={()=>setIsStopped(false)}
        style={styles.stopButton}>
        <View style={styles.buttonSquare}>
          <Text style={styles.buttonText}>STOP</Text>
        </View>
      </TouchableOpacity>
    )
  } else if (isRecording && !isStopped) {
    return (
      <View style={styles.RF_ButtonContainer}>
        <ResumeButton press={()=>setIsStopped(true)}/>
        <FinishButton press={()=>{toggleRecording(); setIsStopped(true)}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#DC3725',
    opacity: 0.8,
    height: 110,
    width: 110,
    padding: 20,
    borderRadius: 110,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
  },
  stopButton: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#DC3725',
    opacity: 0.8,
    height: 100,
    width: 100,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
  },
  buttonSquare: {
    backgroundColor: '#DC3725',
    width: 80,
    height: 80,
    borderRadius: 5,
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
    justifyContent: 'center',
  },
  buttonCircle: {
    backgroundColor: '#DC3725',
    width: 90,
    height: 90,
    borderRadius: 90,
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
    justifyContent: 'center',
    fontSize: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  RF_ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default RecordButton;