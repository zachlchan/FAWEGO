import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RecordButton from './components/record-button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.instructions}>
          To begin recording, press the button below
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <RecordButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});
