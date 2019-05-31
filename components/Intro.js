import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';


export default class Intro extends Component{
    render(){
        return (
            <View style={[styles.container]} >
                <TouchableHighlight style={[styles.timeContainer]} >
                    <Text style={styles.time} >09:41</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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