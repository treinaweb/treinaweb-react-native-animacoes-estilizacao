import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight);

export default class Intro extends Component{

    static defaultProps = {
        onOpen: () => {}
    }

    state = {
        top: new Animated.Value(0),
        timeTop: new Animated.Value(0)
    }

    componentDidMount(){
        this.timeStart();
    }

    timeStart = () => {
        this.state.timeTop.setValue(0);
        Animated.timing(this.state.timeTop, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    open = () => {
        this.state.top.setValue(0);
        Animated.timing(this.state.top, {
            toValue: 1,
            duration: 1000
        }).start(this.props.onOpen);
    }

    timeStyle = () => {
        const {timeTop} = this.state;
        return {
            top: timeTop.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '40%']
            })
        }
    }

    containerStyle = () => {
        const {top} = this.state;
        return {
            transform: [
                {translateY: top.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -450]
                })},
                {rotateX: top.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '89deg']
                })}
            ]
        }
    }

    render(){
        return (
            <AnimatedLinearGradient colors={['#146fa0', '#71c5df']}  style={[styles.container, this.containerStyle()]} >
                <AnimatedTouchableHighlight style={[styles.timeContainer, this.timeStyle()]} onPress={this.open} >
                    <Text style={styles.time} >09:41</Text>
                </AnimatedTouchableHighlight>
            </AnimatedLinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        zIndex: 200
    },
    timeContainer: {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 15
    },
    time: {
        fontSize: 50,
        color: 'white'
    }
})