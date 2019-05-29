import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Animated, Switch} from 'react-native';
import myStyles, {colors} from './styles/mainStyles';
import MyScroll from './components/MyScroll';

export default class App extends Component{

  state = {
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyScroll />
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
    padding: 10,
    fontSize: 20
  }
});
