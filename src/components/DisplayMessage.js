import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';



export class DisplayMessage extends Component {

    // componentDidMount(){
    //     this.props.fetchMyMessages();
    // }

    // renderMyMessages(){
    //     return this.props.myMessages.map( myMessage => {
    //         return <ContentMy key={myMessage.id}>
    //             {myMessage.Message}
    //         </ContentMy>
    //     })
    // }

    

    render() {
        // console.log(this.props.myMessages)
        return (
            <Massage>
                <Content>
                    {this.props.message.body ? this.props.message.name : this.props.messages
                    .filter(first => first.id === 1)
                    .map(message => message.body)}
                </Content>
                {/* {this.renderMyMessages()} */}
                
            </Massage>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.selectedMessage,
        messages: state.messages
    }
};

const Massage = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 0;
`


const Content = styled.div`
    opacity: 1;
    transform: scale(1) translateX(0);
    transition: transform 200ms ease-out;
    padding: .3125rem .5rem .375rem;
    background: rgb(33,33,33);
    max-width: 29rem;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0.75rem;
    margin-bottom: 5px;
`

export default connect(mapStateToProps)(DisplayMessage)
