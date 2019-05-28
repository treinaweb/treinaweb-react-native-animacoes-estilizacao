import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Animated} from 'react-native';
import myStyles, {colors} from './styles/mainStyles';

export default class App extends Component{

  state = {
  }

  constructor(props){
    super(props);
    this.x = new Animated.Value(0);
  }

  componentDidMount(){
  }

  onPress = () => {
    //this.x.setValue(0);

    const myAnimation = Animated.timing(this.x, {
      toValue: 100,
      duration: 2000
    });

    myAnimation.start();

    setTimeout(() => {
      //this.x.stopAnimation(() => {})
      //myAnimation.stop();
      this.x.resetAnimation(this.onPress);
    }, 1000)
  }


  render() {

    const {size} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Animated.Text onPress={this.onPress}
          style={[styles.viewContainer, {left: this.x}]} >
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
