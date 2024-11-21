"use client";

import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // For styling, we will use CSS Modules

// Define the possible option types
type OptionType = "Developer" | "Marketing Team";

// Define the component
const Chatbot = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Handle option selection
  const handleOptionSelect = (option: OptionType) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.fabContainer}>
        <button
          className={styles.fab}
          aria-label="Chatbot"
          onClick={() => setSelectedOption(null)}
        >
          <img
            src="https://i.postimg.cc/RZqT3ybd/2-Q-removebg-preview.png"
            alt="Chatbot"
          />
        </button>
      </div>

      {/* Chatbot conversation */}
      <div className={styles.chatbox}>
        <div className={styles.botMessage}>
          <p>Hello There, How can I help you?</p>
        </div>

        {/* Show options for the user */}
        {selectedOption === null ? (
          <div className={styles.optionsContainer}>
            <button onClick={() => handleOptionSelect("Developer")}>
              Contact Developers
            </button>
            <button onClick={() => handleOptionSelect("Marketing Team")}>
              Contact Marketing Team
            </button>
          </div>
        ) : (
          <div className={styles.botMessage}>
            <p>Thank you for reaching out to the {selectedOption}.</p>
            <a
              href={`https://wa.me/1234567890?text=Hello, I want to contact the ${selectedOption}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {selectedOption}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
