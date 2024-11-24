"use client"; // This tells Next.js that this component should be rendered on the client side.

import React, { useState, useEffect, useRef } from "react";
import styles from "./Chatbot.module.css"; // For styling, we will use CSS Modules

const Chatbot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [optionsVisible, setOptionsVisible] = useState<boolean>(true);

  const chatbotRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setChatVisible((prev) => !prev);
  };

  const selectOption = (option: string) => {
    let botMessage = "";

    if (option === "developers") {
      botMessage =
        'Connect with our UAE team. You can reach us on WhatsApp: <a href="https://wa.me/+971558291800?text=Hey%20Team%20VBLAZE" target="_blank">Thank you</a>';
    } else if (option === "marketing") {
      botMessage =
        'Connect with our IND team. You can reach us on WhatsApp: <a href="https://wa.me/+918113000155?text=Hey%20Team%20VBLAZE" target="_blank">Thank uou</a>';
    }

    setMessage(botMessage);
    setOptionsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target as Node)
      ) {
        setChatVisible(false);
      }
    };

    if (chatVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatVisible]);

  return (
    <>
      {/* Floating Action Button */}
      <div className={styles.chatbotFab} onClick={toggleChatbot}>
        <img
          src="https://i.postimg.cc/SxXD9vMx/2-Q-removebg-preview.png"
          alt="Chatbot"
        />
      </div>

      {/* Chatbot Window */}
      {chatVisible && (
        <div
          className={styles.chatbotWindow}
          ref={chatbotRef}
          onClick={(e) => e.stopPropagation()} // Prevent closing the popup for clicks inside
        >
          <div className={styles.chatbotHeader}>
            <h4>VbAi - Chatbot</h4>
            <span
              className={styles.closeBtn}
              onClick={() => setChatVisible(false)}
            >
              X
            </span>
          </div>
          <div className={styles.chatbotBody}>
            <div className={styles.botMessage}>
              <p>Hello There, How can I help you?</p>
              <br />
              {optionsVisible && (
                <div className={styles.options}>
                  <button onClick={() => selectOption("developers")}>
                    Meet our UAE Team
                  </button>
                  <button onClick={() => selectOption("marketing")}>
                    Meet our IND Team
                  </button>
                  <br></br>
                  <p className="text-gray-400">
                    Stay tuned for AI-powered solutions!
                  </p>
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
