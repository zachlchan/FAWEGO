import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ResumeButton = ({ press }) => {
  return (
    <TouchableOpacity onPress={press} style={styles.button}>
      <Text style={styles.buttonText}>RESUME</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    //backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#DC3725',
    opacity: 0.8,
    height: 110,
    width: 110,
    padding: 10,
    borderRadius: 110,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 30,
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
    justifyContent: 'center'
  },
  buttonText: {
    color: '#DC3725',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ResumeButton;