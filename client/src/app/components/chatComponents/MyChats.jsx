'use client';
import { getSender } from '@/app/ChatLogics';
import { ChatState } from '@/app/ChatProvider';
import { Box, Stack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ChatLoading from './ChatLoading';

const MyChats = ({ fetchAgain }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, chats, setChats } = ChatState();
  const toast = useToast();
  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      };

      const { data } = await axios.get(
        'http://localhost:5000/api/chat',
        config
      );
      console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: 'Error Occured!',
        description: 'Failed to Load the chats',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left'
      });
    }
  };

  useEffect(() => {
    setLoggedUser(user);
    fetchChats();
  }, [fetchAgain]);
  console.log(loggedUser);
  return (
    <Box
      display={{ base: selectedChat ? 'none' : 'flex', md: 'flex' }}
      flexDir='column'
      alignItems='center'
      p={3}
      w={{ base: '100%', md: '31%' }}
      borderRadius='lg'
      borderWidth='1px'
      className='dark:bg-[#21272f] bg-neutral-300'
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: '28px', md: '30px' }}
        fontFamily='Work sans'
        display='flex'
        w='100%'
        justifyContent='space-between'
        alignItems='center'
        className='text-gray-600 dark:text-gray-300'
      >
        {' '}
        My Chats
      </Box>

      <Box
        display='flex'
        flexDir='column'
        p={3}
        w='100%'
        h='100%'
        borderRadius='lg'
        overflowY='hidden'
        className='dark:bg-[#171b20] bg-neutral-200'
      >
        {chats ? (
          <Stack overflowY='scroll'>
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor='pointer'
                color={selectedChat === chat ? 'white' : 'black'}
                px={3}
                py={2}
                borderRadius='lg'
                key={chat._id}
                className={
                  selectedChat === chat ? 'bg-[#38B2AC]' : 'bg-gray-200'
                }
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
