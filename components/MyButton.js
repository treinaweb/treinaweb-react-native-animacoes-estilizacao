import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';


export default class MyButton extends Component{

    static defaultProps = {
        onFullPress: () => {}
    }

    state = {
        progress: new Animated.Value(0)
    }

    componentDidMount(){
        this.state.progress.addListener(({value}) => {
            if(value === 100){
                this.props.onFullPress();
            }
        })
    }

    componentWillUnmount(){
        this.state.progress.removeAllListeners();
    }

    onPress = () => {
        let progress = this.state.progress;
        progress.setValue(0);

        this.animation = Animated.timing(progress, {
            toValue: 100,
            duration: 2000
        });

        this.animation.start();
    }

    onUnpress = () => {
        this.animation.stop();
        this.state.progress.setValue(0);
    }

    render(){
        const {props, state} = this, 
            {progress} = state;
        return (
            <View
                onStartShouldSetResponder={() => true}
                onResponderGrant={this.onPress}
                onResponderRelease={this.onUnpress}
                style={{backgroundColor: '#0062ac', width: 100}}
            >
                <Text style={{textAlign: 'center', color: 'white'}} >{props.children}</Text>
                <Animated.View style={{backgroundColor: '#ccc', height: 10, width: progress}} ></Animated.View>
            </View>
        )
    }
}