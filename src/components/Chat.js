import React, { Component } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export class Chat extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <User>
                        <Avatar/>
                        <Status>
                            <h3>Napoleon Bonapart</h3>
                            <p>Last seen recently</p>
                        </Status> 
                    </User>
                    <Buttons>
                        {/* <SearchIcon /> */}
                        <a href="#">Edit</a>
                    </Buttons>
                </Header>
                <Display>

                </Display>
                <Input>
                </Input>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 2px;
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
    flex-direction: row;
    padding: 5px;
    height: 65px;
    align-items: center;
    box-sizing: border-box;
    background-color: #212121;
    box-shadow: 0 8px 8px rgba(0,0,0,0.25098);
`

const Display = styled.div`
    
`

const Input = styled.div`

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

export default Chat
