import React from 'react';
import {connect} from 'react-redux';
import {createPost} from './actions/index'
import './App.css';

import Message from './Message';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            newMessage: ''
        };
        this.submitMessage = this.submitMessage.bind(this);
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {   
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
    }

    submitMessage(e) {
        e.preventDefault();
        if (this.state.newMessage !== undefined || this.state.newMessage !== '') {
            this.setState({
                chats: this.state.chats.concat([{
                    username: "customer",
                    content: this.state.newMessage,
                    img: "http://i.imgur.com/Tj5DGiO.jpg",
                }]),
                newMessage: ''
            });
        }

    }

    handleInputTextChange(event) {
        this.setState({
            newMessage: event.target.value  
        });
    }

    render() {
        const username = "customer";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Chatbot</h3>
                <ul className="chats" ref={this.chatsRef}>
                    {
                        chats.map((chat) => {
                            return chat.content !== undefined && chat.content !== '' && <Message key={chat.id} chat={chat} user={username} />
                        })
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" value= {this.state.newMessage} onChange={this.handleInputTextChange}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {message: state.message};
}

const mapDispatchToProps = dispatch => {
    return {
      onMessage: msg => {
        dispatch(createPost(msg));
      }
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chatroom);