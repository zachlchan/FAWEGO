import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RecordButton from './components/record-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false
    };
    this.setIsRecording = this.setIsRecording.bind(this);
  }

  setIsRecording = () => {
    this.setState({ isRecording: !this.state.isRecording });
  }

  render() {
    const { isRecording } = this.state;
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
          <RecordButton isRecording={isRecording} press={this.setIsRecording}/>
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
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});

export default App;
