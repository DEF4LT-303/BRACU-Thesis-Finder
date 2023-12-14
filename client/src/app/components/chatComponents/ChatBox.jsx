import { ChatState } from '@/app/ChatProvider'
import React from 'react'

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState()
  return (
    <div>
      This is ChatBox
    </div>
  )
}

export default ChatBox
