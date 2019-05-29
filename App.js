import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Animated, Switch} from 'react-native';
import myStyles, {colors} from './styles/mainStyles';

import MyListItem from './components/MyListItem';

export default class App extends Component{

  state = {
    list: [
      {id: 1, name: 'JavaScript'},
      {id: 2, name: 'C#'},
      {id: 3, name: 'Python'},
      {id: 4, name: 'PHP'},
      {id: 5, name: 'Ruby'}
    ]
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  onRemove = (itemToRemove) => {
    const list = this.state.list.filter(item => item.id !== itemToRemove.id);
    this.setState({list});
  }


  render() { 
    return (
      <SafeAreaView style={styles.container}>
        <View style={{position: 'absolute', top: 0, width: '100%', height: 100, backgroundColor: 'lightgreen'}} ></View>

        <View>
          {this.state.list.map((item) => <MyListItem onDrop={() => {this.onRemove(item)}} key={item.id} title={item.name} />)}
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
  }
});
