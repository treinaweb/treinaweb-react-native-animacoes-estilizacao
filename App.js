import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground} from 'react-native';

import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <ImageBackground style={{width: 300, height: 200}} source={{uri: 'https://www.lacala.com/wp-content/uploads/2018/08/campo-America-Tee1.jpg'}} >
            <Text style={[myStyles.myText]} >Welcome to React Native!</Text>
          </ImageBackground>
        </TouchableOpacity>
        
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
