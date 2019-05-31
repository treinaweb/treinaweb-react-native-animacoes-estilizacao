import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Animated, Easing} from 'react-native';

import {colors} from '../styles/Styles';


export default class ListItem extends Component{

    static defaultProps = {
        item: {timeId: 0, title: ''},
        onRemove: () => {}
    }

    constructor(props){
        super(props);
        this.left = new Animated.Value(0);
        this.opacity = new Animated.Value(1);
    }

    remove = () => {
        Animated.timing(this.left, {
            toValue: 300,
            duration: 1000,
            easing: Easing.back(1)
        }).start();

        Animated.timing(this.opacity, {
            toValue: 0,
            duration: 1200
        }).start(() => {
            this.props.onRemove(this.props.item);
        })
    }

    render(){
        const {props} = this,
            {item} = props;
        return (
            <Animated.View style={[styles.itemContainer, {left: this.left, opacity: this.opacity}]} >
                <Text style={[styles.itemTitle]} >{item.title}</Text>
                <TouchableHighlight onPress={this.remove} >
                    <Text style={[styles.removeButton]} >X</Text>
                </TouchableHighlight>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 15
    },
    itemTitle: {
        flex: 1
    },
    removeButton: {
        padding: 7,
        backgroundColor: colors.red,
        color: colors.white,
        textAlign: 'center'
    }
})