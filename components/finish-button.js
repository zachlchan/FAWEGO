import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FinishButton = ({ press }) => {
  return (
    <TouchableOpacity onPress={press} style={styles.button}>
      <Text style={styles.buttonText}>FINISH</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    //backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#1F1F1F',
    opacity: 0.8,
    height: 100,
    width: 100,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    shadowColor: '#888',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0.5 },
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1F1F1F',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default FinishButton;