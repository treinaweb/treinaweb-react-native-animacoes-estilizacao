import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, SafeAreaView, Dimensions} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{



  render() {

    const {width} = Dimensions.get('window'),
      size = (width / 3) - 8;


    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.viewContainer} >
          <Text style={[styles.text, {width: size, height: size}]} >ABC</Text>
          <Text style={[styles.text, {width: size, height: size}]} >DEF</Text>
          <Text style={[styles.text, {width: size, height: size}]} >GHI</Text>
          <Text style={[styles.text, {width: size, height: size}]} >ABC</Text>
          <Text style={[styles.text, {width: size, height: size}]} >DEF</Text>
          <Text style={[styles.text, {width: size, height: size}]} >GHI</Text>
        </View>
      </SafeAreaView>
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
  viewContainer: {
    backgroundColor: colors.yellow,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    width: 50,
    height: 50,
    backgroundColor: colors.blue,
    color: 'white',
    marginBottom: 10
  }
});
