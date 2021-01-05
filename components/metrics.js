import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './timer.js';

const Metrics = ({ isStarted, totalDist }) => {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const distance = totalDist.toFixed(2);

  if(!isStarted) {
    return (
      <Text style={styles.instructions}>
        to begin recording press the button below
      </Text>
    )
  } else {
    return (
      <View style={styles.metricsContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.descText}>Time Elapsed</Text>
          <Text>(HH:MM:SS)</Text>
          <Timer isStarted={isStarted}/>
        </View>
        <View style={styles.distContainer}>
          <Text style={styles.descText}>Distance Travelled</Text>
          <Text>(miles)</Text>
          <Text style={styles.distanceText}>{distance}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  instructions: {
    color: '#888',
    fontSize: 30,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  metricsContainer: {
    flexDirection: 'row',
  },
  timeContainer: {
    alignItems: 'center',
    width: 160,
    marginRight: 10,
  },
  distContainer: {
    alignItems: 'center',
    marginLeft: 10,
  },
  descText: {
    fontSize: 20,
  },
  distanceText: {
    color: '#1F1F1F',
    opacity: 0.8,
    fontSize: 60,
  }
});

export default Metrics;