import React, { Component } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { connect } from 'react-redux';
import { fetchMessage } from '../actions';

import { selectedMessage } from '../actions';

export class Messages extends Component {

    componentDidMount(){
        this.props.fetchMessage();
        
    }
    // renderUser(){
    //     return this.props.users.map( user => {
    //         return <h3>{user.username}</h3>
    //     })
    // }
    renderMessages(){
        const { user } = this.props;
        return this.props.messages.map( message => {
            return <Message key={message.id} onClick={() => this.props.selectedMessage(message)}>
                        <Avatar />
                        <Info>
                            <Title>
                                {/* {this.renderUser()} */}
                                <h3>{message.name}</h3>
                                <Time>
                                    <span>13:07</span>
                                </Time>
                            </Title>
                            <p>{message.body}</p>
                        </Info>
                    </Message>
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Icon />
                    <Form>
                        <Search />
                        <Input placeholder="Search" />
                    </Form>
                </Header>
                <Display>
                    {this.renderMessages()}
                </Display>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
}


const Container = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #212121;
    cursor: pointer;
`
const Avatar = styled(AccountCircleIcon)`
    width: 70px !important;
    height: 70px !important; 
`
const Title = styled.div`
    display: flex;
    width:415px;
    /* h3 {
        flex-grow: 2;
    } */
`
const Time = styled.div`
    /* flex-grow: 1; */
    margin-left: auto;
    color: #686c72;
    line-height: 1.15rem;
    font-size: .85rem;
`
const Message = styled.div`
    display: flex;
    padding: 0 0 10px 10px;

`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    overflow: hidden;
    h3 {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        color: rgb(255,255,255);
        font-weight: 500;
        width: auto;
        max-width: 80%;
        margin: 0;
        overflow: hidden;
    }
    p {
        padding-right: .25rem;
        flex-grow: 1;
        color: rgb(170,170,170);
        unicode-bidi: plaintext;
        margin: 0;
        font-size: 1rem;
        line-height: 1.6875rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 80%;
    }
`
const Header = styled.div `
    display: flex;
    align-items: center;
    color: white;
    padding: 5px;
    width: 500px;
    height: 55px;
`
const Icon = styled(MenuIcon)`
    
    padding: 0 10% 10px 15px;
    width: 30px!important;
    height: 30px!important;
    color: rgb(170,170,170);
`
const Search = styled(SearchIcon)`
    color: #686c72;
    position: absolute;
    width: 30px!important;
    height: 30px!important;
    left: .75rem;
    font-size: 1.5rem;
`
const SearchBar = styled.div `

`
const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #2c2c2c;
  width: 380px;
  height: 53px;
  border-radius: 10rem;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: 3rem;
  border: none;
  font: 400 18px Arial;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #a2acb4;
  }
  color: white;
`;
const Display = styled.div `
    width: 510px;
    margin-top: 10px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`
export default connect(mapStateToProps, { fetchMessage, selectedMessage })(Messages);
