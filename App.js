import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Animated} from 'react-native';
import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{

  state = {
  }

  constructor(props){
    super(props);
    this.position = new Animated.ValueXY({x: 0, y: 0});
  }

  componentDidMount(){
  }

  onPress = () => {
    this.position.setValue({x: 0, y: 0});

    const myAnimation = Animated.timing(this.position, {
      toValue: 100,
      duration: 2000
    });

    myAnimation.start();
  }


  render() {

    const {size} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Animated.Text onPress={this.onPress}
          style={[styles.viewContainer, {left: this.position.x, top: this.position.y}]} >
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
