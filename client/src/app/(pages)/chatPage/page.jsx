'use client';
import React, { useState } from 'react'
// import { ChatState } from '../Context/ChatProvider'
// import { Box } from '@chakra-ui/react'
import SideDrawer from '@/app/components/chatComponents/miscelleneous/SideDrawer'
import MyChats from '@/app/components/chatComponents/MyChats'
import ChatBox from '@/app/components/chatComponents/ChatBox'
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';

const ChatPage = () => {
    // const { user } = ChatState() user information needed
    const [fetchAgain, setFetchAgain] = useState(false)//for adding new users to a group chat or updating chat name
    const user = useSelector((state) => state.user.currentUser?.user);
    return (
        <div style={{ width: "100%" }}>
            {user && <SideDrawer />}
            <Box display='flex' justifyContent='space-between'
                w='100%' h='91.5vh' p='10px'>
                {user && <MyChats fetchAgain={fetchAgain} />}
                {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}

            </Box>
        </div>
    )
}

export default ChatPage
