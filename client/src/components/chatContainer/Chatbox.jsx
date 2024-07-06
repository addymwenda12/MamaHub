import { useEffect, useContext, useState } from "react";

import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import Cookies from "universal-cookie";
import { BallTriangle } from "react-loader-spinner";

import ChatArea from "./chatArea";
import "./chat.css";
import { GlobalContext } from "../../context/context";

const apiKey = "q4yxdb8badm6";
const client = StreamChat.getInstance(apiKey);
const cookies = new Cookies();

const userId = cookies.get("userId");
console.log(userId);

const Chatbox = () => {
  const { selectedGroup } = useContext(GlobalContext);
  const [selectedChannel, setSelectedChannel] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(selectedGroup.toLowerCase().replace(/\s+/g, ""));

  const selectChannel = async () => {
    if (selectedGroup.length > 0) {
      const filter = {
        type: "team",
        id: selectedGroup.toLowerCase().replace(/\s+/g, ""),
        members: { $in: [userId] },
      };
      try {
        setLoading(true);
        const channelQueryResponse = await client.queryChannels(filter);
        console.log(channelQueryResponse);

        if (channelQueryResponse.length > 0) {
          const channel = channelQueryResponse[0];
          await channel.watch();
          setSelectedChannel(channel);
          setLoading(false);
        } else {
          console.log(`Channel for group ${selectedGroup} does not exist.`);
          setError(`Channel for group ${selectedGroup} does not exist.`);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error selecting channel:", error);
        setError("Error selecting channel:", error);
      }
    }
  };

  useEffect(() => {
    selectChannel();
  }, [selectedGroup]);

  if (loading) {
    return (
      <div className="chat-wrapper loader-wrapper">
        <div className="loader">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#FF3D00"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>error</div>;
  }
  return (
    <div className="chat-wrapper">
      <Chat client={client}>
        <ChatArea channel={selectedChannel} />
      </Chat>
    </div>
  );
};

export default Chatbox;
