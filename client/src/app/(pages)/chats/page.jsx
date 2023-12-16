'use client';
import ChatBox from '@/app/components/chatComponents/ChatBox';
import MyChats from '@/app/components/chatComponents/MyChats';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Chat = () => {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <Box
        display='flex'
        justifyContent='space-between'
        w='100%'
        h='91.5vh'
        p='10px'
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chat;
