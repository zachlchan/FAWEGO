import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RecordButton from './components/record-button';
import Timer from './components/timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      time: 0,
      startTime: 0,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.toggleRecording = this.toggleRecording.bind(this);
  }

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
    const { isRecording, time } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
        </View>
        <View style={styles.timerContainer}>
          <Timer isStarted={isRecording} time={time} />
        </View>
        <View style={{ flex: 1 }}>
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
  timerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
