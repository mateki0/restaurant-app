import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const Message = () => {
  const [message, setMessage] = useState([]);
  const _isMounted = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      if (_isMounted.current) {
        const result = await axios('/register');
        setMessage(result.data);
      }
    };
    fetchData();
    return () => {
      _isMounted.current = false;
    };
  }, [message]);
  return (
    <div className="error-div"><h3>{message.message !== undefined ? message.message[0] : ''}</h3></div>
  );
};
