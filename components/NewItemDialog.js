import React, {Component} from 'react';
import Dialog from "react-native-dialog";

export default class NewItemDialog extends Component{
    static defaultProps = {
        selectedHour: {id: 0, title: ''},
        onNewItem: () => {}
    }

    state = {
        isDialogOpen: false,
        text: ''
    }

    open = () => {
        this.setState({isDialogOpen: true, text: ''});
    }

    close = () => {
        this.setState({isDialogOpen: false, text: ''});
    }

    addItem = () => {
        const {text} = this.state;
        if(text){
            this.props.onNewItem(text);
            this.close();
        }
    }

    render(){
        const {state, props} = this;
        return(
            <Dialog.Container visible={state.isDialogOpen} >
                <Dialog.Title>New Task - {props.selectedHour.title}</Dialog.Title>
                <Dialog.Input value={state.text} onChangeText={(text) => this.setState({text})} />
                <Dialog.Button label="Cancel" onPress={this.close} />
                <Dialog.Button label="Add" onPress={this.addItem} />
            </Dialog.Container>
        )
    }
}