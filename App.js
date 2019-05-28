import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Animated, Switch} from 'react-native';
import myStyles, {colors} from './styles/mainStyles';

class MyComponent extends Component{
  render(){
    return (
      <View style={this.props.style} >
        <Text>TreinaWeb</Text>
      </View>
    )
  }
}

const MyAnimatedComponent = Animated.createAnimatedComponent(MyComponent);

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

    const myAnimation = Animated.spring(this.position, {
      toValue: 100,
      bounciness: 30,
      speed: 60
    });

    myAnimation.start();
  }


  render() {

    const {size} = this.state;

    return (
      <SafeAreaView style={styles.container}>

        <MyAnimatedComponent style={{left: this.position}} />

        <Animated.Text onPress={this.onPress}
          style={[styles.viewContainer]} >
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
