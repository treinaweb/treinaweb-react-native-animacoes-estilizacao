import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Intro extends Component{

    static defaultProps = {
        onOpen: () => {}
    }

    state = {
        top: 0,
        timeTop: 1
    }

    componentDidMount(){
        this.timeStart();
    }

    timeStart = () => {
        let {timeTop} = this.state;
        if(timeTop <= 10){
            timeTop++;
            this.setState({timeTop}, () => {
                setTimeout(this.timeStart, 200);
            })
        }
    }

    open = () => {
        let {top} = this.state;
        if(top <= 10){
            top++;
            this.setState({top}, () => {
                setTimeout(this.open, 200);
            })
        }else{
            this.props.onOpen();
        }
    }

    timeStyle = () => {
        const {timeTop} = this.state;
        return {
            top: `${timeTop*4}%`
        }
    }

    containerStyle = () => {
        const {top} = this.state;
        return {
            transform: [
                {translateY: -45*top},
                {rotateX: `${8.9*top}deg`}
            ]
        }
    }

    render(){
        return (
            <LinearGradient colors={['#146fa0', '#71c5df']}  style={[styles.container, this.containerStyle()]} >
                <TouchableHighlight style={[styles.timeContainer, this.timeStyle()]} onPress={this.open} >
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