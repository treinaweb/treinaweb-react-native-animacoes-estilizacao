import React, {Component} from 'react';
import {Text, Animated} from 'react-native';


export default class MyScroll extends Component{
    state = {
        list: []
    }

    constructor(props){
        super(props);
        this.color = new Animated.Value(0);
    }

    componentDidMount(){
        const list = [];
        for(let i = 0; i < 25; i++){
            list.push({id: i+1});
        }
        this.setState({list});
    }

    /*onScroll = (evt) => {
        this.color.setValue(evt.nativeEvent.contentOffset.y);
    }*/

    render(){
        return(
            <Animated.ScrollView
                onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.color}}}])}
                style={{backgroundColor: this.color.interpolate({
                    inputRange: [0, 500],
                    outputRange: ['red', '#0062ac']
                })}}
            >
                {
                    this.state.list.map(item => <Text style={{height: 50, width: 100, color: 'white'}} key={item.id} >{item.id}</Text>)
                }
            </Animated.ScrollView>
        );
    }
}