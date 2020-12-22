import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RecordButton = () => {
  return (
    <TouchableOpacity
      onPress={() => alert('Recording')}
      style={styles.button}>
      <View style={styles.buttonSquare}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#eb4634',
    height: 110,
    width: 110,
    padding: 20,
    borderRadius: 110,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
  },
  buttonSquare: {
    backgroundColor: '#eb4634',
    width: 40,
    height: 40,
    borderRadius: 5,
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
  },
});

export default RecordButton;