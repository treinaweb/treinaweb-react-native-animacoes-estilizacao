import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import {colors} from '../styles/Styles';


export default class ListItem extends Component{

    static defaultProps = {
        item: {timeId: 0, title: ''}
    }

    render(){
        const {props} = this,
            {item} = props;
        return (
            <View style={[styles.itemContainer]} >
                <Text style={[styles.itemTitle]} >{item.title}</Text>
                <TouchableHighlight>
                    <Text style={[styles.removeButton]} >X</Text>
                </TouchableHighlight>
            </View>
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