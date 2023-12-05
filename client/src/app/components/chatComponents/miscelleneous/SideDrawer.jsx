'use client';
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { useDispatch, useSelector } from 'react-redux';
import {
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from "@chakra-ui/menu";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
// import { useHistory } from "react-router-dom";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import ChatLoading from "../ChatLoading";
import ProfileModal from "./ProfileModal";
import UserListItem from "../userAvatar/UserListItem";
import { ChatState } from "@/app/Context/ChatProvider";
import { Spinner } from "@chakra-ui/spinner";




const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const[search,setSearch] = useState("")
    const[searchResult,setSearchResult] = useState([]) //search results that are going to be populated beneath after typing letters 
    const[loading,setLoading] = useState(false)
    const[loadingChat,setLoadingChat] = useState(false)//when we click on a particular user then it will display that the chat are loading
    let searches = []
    const {
        // user,
        setSelectedChat,
        chats,
        setChats,
    } = ChatState();
    const user = useSelector((state) => state.user.currentUser?.user);
  
//   const history = useHistory()
const router = useRouter();
const dispatch = useDispatch();

  const toast = useToast()

   const logoutHandler = ()=>{
    // localStorage.removeItem("userInfo")
    // history.push("/")
    //    router.push('/login')
       dispatch(logout());
   }

   const handleSearch = async()=>{
    if(!search){
        toast({
            title: "Please enter something in the search bar",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top-left",
        });
    }

    try {
        setLoading(true)
        const config={
            headers:{
                Authorization:`Bearer ${user.accessToken}`
            }
        }
        
        const {data} = await axios.get(`/api/user?search=${search}`,config)
        // console.log(data)
        setLoading(false)
        setSearchResult(data) //after typing on the search bar colleting the results in useState
    } catch (error) {
        toast({
            title: "failed to load",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
        });
    }
   }

   const accessChat = async(userId)=>{
        try {
            setLoadingChat(true)

            const config = {
                headers:{
                    "Content-type":"application/json",
                    Authorization:`Bearer ${user.token}`
                },

            }
            const {data} = await axios.post('/api/chat',{userId},config)
            console.log(data)
            if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats])// appending the fetched chats inside chats data usestate storage
            setSelectedChat(data)
            setLoadingChat(false)
            onClose()//closing the side drawer
        } catch (error) {
            toast({
                title: "Error fetching the chat",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
        }
   }
    return (
    <>
        <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bg="white"
              w="100%"
              p="5px 10px 5px 10px"
              borderWidth="5px"
        >
            <Tooltip label = "Search Users to Chat" hasArrow placement='bottom-end'>
                <Button variant="ghost" onClick={onOpen}>
                    <i className="fas fa-search"></i>
                    <Text display={{base:"none",md:"flex"}} px="4">
                        Search User
                    </Text>
                </Button>
            </Tooltip>
            <Text fontSize="2xl" fontFamily="Work sans">
                Lets Gossip
            </Text>
            <div>
                <Menu>
                    <MenuButton p={1}>
                        <BellIcon fontSize="2xl" m={1}></BellIcon>
                    </MenuButton>
                </Menu>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                        <Avatar size='sm' cursor='pointer' name={user.firstName} src={user.photo}/>
                    </MenuButton>
                    <MenuList>
                        <ProfileModal user = {user}>
                            <MenuItem>My Profile</MenuItem>
                        </ProfileModal>
                        <MenuDivider/>
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </Box>

        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Search Users</DrawerHeader>
                    <DrawerBody>
                        <Box display="flex" pb={2}>
                            <Input
                                placeholder="Search by name or email"
                                mr={2}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button onClick={handleSearch}>Go</Button>
                        </Box>
                        {loading ? (
                            <ChatLoading />
                        ) : (
                            searchResult?.map((user) => (
                                <UserListItem
                                    key={user._id}
                                    user={user}
                                    handleFunction={() => accessChat(user._id)}
                                />
                            ))
                        )}
                        {loadingChat && <Spinner ml="auto" d="flex" />}
                    </DrawerBody>
                </DrawerContent>
        </Drawer>
    </>
  )
}

export default SideDrawer
