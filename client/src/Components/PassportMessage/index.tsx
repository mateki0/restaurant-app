import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MessageWrapper from './MessageWrapper';
import Message from './Message';

interface IMessage {
  message: object[];
}
const PassportMessage = ({ query }: { query: string }) => {
  const [message, setMessage] = useState<IMessage>();
  const _isMounted = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      if (_isMounted.current) {
        const result = await axios(query);
        setMessage(result.data);
      }
    };
    fetchData();
    return () => {
      _isMounted.current = false;
    };
  }, [message, query]);
  if (message) {
    return (
      <MessageWrapper>
        <Message>{message.message !== undefined ? message.message[0] : ''}</Message>
      </MessageWrapper>
    );
  }
  return <div></div>;
};
export default PassportMessage;
