import React, {Component} from 'react';
import {StyleSheet, Animated} from 'react-native';

export default class DayView extends Component{
    static defaultProps = {
        onPress: () => {},
        pageHeight: 100,
        scrollY: new Animated.Value(0)
    }

    getContainerStyle = () => {
        const pageHeight = this.props.pageHeight,
            backgroundColor = this.props.scrollY.interpolate({
                inputRange: [0, pageHeight*.4, pageHeight*.8, pageHeight*.9, pageHeight],
                outputRange: ['#1e237f', '#47b9ff', '#901570', '#86009e', '#1e237f']
            });
        return {
            backgroundColor
        }
    }

    getSunMoonStyle = () => {
        const pageHeight = this.props.pageHeight,
            backgroundColor = this.props.scrollY.interpolate({
                inputRange: [0, pageHeight*.5, pageHeight*.65, pageHeight*.9],
                outputRange: ['white', 'yellow', 'orange', 'white']
            }),
            left = this.props.scrollY.interpolate({
                inputRange: [0, pageHeight],
                outputRange: ['2%', '90%']
            }),
            top = this.props.scrollY.interpolate({
                inputRange: [0, pageHeight*.5, pageHeight],
                outputRange: [60, 20, 60]
            });

        return {
            backgroundColor,
            left,
            top
        }
    }

    render(){
        const {props} = this;
        return (
            <Animated.View
                onStartShouldSetResponder={() => true}
                onResponderGrant={props.onPress}
                style={[styles.dayContainer, this.getContainerStyle()]}
            >
                <Animated.View style={[styles.sunMoon, this.getSunMoonStyle()]} ></Animated.View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    dayContainer: {
        height: 100,
        width: '100%'
    },
    sunMoon: {
        width: 30,
        height: 30,
        borderRadius: 100
    }
})