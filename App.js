import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import Intro from './components/Intro';
import ListItem from './components/ListItem';

export default class App extends Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Intro />

        <ListItem item={{timeId: 1, title: 'Acordar'}} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
