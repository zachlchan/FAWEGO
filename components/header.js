import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Header = () => {
  return (
    <>
      <Text style={styles.header}>
        FRAVA
      </Text>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#1F1F1F',
    fontSize: 40,
  },
});

export default Header;