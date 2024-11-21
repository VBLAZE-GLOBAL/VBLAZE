import { useState } from "react";
import styles from "./Chatbot.module.css"; // Import CSS module for styling

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Toggle chatbot window visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setSelectedOption(null); // Reset selection when opening/closing
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {/* Chatbot Floating Action Button */}
      <div className={styles.chatbotFab} onClick={toggleChatbot}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/chat.png"
          alt="Chatbot"
        />
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className={styles.chatbotWindow}>
          <div className={styles.chatbotHeader}>
            <h4>VbAi - Chatbot</h4>
            <span className={styles.closeBtn} onClick={toggleChatbot}>
              X
            </span>
          </div>
          <div className={styles.chatbotBody}>
            {!selectedOption ? (
              <div className={styles.botMessage}>
                <p>Hello There, How can I help you?</p>
                <div className={styles.options}>
                  <button onClick={() => handleOptionSelect("developers")}>
                    Contact Developers
                  </button>
                  <button onClick={() => handleOptionSelect("marketing")}>
                    Contact Marketing Team
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.botMessage}>
                {selectedOption === "developers" ? (
                  <p>
                    Thank you for contacting the Developers. You can reach us on
                    WhatsApp:{" "}
                    <a href="https://wa.me/1234567890" target="_blank">
                      Chat with Developer
                    </a>
                  </p>
                ) : (
                  <p>
                    Thank you for contacting the Marketing Team. You can reach
                    us on WhatsApp:{" "}
                    <a href="https://wa.me/0987654321" target="_blank">
                      Chat with Marketing Team
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
