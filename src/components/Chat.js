import React, { Component } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import MessageSender from './MessageSender';
import { connect } from 'react-redux';
import DisplayMessage from './DisplayMessage';
import DisplayMyMessages from './DisplayMyMessages';

export class Chat extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <User>
                        <Avatar/>
                        <Status>
                            <h3>{this.props.message.name}</h3>
                            <p>Last seen recently</p>
                        </Status> 
                    </User>
                    <Buttons>
                        {/* <SearchIcon /> */}
                        <a href="#">Edit</a>
                    </Buttons>
                </Header>
                <Display>
                    <Show>
                        <DisplayMessage />
                        <DisplayMyMessages />
                    </Show> 
                </Display>
                <Message>
                    <MessageSender />
                </Message>
            </Container>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {message: state.selectedMessage}
};



const Message = styled.div`
    display: flex;
    justify-content: center;
    
`
const Display = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`
const Show = styled.div`
    display: flex;
    width: 796px;
    height: 805px;
    position: fixed;
    flex: 1;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: overlay;
    
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 2px;
    position: fixed;
    height: 945px;
`
const Status = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.375rem;
        white-space: pre;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        unicode-bidi: plaintext;
    }
    p {
        font-size: .875rem;
        line-height: 1.125rem;
        margin: 0;
        color: var(--color-text-secondary);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
    }
`
const Avatar = styled(AccountCircleIcon)`
    width: 40px !important;
    height: 40px !important;
    margin-right: 5px;
`
const Search = styled(SearchIcon)`

`
const Vert = styled(MoreVertIcon)`

`
const Header = styled.div`
    display: flex;
    width: 1395px;
    flex-direction: row;
    padding: 5px;
    height: 65px;
    align-items: center;
    box-sizing: border-box;
    background-color: #212121;
    box-shadow: 0 8px 8px rgba(0,0,0,0.25098);
`




const User = styled.div`
    display: flex;
    align-items: center;
    padding-right: 40%;
    h3 {
        padding-right: 8px;
    }
`

const Buttons = styled.div`
    display: flex;
    margin-left:auto;
    justify-content: space-around!important;
    a {
        text-decoration: none;
        padding: 0 15px 0 5px;
        color:white;
    }
`

export default connect(mapStateToProps)(Chat) 
