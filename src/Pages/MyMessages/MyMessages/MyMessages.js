import React, { useEffect, useState } from 'react';
import MyMessage from '../MyMessage/MyMessage';

const MyMessages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/contacts")
        .then(res => res.json())
        .then(data => {
            setMessages(data);
        })
    } , [])
    return (
        <div>
            <h3>My Messages</h3>
            
            {
                messages.map((message, i) => <MyMessage
                key={message._id}
                i={i}
                singleMessage={message}
                ></MyMessage>)
            }
        </div>
    );
};

export default MyMessages;