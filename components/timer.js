import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ms from 'pretty-ms';

const Timer = ({ isStarted, time }) => {
  const instructions = isStarted ? `Activity started:\n` : `To begin recording,\n press the button below`;

  const timerText = isStarted ? ms(time, {colonNotation: true }) : '';

  return (
    <>
      <Text style={styles.instructions}>
        {instructions}
      </Text>
      <Text style={styles.timer}>
        {timerText}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  instructions: {
    color: '#888',
    fontSize: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  timer: {
    color: '#eb4634',
    fontSize: 40,
    marginHorizontal: 15,
    textAlign: 'center',
  },
});

export default Timer;