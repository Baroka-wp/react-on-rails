import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getmessage } from '../redux/message/api.js';

const Home = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getmessage());
  }
  
  return (
    <div className='message_container'>
        <h1>{message} {' '} David</h1>
        <button onClick={() => handleClick()}>Click me !</button>
    </div>
  );
};

export default Home;