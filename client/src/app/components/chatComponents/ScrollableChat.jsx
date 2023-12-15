import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from '@/app/ChatLogics';
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import React from 'react'
import { useSelector } from 'react-redux';
import ScrollableFeed from "react-scrollable-feed";
const ScrollableChat = ({ messages }) => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <ScrollableFeed>
            {messages &&
                messages.map((m, i) => (
                    <div style={{ display: "flex" }} key={m._id}>
                        {(isSameSender(messages, m, i, user._id) ||
                            isLastMessage(messages, i, user._id)) && (
                                <Tooltip label={m.sender.firstName} placement="bottom-start" hasArrow>
                                    <Avatar
                                        mt="7px"
                                        mr={1}
                                        size="sm"
                                        cursor="pointer"
                                        name={m.sender.firstName}
                                        src={m.sender.photo}
                                    />
                                </Tooltip>
                            )}
                        <span
                            style={{
                                backgroundColor: `${m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                                    }`,
                                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                borderRadius: "20px",
                                padding: "5px 15px",
                                maxWidth: "75%",
                            }}
                        >
                            {m.content}
                        </span>
                    </div>
                ))}
        </ScrollableFeed>
    );
}

export default ScrollableChat