import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
  state = {
    color: 'red'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({color: 'green'});
    }, 2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myText} >Welcome to React Native!</Text>
        <Text style={{color: this.state.color}} >TreinaWeb</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  myText: {
    fontSize: 20
  }
});
