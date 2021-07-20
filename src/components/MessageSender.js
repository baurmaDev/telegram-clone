import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

import { connect } from 'react-redux';
import { createMessage } from '../actions';
import { fetchMyMessages } from '../actions';
import styled from 'styled-components'
import './MessageSender.css'

export class MessageSender extends Component {

    constructor(props){
        super(props);
        this.state = {
            bool: 'mic'
        }
        // this.onMouse = this.onMouse.bind(this);
    }

    
    onMouse(){
        this.setState({bool: "send"})
        
    }

    renderInput = (formProps) => {
        
        return <input 
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            placeholder="Message" 
            onClick={() => this.onMouse()}
        />
    }

    onSubmit = (formValues) => {
        this.props.createMessage(formValues);
        console.log(formValues);
        this.props.fetchMyMessages();
        formValues.Message = '';
        console.log(formValues);
    }

    check(){
        if(this.state.bool !== 'mic'){
            return <Send />
        }
        else{
            return <Mic />
        }
        
        // console.log(this.state.bool);
    }

    render() {
        return (
                <form autoComplete="off" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Emotion />
                    <Field  name="Message" component={this.renderInput} placeholder="Message"  />
                    <Attach />
                    <button>
                        {this.check()}
                    </button>
                </form>
            
        )
    }
}

const Emotion = styled(InsertEmoticonIcon)`
    width: 40px!important;
    height: 40px!important;
    color: rgb(170,170,170);
    margin-left: 5px;
`

const Attach = styled(AttachFileIcon)`
    width: 40px!important;
    height: 40px!important;
    color: rgb(170,170,170);
    margin-right: 0.3rem;
`
const Mic = styled(MicIcon)`

`
const Send = styled(SendIcon)`

`

const wrappedForm = 
    reduxForm({
    form: 'message'
})(MessageSender);


export default  connect(null, { createMessage, fetchMyMessages })(wrappedForm);
