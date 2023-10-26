import axios from "axios";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const [chatsArr, setChatsArr] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chats");
    setChatsArr(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      {chatsArr.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </>
  );
};
export default ChatPage;
