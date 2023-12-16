'use client';
import React, { createContext, useContext, useEffect, useState } from 'react'
const ChatContext = createContext()

const ChatProvider = ({children}) => {
  const [selectedChat,setSelectedChat] = useState()
  const[chats,setChats] = useState([]) //so that we can populate all of our chats in this chat state
  
  return (
    <ChatContext.Provider value={{
      selectedChat,
      setSelectedChat,
      chats,
      setChats,
    }}>{children}</ChatContext.Provider>
  )
}

export const ChatState = () => {
  return useContext(ChatContext);
};


export default ChatProvider