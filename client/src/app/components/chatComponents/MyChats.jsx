'use client';
import { Box, Button, Stack, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ChatState } from '@/app/Context/ChatProvider'
import { AddIcon } from '@chakra-ui/icons'
import { getSender } from '@/app/config/ChatLogics'
import ChatLoading from './ChatLoading'
import GroupChatModal from './miscelleneous/GroupChatModal'
import { useSelector } from 'react-redux'
// import GroupChatModal from './miscelleneous/GroupChatModal'




const MyChats = ({fetchAgain}) => {

const [loggedUser, setLoggedUser] = useState()
const {  selectedChat, setSelectedChat, chats, setChats } = ChatState()
    const user = useSelector((state) => state.user.currentUser?.user);
const toast = useToast()

    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            };

            const { data } = await axios.get("/api/chat", config);
            setChats(data);
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Failed to Load the chats",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
        }
    };

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
    }, [fetchAgain]);
    // whenever the fetchchats changes,its gonna fetch all the chats again. basically the useEffect runs again
  return (
      <Box
          display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
          flexDir="column"
          alignItems="center"
          p={3}
          bg="white"
          w={{ base: "100%", md: "31%" }}
          borderRadius="lg"
          borderWidth="1px"
      >
        <Box
              pb={3}
              px={3}
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
              display="flex"
              w="100%"
              justifyContent="space-between"
              alignItems="center">
                My Chats
            <GroupChatModal>
              <Button
                  display="flex"
                  fontSize={{ base: "17px", md: "10px", lg: "17px" }}
                  rightIcon={<AddIcon />}
              >
                  New Group Chat
              </Button>
            </GroupChatModal>   
        </Box>
          <Box
              display="flex"
              flexDir="column"
              p={3}
              bg="#F8F8F8"
              w="100%"
              h="100%"
              borderRadius="lg"
              overflowY="hidden"
          >
              {chats ? (
                  <Stack overflowY="scroll">
                      {chats.map((chat) => (
                          <Box
                              onClick={() => setSelectedChat(chat)}
                              cursor="pointer"
                              bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                              color={selectedChat === chat ? "white" : "black"}
                              px={3}
                              py={2}
                              borderRadius="lg"
                              key={chat._id}
                          >
                              <Text>
                                  {!chat.isGroupChat
                                      ? getSender(loggedUser, chat.users)
                                      : chat.chatName} 
                              </Text>
                        </Box>
                    ))}
                </Stack>
            ):(
                <ChatLoading/>
            )}

          </Box>
      </Box>
  )
}

export default MyChats
// getSender(loggedUser, chat.users)