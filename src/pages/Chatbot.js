
import { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import chatIcon from "../asserts/chat_icon.png";
import closeBotIcon from "../asserts/close_bot.png";
import AiAgent from "../asserts/ai_agent.png";
import sendIcon from "../asserts/send_icon.png";
import { io } from "socket.io-client";
import PrompMsg from "./PrompMsg";

const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMsg, setUserMsg] = useState("");
  const bottomRef = useRef(null);

 // let socketUrl = "http://localhost:5000"; 
  let socketUrl = "https://chat-bot-web-socket-backend.onrender.com/"; 
  const [socket, setSocket] = useState(null);
  const [loaderMsg, setLoaderMsg] = useState(false);

  const handleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  useEffect(() => {
    if (isChatbotOpen) {
      const newSocket = io(socketUrl, { transports: ["websocket"] });
      setSocket(newSocket);
      newSocket?.emit("userMessage", "Hi"); 

      newSocket.on("botReply", (data) => {
        // setLoaderMsg(false);
console.log(data);

        setMessages((prev) =>{
          let updated = [...prev]
          console.log(updated);
          
    if (updated.length > 0 && updated[updated.length - 1].type === "loading") {
      updated.pop(); 
    }

    updated.push({ sender: "bot", message: data.message, type: data.type });
          console.log(updated);

    return updated;
        });
      });

      newSocket.on("connect", () => {
        console.log("✅ Socket connected:", newSocket.id);
      });

      newSocket.on("disconnect", () => {
        console.log(" Socket disconnected");
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [isChatbotOpen]); 

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChange = (e) => {
    setUserMsg(e.target.value);
  };

  const handleSend = () => {
    if (userMsg.trim() === "") return;

    // setLoaderMsg(true);
    // setLoaderMsg(true);

    setMessages((prev) => [
      ...prev,
      { sender: "user", message: userMsg, type: "text" },
            { sender: "bot", message:"Loading...", type: "loading" },

    ]);

    if (socket && socket.connected) {
      socket.emit("userMessage", userMsg); 
    } else {
      console.warn("⚠️ Socket not connected. Message not sent.");
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
              <p>I will help you to know more </p>
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
            {messages.map((msg, index) => (
              
              <div key={index} className={`bot-container ${msg.sender}`}>
  {msg.type === "text" ? (
        msg.message
      ) :
      msg.type === "link" ?
      <a href={msg.message} target="_blank">{msg.message}</a>:"" 
      
      }   
      {/* {msg.type ==="linkqr"? <img src={msg.message}/>:""}    */}
         </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

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
