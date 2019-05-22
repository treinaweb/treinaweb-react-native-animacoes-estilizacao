import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={[myStyles.myText, {fontSize: 30}]} >Welcome to React Native!</Text>
        <Button title="CLICK ME" color={colors.red} />
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
  }
});
