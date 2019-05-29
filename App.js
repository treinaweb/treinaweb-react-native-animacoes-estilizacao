import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Animated, Switch} from 'react-native';
import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{

  state = {
    canPress: true
  }

  constructor(props){
    super(props);
    this.position = new Animated.Value(0);
    this.position2 = new Animated.Value(0);
  }

  componentDidMount(){
  }

  onPress = () => {
    if(!this.state.canPress){
      return false;
    }

    
    this.setState({
      canPress: false
    }, () => {
      this.position.setValue(-100);
      this.position2.setValue(0);
  
      const myAnimation = Animated.timing(this.position, {
        toValue: 0,
        duration: 200
      });
  
      const myAnimation2 = Animated.spring(this.position2, {
        toValue: 100,
        friction: 1
      });
  
      Animated.stagger(1000, [
        myAnimation,
        myAnimation2
      ]).start(() => {
        this.setState({canPress: true})
      });
    })
  }


  render() {

    const {size} = this.state;

    return (
      <SafeAreaView style={styles.container}>


        <Animated.Text
          style={[styles.viewContainer, {top: this.position}]} >
              TreinaWeb
            </Animated.Text>
        <Animated.Text onPress={this.onPress}
          style={[styles.viewContainer, {top: this.position2}]} >
              TreinaWeb
            </Animated.Text>
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
