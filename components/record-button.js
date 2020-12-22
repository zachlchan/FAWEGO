import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RecordButton = () => {
  return (
    <TouchableOpacity
      onPress={() => alert('Recording')}
      style={styles.button}>
      <Text style={styles.buttonText}>
        Start Activity
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eb4634',
    height: 110,
    width: 110,
    padding: 20,
    borderRadius: 110,
    marginTop: 100,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default RecordButton;