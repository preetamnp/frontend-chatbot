import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {
    render() {
        let { chat, user} = this.props;
        return (
            <li className={`chat ${user === chat.username ? "right" : "left"}`}>
            {user !== chat.username
                && <img src={chat.img} alt={`${chat.username}'s profile pic`} />
            }
            {chat.content !== undefined && chat.content}
        </li>
        );
    }
}
Message.propTypes = { 
    chat: PropTypes.object,
    user: PropTypes.string
};
/* const Message = ({chat, user}) => (
    <li className={`chat ${user === chat.username ? "right" : "left"}`}>
        {user !== chat.username
            && <img src={chat.img} alt={`${chat.username}'s profile pic`} />
        }
        {chat.content}
    </li>
); */

export default Message;