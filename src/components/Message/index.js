import React from 'react';

const Message = ({message}) => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-5xl font-bold mx-2">{message}</p>
  </div>
)

export default Message;