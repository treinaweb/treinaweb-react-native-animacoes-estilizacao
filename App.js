import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
            
        <LinearGradient 
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, .7, .8]}
          style={myStyles.linearGradient} 
          colors={['red', 'green', 'blue']} >
          <Text style={[myStyles.myText]} >Welcome to React Native!</Text>
        </LinearGradient>

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
