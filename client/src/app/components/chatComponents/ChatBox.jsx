import { ChatState } from '@/app/ChatProvider'
import { Box } from '@chakra-ui/react'
import React from 'react'

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState()
  return (
    <Box d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px">

    </Box>
  )
}

export default ChatBox
