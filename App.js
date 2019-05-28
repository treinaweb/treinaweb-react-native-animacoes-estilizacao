import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Animated, Easing} from 'react-native';
import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{

  state = {
  }

  constructor(props){
    super(props);
    this.position = new Animated.Value(0);
  }

  componentDidMount(){
  }

  onPress = () => {
    this.position.setValue(0);

    const myAnimation = Animated.timing(this.position, {
      toValue: 1,
      duration: 2000
    });

    myAnimation.start();
  }


  render() {

    const {size} = this.state;

    const myLeftAnimation = this.position.interpolate({
      inputRange: [0, .20, .70, .90, 1],
      outputRange: [0, 100, 50, 80, 0]
    })

    return (
      <SafeAreaView style={styles.container}>
        <Animated.Text onPress={this.onPress}
          style={[styles.viewContainer, {left: myLeftAnimation}]} >
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
