import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ms from 'pretty-ms';

const Timer = ({ isStarted }) => {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    let duration = null;
    if (isStarted) {
      setStartTime(Date.now());
      duration = setInterval(() => {
        setTime(Math.floor((Date.now() - startTime) / 1000) * 1000);
      }, 1000);
    } else {
      setTime(0);
      clearInterval(duration);
    }
    return () => {
      clearInterval(duration);
    }
  }, [isStarted, startTime]);

  const timerText = ms(time, { colonNotation: true });

  return (
    <>
      <Text style={isStarted ? styles.timerStart : styles.timerStop}>
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
  timerStart: {
    color: '#DC3725',
    opacity: 0.8,
    fontSize: 60,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  timerStop: {
    color: '#1F1F1F',
    opacity: 0.8,
    fontSize: 60,
    marginHorizontal: 15,
    textAlign: 'center',
  },
});

export default Timer;