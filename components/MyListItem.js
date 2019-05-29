import React, {Component} from 'react';
import {Text, Animated, PanResponder} from 'react-native';

export default class MyListItem extends Component{

    static defaultProps = {
        onDrop: () => {},
        title: ''
    }

    constructor(props){
        super(props);
        this.position = new Animated.ValueXY();
        this.opacity = new Animated.Value(1);
        this.PanResponder = this.createPanResponder();
    }

    createPanResponder = () => {
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            /*onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({x: gestureState.dx, y: gestureState.dy})
            }*/
            onPanResponderMove: Animated.event([null, {dx: this.position.x, dy: this.position.y}]),
            onPanResponderRelease: (evt, gestureState) => {
                if(evt.nativeEvent.pageY <= 100){
                    Animated.timing(this.opacity, {
                        toValue: 0,
                        duration: 1000
                    }).start(this.props.onDrop);
                }else{
                    Animated.spring(this.position, {
                        toValue: 0,
                        friction: 5
                    }).start();
                }
            }
        })
    }

    render(){
        return(
            <Animated.View
                {...this.PanResponder.panHandlers}
                style={[this.position.getLayout(), {backgroundColor: '#f4c01e', padding: 15, opacity: this.opacity}]}            
            >
                <Text style={{backgroundColor: '#0062ac', color: 'white'}} >{this.props.title}</Text>
            </Animated.View>
        )
    }
}
