import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import Intro from './components/Intro';
import ListItem from './components/ListItem';

export default class App extends Component{

  state = {
    isOpen: false
  }

  onOpen = () => {
    this.setState({isOpen: true});
  }

  render() {
    const {state} = this;
    return (
      <SafeAreaView style={styles.container}>
        {/*state.isOpen ? null : <Intro onOpen={this.onOpen} />*/}
        

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
