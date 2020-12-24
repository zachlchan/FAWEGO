import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/header';
import Timer from './components/timer';
import GPS_Track from './components/gps/gps-track';
import RecordButton from './components/record-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      time: 0,
      startTime: 0,
      location: { coords: {
        latitude: 0,
        longitude: 0,
      }},
    };
    this.findCoordinates = this.findCoordinates.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.toggleRecording = this.toggleRecording.bind(this);
  }

  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates = async () => {
    await navigator.geolocation.getCurrentPosition(
      location => {
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  startTimer = () => {
    this.setState({
      isRecording: true,
      time: this.state.time,
      startTime: Date.now(),
    });
    this.timer = setInterval(() => {
      this.setState({ time: Math.floor((Date.now() - this.state.startTime)) })
    }, 1000);
  }

  stopTimer = () => {
    this.setState({
      isRecording: false,
      time: 0,
    });
    clearInterval(this.timer);
  }

  toggleRecording = () => {
    const { isRecording } = this.state;
    isRecording ? this.stopTimer() : this.startTimer();
  }

  render() {
    const { isRecording, time, location } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.timerContainer}>
          <Timer isStarted={isRecording} time={time} />
        </View>
        <View style={styles.gpsContainer}>
          <GPS_Track isRecording={isRecording} location={location}/>
        </View>
        <View style={styles.buttonContainer}>
          <RecordButton isRecording={isRecording} press={this.toggleRecording} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  timerContainer: {
    flex: 0.7,
    flexDirection: 'column',
  },
  gpsContainer: {
    flex: 1.2,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});

export default App;
