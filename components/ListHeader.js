import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../styles/Styles';

export default class ListHeader extends Component{
    static defaultProps = {
        item: {id: 0, title: ''},
        onPress: () => {}
    }

    onPress = () => {
        const {item, onPress} = this.props;
        onPress(item);
    }

    render(){
        const {props} = this,
            {item} = props;
        return(
            <View style={styles.header}>
                <Text style={styles.headerText} onPress={this.onPress} >{item.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.blue
    },
    headerText: {
        color: colors.white,
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16
    }
})