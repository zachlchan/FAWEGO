import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <Text style={styles.header}>
      FRAVA
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#1F1F1F',
    fontSize: 40,
  },
});

export default Header;