import  { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import chatIcon from "../asserts/chat_icon.png";
import closeBotIcon from "../asserts/close_bot.png";
import AiAgent from "../asserts/ai_agent.png";
import sendIcon from "../asserts/send_icon.png";
import { io } from "socket.io-client";
const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMsg, setUserMsg] = useState("");
  const bottomRef = useRef(null);
  const handleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);

  };
  // let socketUrl = `https://chat-bot-web-socket-backend.onrender.com`;
   let socketUrl = `https://chat-bot-web-socket-backend.vercel.app/`;

  const [socket, setSocket] = useState("");
  const [loaderMsg, setLoaderMsg] = useState(false);
  useEffect(() => {
    if (isChatbotOpen) {
      const newSocket = io(socketUrl, {
        transports: ["websocket"],
      });
      setSocket(newSocket);
      newSocket.emit("userMessage", () => {
        setMessages((prev) => [
          ...prev,
          { sender: "user", message: "hi", type: "text" },
        ]);
      });
    }
  }, []);
  useEffect(() => {
    if (isChatbotOpen) {
      const newSocket = io(socketUrl, {
        transports: ["websocket"],
      });
      setSocket(newSocket);
      setLoaderMsg(false);
      newSocket.emit("userMessage", () => {
        setMessages((prev) => [
          ...prev,
          { sender: "user", message: "hi", type: "text" },
        ]);
      });
      newSocket.on("botReply", (data) => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            message: data,
            type: "text",
          },
        ]);
      });

      newSocket.on("connect", () => {});
      newSocket.on(`disconnect`, () => {
        console.log("socket disoonnected");
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [messages]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleChange = (e) => {
    const value = e.target.value;
    setUserMsg(value);
  };

  const handleSend = () => {
    if (userMsg.trim() === "") return;

    setLoaderMsg(true);

    setMessages((previousMsg) => [
      ...previousMsg,
      { sender: "user", message: userMsg, type: "text" },
    ]);
    if (socket && socket.connected) {
      socket.emit("userMessage", userMsg);
    } else {
      console.warn(" Socket not connected. Message not sent.");
    }
    setUserMsg("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="chatbot-container" onClick={handleChatbot}>
        <img
          src={isChatbotOpen ? closeBotIcon : chatIcon}
          alt="chat_icon"
          className="chat_icon_open"
        />
      </div>
      {isChatbotOpen && (
        <div className="chat_bot_main_container">
          <div className="chat-header">
            <div>
              <img src={AiAgent} className="ai_agent_header" alt="ai agent" />
            </div>
            <div>
              <h3>AI agent </h3>
              <p>i will help you to know more </p>
            </div>
            <div>
              <img
                src={closeBotIcon}
                onClick={handleChatbot}
                alt="chat_icon"
                className="chat_icon_open_header"
              />
            </div>
          </div>
          <div className="chat-body">
            {loaderMsg && <div className={`bot-container bot`}>Loading...</div>}
            {messages?.map((msg, index) => (
              <>
                <div key={index} className={`bot-container ${msg.sender}`}>
                  {msg.message}
                </div>
              </>
            ))}
          </div>
          <div ref={bottomRef}></div>

          <div className="chat-footer">
            <textarea
              value={userMsg}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <img onClick={handleSend} src={sendIcon} alt="send" />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
