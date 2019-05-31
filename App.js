import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, SectionList, Animated, Dimensions} from 'react-native';

import Intro from './components/Intro';
import ListItem from './components/ListItem';
import ListHeader from './components/ListHeader';
import NewItemDialog from './components/NewItemDialog';
import DayView from './components/DayView';

export default class App extends Component{

  constructor(props){
    super(props);
    this.newItemDialog = React.createRef();
  }

  state = {
    isOpen: false,
    scrollY: new Animated.Value(0),
    pageHeight: 100,
    selectedHour: '',
    items: [
      {id:1, title: '00:00', data: []},
      {id:2, title: '01:00', data: []},
      {id:3, title: '02:00', data: []},
      {id:4, title: '03:00', data: []},
      {id:5, title: '04:00', data: []},
      {id:6, title: '05:00', data: []},
      {id:7, title: '06:00', data: [{timeId: 7,title: 'Acordar'}]},
      {id:8, title: '07:00', data: [{timeId: 8, title: 'Café da Manhã'}, {timeId: 8, title: 'Academia'}]},
      {id:9, title: '08:00', data: [{timeId: 9, title: 'Trabalhar'}]},
      {id:10, title: '09:00', data: [{timeId: 10, title: 'Trabalhar'}]},
      {id:11, title: '10:00', data: [{timeId: 11, title: 'Trabalhar'}]},
      {id:12, title: '11:00', data: [{timeId: 12, title: 'Reunião'}]},
      {id:13, title: '12:00', data: [{timeId: 13, title: 'Almoço'}, {timeId: 13, title: 'Passar no banco'}]},
      {id:14, title: '13:00', data: [{timeId: 14, title: 'Finalizar relatório'}]},
      {id:15, title: '14:00', data: [{timeId: 15, title: 'Passar no mercado'}]},
      {id:16, title: '15:00', data: []},
      {id:17, title: '16:00', data: [{timeId: 17, title: 'Dentista'}]},
      {id:18, title: '17:00', data: [{timeId: 18, title: 'Passar no shopping'}]},
      {id:19, title: '18:00', data: []},
      {id:20, title: '19:00', data: [{timeId: 20, title: 'Cinema'}]},
      {id:21, title: '20:00', data: []},
      {id:22, title: '21:00', data: [{timeId: 22, title: 'Trabalho da faculdade'}]},
      {id:23, title: '22:00', data: []},
      {id:24, title: '23:00', data: []}
    ]
  }

  onOpen = () => {
    this.setState({isOpen: true});
  }

  closeScreen = () => {
    this.setState({isOpen: false});
  }

  onRemove = (itemToRemove) => {
    const items = this.state.items.map(item => {
      if(itemToRemove.timeId === item.id){
        item.data = item.data.filter(item => item.title !== itemToRemove.title)
      }
      return item;
    });
    this.setState({items});
  }

  onNewItem = (itemTitle) => {
    const selectedHour = this.state.selectedHour,
      newItem = {timeId: selectedHour.id, title: itemTitle},
      items = this.state.items.map(item => {
        if(selectedHour.id === item.id){
          item.data = [...item.data, newItem];
        }
        return item;
      });
      this.setState({items});
  }

  selectHour = (selectedHour) => {
    this.setState({
      selectedHour
    }, () => {
      this.newItemDialog.current.open();
    })
  }

  handleScroll = Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])

  onContentSizeChange = (scrollWidth, scrollHeight) => {
    const {height} = Dimensions.get('screen'),
      pageHeight = Math.abs(height - scrollHeight - 100);
    this.setState({pageHeight});
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        {state.isOpen ? null : <Intro onOpen={this.onOpen} />}
        
        <DayView onPress={this.closeScreen} scrollY={state.scrollY} pageHeight={state.pageHeight} />

        <SectionList
          keyExtractor={(item) => item.title}
          sections={state.items}
          stickySectionHeadersEnabled={true}
          renderSectionHeader={({section}) => <ListHeader onPress={this.selectHour} item={section} />}
          renderItem={({item}) => <ListItem onRemove={this.onRemove} item={item} />}
          onScroll={this.handleScroll}
          onContentSizeChange={this.onContentSizeChange}
        />

        <NewItemDialog ref={this.newItemDialog} onNewItem={this.onNewItem} selectedHour={state.selectedHour} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
