import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Intro extends Component{
    render(){
        return (
            <LinearGradient colors={['#146fa0', '#71c5df']}  style={[styles.container]} >
                <TouchableHighlight style={[styles.timeContainer]} >
                    <Text style={styles.time} >09:41</Text>
                </TouchableHighlight>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        zIndex: 200
    },
    timeContainer: {
        top: '40%',
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