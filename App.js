import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.viewContainer} >
          <Text style={styles.text} >ABC</Text>
          <Text style={styles.text} >DEF</Text>
          <Text style={styles.text} >GHI</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: colors.blue,
    color: 'white'
  }
});
