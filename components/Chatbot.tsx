"use client"; // This tells Next.js that this component should be rendered on the client side.

import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // For styling, we will use CSS Modules

const Chatbot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [optionsVisible, setOptionsVisible] = useState<boolean>(true);

  const toggleChatbot = () => {
    setChatVisible((prev) => !prev);
  };

  const selectOption = (option: "developers" | "marketing") => {
    let botMessage = "";

    if (option === "developers") {
      botMessage =
        'Thank you for contacting the Developers. You can reach us on WhatsApp: <a href="https://wa.me/+9718291800" target="_blank">Chat with Developer</a>';
    } else if (option === "marketing") {
      botMessage =
        'Thank you for contacting the Marketing Team. You can reach us on WhatsApp: <a href="https://wa.me/+916238409990" target="_blank">Chat with Marketing Team</a>';
    }

    setMessage(botMessage);
    setOptionsVisible(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className={styles.chatbotFab} onClick={toggleChatbot}>
        <img
          src="https://i.postimg.cc/RZqT3ybd/2-Q-removebg-preview.png"
          alt="Chatbot"
        />
      </div>

      {/* Chatbot Window */}
      {chatVisible && (
        <div className={styles.chatbotWindow}>
          <div className={styles.chatbotHeader}>
            <h4>VbAi - Assistant</h4>
            <span className={styles.closeBtn} onClick={toggleChatbot}>
              X
            </span>
          </div>
          <div className={styles.chatbotBody}>
            <div className={styles.botMessage}>
              <p>Hello There, How can I help you?</p>
              <br></br>
              {optionsVisible && (
                <div className={styles.options}>
                  <button onClick={() => selectOption("developers")}>
                    Contact Developers
                  </button>
                  <button onClick={() => selectOption("marketing")}>
                    Contact Marketing Team
                  </button>
                </div>
              )}
            </div>

            {message && (
              <div className={styles.botMessage}>
                <p dangerouslySetInnerHTML={{ __html: message }}></p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
