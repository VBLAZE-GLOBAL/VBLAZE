"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Gemini Flash 1.5 API
const GEMINI_API_KEY = "AIzaSyCOm1E-ZUG5eCS-dtDp3K_9j4rmYBNdQ-Q";
const GEMINI_FLASH_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

interface Option {
  id: number;
  label: string;
}

interface Message {
  type: "user" | "bot";
  content: string;
  options?: Option[];
  explanation?: string;
}

const TypingAnimation: React.FC = () => (
  <div className="flex space-x-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-16">
    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
  </div>
);

const RelatedQuestions: React.FC<{
  questions: string[];
  onSelect: (question: string) => void;
}> = ({ questions, onSelect }) => (
  <div className="flex space-x-2 mb-2 overflow-x-auto pb-2 scrollbar-hide">
    {questions.map((question, index) => (
      <button
        key={index}
        onClick={() => onSelect(question)}
        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors whitespace-nowrap"
      >
        {question}
      </button>
    ))}
  </div>
);

const AnimatedLogo: React.FC = () => {
  const [animationState, setAnimationState] = useState<"dots" | "icon">("dots");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev === "dots" ? "icon" : "dots"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {animationState === "dots" ? (
          <motion.div
            key="dots"
            className="flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-2 h-2 bg-white dark:bg-blue-300 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="w-2 h-2 bg-white dark:bg-blue-300 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.2,
              }}
            />
            <motion.div
              className="w-2 h-2 bg-white dark:bg-blue-300 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.4,
              }}
            />
          </motion.div>
        ) : (
          <motion.svg
            key="icon"
            className="w-6 h-6 text-white dark:text-blue-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.05 0 2.07-.17 3.02-.47L20 24l-1.53-4.89C20.04 17.23 22 14.79 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
};

// Gemini Flash 1.5 API call
async function fetchGeminiFlashResponse(messages: Message[]): Promise<string> {
  const systemPrompt = `You are Vyba AI, an intelligent agent for VBlaze Global. Answer as a helpful, knowledgeable, and friendly VBlaze Global representative. Provide clear, concise, and professional responses about VBlaze's services, solutions, and offerings. If the user asks for a consultation or sales, provide the appropriate links.`;

  // Gemini Flash 1.5 expects a "contents" array with role and parts
  const history = [
    {
      role: "user",
      parts: [{ text: systemPrompt }],
    },
    ...messages.map((msg) => ({
      role: msg.type === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    })),
  ];

  try {
    const res = await fetch(GEMINI_FLASH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: history,
        generationConfig: {
          temperature: 0.7,
          topP: 1,
          topK: 1,
          maxOutputTokens: 512,
        },
        safetySettings: [
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        ],
      }),
    });
    const data = await res.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Sorry, I couldn't generate a response at this time."
    );
  } catch (e) {
    return "Sorry, there was an error connecting to Vyba AI. Please try again later.";
  }
}

// 1. THEME: Update all gradients and color classes to use #524BE7-based gradient
// 2. MARKDOWN: Use a markdown parser for bold, italic, underline, and URLs
// 3. PROJECT IMAGES: Show project images if user asks about projects
// 4. REFERENCES: Show reference URLs if present in Gemini response

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Helper: Detect if message is about projects
function isProjectQuery(content: string) {
  const keywords = [
    'project', 'projects', 'portfolio', 'case study', 'case studies', 'work', 'examples', 'showcase'
  ];
  return keywords.some((kw) => content.toLowerCase().includes(kw));
}

// Helper: Get all project images
const projectImages = [
  '/images/projects/p1img1.png',
  '/images/projects/p1img2.png',
  '/images/projects/p1img3.png',
  '/images/projects/error.png',
];

// Helper: Extract reference URLs from Gemini response
function extractReferenceUrls(text: string): string[] {
  // Look for lines like: Reference: https://...
  const urlRegex = /(https?:\/\/[^\s)]+)(?=[\s\n]|$)/g;
  const matches = text.match(urlRegex);
  return matches ? Array.from(new Set(matches)) : [];
}

// Markdown renderer with custom styles
function renderStyledContent(content: string) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => (
          <a {...props} className="font-bold italic underline text-[#524BE7] hover:text-[#3a36b6] transition-colors" target="_blank" rel="noopener noreferrer" />
        ),
        strong: (props) => <strong className="font-bold text-[#524BE7]" {...props} />,
        em: (props) => <em className="italic text-[#524BE7]" {...props} />,
        u: (props) => <u className="underline text-[#524BE7]" {...props} />,
        code: (props) => <code className="bg-[#524BE7]/10 px-1 rounded text-[#524BE7] font-mono" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

const ChatPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [relatedQuestions, setRelatedQuestions] = useState<string[]>([]);
  const [lastActivityTime, setLastActivityTime] = useState<number>(Date.now());
  const [fabAnimationState, setFabAnimationState] = useState<"dots" | "icon">(
    "dots"
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const audioContext = useRef<AudioContext | null>(null);

  const initialOptions: Option[] = [
    { id: 1, label: "AI Solutions" },
    { id: 2, label: "VR Development" },
    { id: 3, label: "UI/UX Design" },
    { id: 4, label: "App Development" },
    { id: 5, label: "Digital Marketing" },
  ];

  useEffect(() => {
    if (messages.length === 0) {
      simulateBotResponse({
        type: "bot",
        content:
          "Hello! I'm Vyba AI, your AI assistant for VBlaze Global. How can I help you today?",
        options: initialOptions,
      });
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const inactivityTimer = setInterval(() => {
      if (Date.now() - lastActivityTime > 60000 && isOpen) {
        simulateBotResponse({
          type: "bot",
          content: "Is there anything else I can help you with?",
          options: initialOptions,
        });
        setLastActivityTime(Date.now());
      }
    }, 60000);

    const fabAnimation = setInterval(() => {
      setFabAnimationState((prev) => (prev === "dots" ? "icon" : "dots"));
    }, 3000);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearInterval(inactivityTimer);
      clearInterval(fabAnimation);
    };
    // eslint-disable-next-line
  }, [isOpen, lastActivityTime]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const playSound = (type: "incoming" | "outgoing") => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }

    const oscillator = audioContext.current.createOscillator();
    const gainNode = audioContext.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      type === "incoming" ? 440 : 520,
      audioContext.current.currentTime
    );
    gainNode.gain.setValueAtTime(0, audioContext.current.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      0.5,
      audioContext.current.currentTime + 0.1
    );
    gainNode.gain.linearRampToValueAtTime(
      0,
      audioContext.current.currentTime + 0.2
    );

    oscillator.start();
    oscillator.stop(audioContext.current.currentTime + 0.2);
  };

  // Simulate bot response (for initial greeting and inactivity)
  const simulateBotResponse = async (response: Message): Promise<void> => {
    if (!isOpen) return;
    setIsTyping(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );
    setIsTyping(false);
    setMessages((prev) => [...prev, response]);
    playSound("incoming");

    if (!isOpen) {
      setUnreadCount((prev) => prev + 1);
    }

    const newRelatedQuestions = generateRelatedQuestions(response.content);
    setRelatedQuestions(newRelatedQuestions);
    setLastActivityTime(Date.now());
  };

  // Send user message and get Gemini Flash 1.5 response
  const handleSend = async (): Promise<void> => {
    if (!isOpen) return;
    if (inputValue.trim()) {
      const userMessage: Message = {
        type: "user",
        content: inputValue,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setShowOptions(false);
      playSound("outgoing");

      setIsTyping(true);

      // Compose conversation for Gemini (last 6 messages for context)
      const conversation = [...messages, userMessage].slice(-6);

      // Special handling for booking/sales
      const lower = inputValue.toLowerCase();
      if (lower.includes("book") && lower.includes("consult")) {
        setIsTyping(false);
        await simulateBotResponse({
          type: "bot",
          content:
            "Great! I'm opening our scheduling page in a new tab for you. Is there anything else I can help you with?\n\n**_https://vblaze.org/schedule_**",
          options: initialOptions,
        });
        window.open("https://vblaze.org/schedule", "_blank");
        return;
      }
      if (lower.includes("contact") && lower.includes("sales")) {
        setIsTyping(false);
        await simulateBotResponse({
          type: "bot",
          content: "Which country are you from?",
          options: [
            { id: 1, label: "UAE" },
            { id: 2, label: "India" },
          ],
        });
        return;
      }
      if (lower.includes("uae sales")) {
        setIsTyping(false);
        await simulateBotResponse({
          type: "bot",
          content:
            "I'm opening WhatsApp to connect you with our UAE sales team. Is there anything else you need?\n\n**_https://wa.me/+971558291800_**",
          options: initialOptions,
        });
        window.open("https://wa.me/+971558291800", "_blank");
        return;
      }
      if (lower.includes("india sales")) {
        setIsTyping(false);
        await simulateBotResponse({
          type: "bot",
          content:
            "I'm opening WhatsApp to connect you with our India sales team. Can I help you with anything else?\n\n**_https://wa.me/+918113000155_**",
          options: initialOptions,
        });
        window.open("https://wa.me/+918113000155", "_blank");
        return;
      }

      // If project query, show images
      if (isProjectQuery(inputValue)) {
        setIsTyping(false);
        await simulateBotResponse({
          type: "bot",
          content: "Here are some of our project showcases:",
          options: initialOptions,
          explanation: '',
        });
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            content: '',
            explanation: '',
            options: undefined,
            // Custom: Attach images
          }
        ]);
        setLastActivityTime(Date.now());
        return;
      }

      // Get Gemini Flash 1.5 response
      const answer = await fetchGeminiFlashResponse(conversation);

      setIsTyping(false);

      // Extract references
      const references = extractReferenceUrls(answer);
      // Suggest options for next steps
      const botResponse: Message = {
        type: "bot",
        content: answer,
        options: [
          { id: 1, label: "Book a Consultation" },
          { id: 2, label: "Contact Sales" },
          { id: 3, label: "Ask Another Question" },
        ],
        explanation: references.length > 0 ? 'References: ' + references.map(url => `[${url}](${url})`).join(' | ') : undefined,
      };

      await simulateBotResponse(botResponse);
    }
    setLastActivityTime(Date.now());
  };

  // Handle option button click
  const handleOptionClick = async (option: Option): Promise<void> => {
    if (!isOpen) return;
    const userMessage: Message = {
      type: "user",
      content: option.label,
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowOptions(false);
    playSound("outgoing");

    let botResponse: Message;

    switch (option.label) {
      case "Contact Sales":
        botResponse = {
          type: "bot",
          content: "Which country are you from?",
          options: [
            { id: 1, label: "UAE" },
            { id: 2, label: "India" },
          ],
        };
        break;
      case "Book a Consultation":
        botResponse = {
          type: "bot",
          content:
            "Great! I'm opening our scheduling page in a new tab for you. Is there anything else I can help you with?\n\n**_https://vblaze.org/schedule_**",
          options: initialOptions,
        };
        window.open("https://vblaze.org/schedule", "_blank");
        break;
      case "Ask Another Question":
        botResponse = {
          type: "bot",
          content: "Sure, I'm here to help. What would you like to know?",
          options: initialOptions,
        };
        break;
      case "UAE":
        botResponse = {
          type: "bot",
          content:
            "I'm opening WhatsApp to connect you with our UAE sales team. Is there anything else you need?\n\n**_https://wa.me/+971558291800_**",
          options: initialOptions,
        };
        window.open("https://wa.me/+971558291800", "_blank");
        break;
      case "India":
        botResponse = {
          type: "bot",
          content:
            "I'm opening WhatsApp to connect you with our India sales team. Can I help you with anything else?\n\n**_https://wa.me/+918113000155_**",
          options: initialOptions,
        };
        window.open("https://wa.me/+918113000155", "_blank");
        break;
      default:
        setIsTyping(true);
        const conversation = [...messages, userMessage].slice(-6);
        const answer = await fetchGeminiFlashResponse(conversation);
        setIsTyping(false);
        botResponse = {
          type: "bot",
          content: answer,
          options: [
            { id: 1, label: "Book a Consultation" },
            { id: 2, label: "Contact Sales" },
            { id: 3, label: "Ask Another Question" },
          ],
        };
    }

    await simulateBotResponse(botResponse);
    setLastActivityTime(Date.now());
  };

  const handleOpen = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setIsOpen(true);
    setUnreadCount(0);
    setLastActivityTime(Date.now());
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const generateRelatedQuestions = (content: string): string[] => {
    // Static related questions for VBlaze Global
    const questions = [
      "What AI solutions does VBlaze offer?",
      "How can I book a consultation?",
      "What industries does VBlaze serve?",
      "Tell me about VBlaze's VR development.",
      "How do I contact sales?",
    ];
    return questions.slice(0, 3);
  };

  const handleRelatedQuestionClick = (question: string) => {
    if (!isOpen) return;
    setInputValue(question);
    handleSend();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] dark:bg-black/80"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        ref={chatRef}
        className={`fixed bottom-6 right-6 flex flex-col items-end z-[9999] ${
          !isOpen && "pointer-events-none"
        }`}
      >
        <div
          className={`mb-4 bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-[95vw] md:w-96 max-w-[calc(100vw-2rem)] transition-all duration-300 transform ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-r from-[#524BE7] via-[#6C63FF] to-[#524BE7] dark:from-[#524BE7] dark:via-[#6C63FF] dark:to-[#524BE7] rounded-t-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AnimatedLogo />
              <div>
                <h3 className="text-white font-semibold">Vyba AI</h3>
                <p className="text-white/80 text-sm">AI-Powered Support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="h-[35vh] md:h-[45vh] overflow-y-auto p-4 space-y-4 scrollbar-true-hide">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${message.type === "user"
                    ? "bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white"
                    : "bg-[#F5F6FF] dark:bg-[#23235B] text-[#23235B] dark:text-[#F5F6FF]"}`}
                >
                  <div>
                    {renderStyledContent(message.content)}
                  </div>
                  {/* Show project images if this is a project showcase message */}
                  {isProjectQuery(message.content) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {projectImages.map((src, i) => (
                        <img key={i} src={src} alt={`Project ${i+1}`} className="w-24 h-16 object-cover rounded shadow border border-[#524BE7]/30" />
                      ))}
                    </div>
                  )}
                  {message.options && (
                    <div className="mt-2 space-y-2">
                      {message.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left px-3 py-2 rounded-md bg-[#524BE7]/10 hover:bg-[#524BE7]/20 text-[#524BE7] dark:bg-[#23235B] dark:hover:bg-[#524BE7]/20 transition-colors"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {message.explanation && (
                    <div className="mt-2 text-xs opacity-80">
                      {renderStyledContent(message.explanation)}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <TypingAnimation />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t dark:border-[#23235B] border-[#524BE7]/20">
            <RelatedQuestions
              questions={relatedQuestions}
              onSelect={handleRelatedQuestionClick}
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full border border-[#524BE7] focus:outline-none focus:border-[#6C63FF] bg-white dark:bg-[#23235B] text-[#23235B] dark:text-[#F5F6FF]"
              />
              <button
                onClick={handleSend}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <motion.button
          onClick={handleOpen}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#524BE7] via-[#6C63FF] to-[#524BE7] border-none cursor-pointer flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {fabAnimationState === "dots" ? (
              <motion.div
                key="dots"
                className="flex space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-2 h-2 bg-white dark:bg-blue-300 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-white dark:bg-blue-300 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.2,
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-white dark:bg-blue-300 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.4,
                  }}
                />
              </motion.div>
            ) : (
              <motion.svg
                key="icon"
                className="w-8 h-8 text-white dark:text-blue-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.05 0 2.07-.17 3.02-.47L20 24l-1.53-4.89C20.04 17.23 22 14.79 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </motion.svg>
            )}
          </AnimatePresence>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 dark:bg-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {unreadCount}
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default ChatPopup;
