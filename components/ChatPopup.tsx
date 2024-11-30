"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { findAnswer } from '@/utils/qa-database';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Option {
  id: number;
  label: string;
}

interface Message {
  type: 'user' | 'bot';
  content: string;
  options?: Option[];
  explanation?: string;
}

const TypingAnimation: React.FC = () => (
  <div className="flex space-x-2 p-3 bg-primary/10 rounded-lg w-16">
    <div className="w-2 h-2 bg-primary rounded-full animate-[bounce_1s_infinite_0ms]"></div>
    <div className="w-2 h-2 bg-primary rounded-full animate-[bounce_1s_infinite_200ms]"></div>
    <div className="w-2 h-2 bg-primary rounded-full animate-[bounce_1s_infinite_400ms]"></div>
  </div>
);

const RelatedQuestions: React.FC<{ questions: string[], onSelect: (question: string) => void }> = ({ questions, onSelect }) => (
  <div className="flex flex-wrap gap-2 mb-2">
    {questions.map((question, index) => (
      <Button
        key={index}
        variant="outline"
        size="sm"
        onClick={() => onSelect(question)}
        className="text-xs"
      >
        {question}
      </Button>
    ))}
  </div>
);

const AnimatedLogo: React.FC = () => {
  const [animationState, setAnimationState] = useState<'dots' | 'icon'>("dots");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev === 'dots' ? 'icon' : 'dots'));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {animationState === 'dots' ? (
          <motion.div
            key="dots"
            className="flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
            />
          </motion.div>
        ) : (
          <motion.svg
            key="icon"
            className="w-6 h-6 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 10 }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.05 0 2.07-.17 3.02-.47L20 24l-1.53-4.89C20.04 17.23 22 14.79 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChatPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [relatedQuestions, setRelatedQuestions] = useState<string[]>([]);
  const [lastActivityTime, setLastActivityTime] = useState<number>(Date.now());
  const [fabAnimationState, setFabAnimationState] = useState<'dots' | 'icon'>('dots');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const audioContext = useRef<AudioContext | null>(null);

  const initialOptions: Option[] = [
    { id: 1, label: 'AI Solutions' },
    { id: 2, label: 'VR Development' },
    { id: 3, label: 'UI/UX Design' },
    { id: 4, label: 'App Development' },
    { id: 5, label: 'Digital Marketing' }
  ];

  useEffect(() => {
    if (messages.length === 0) {
      simulateBotResponse({
        type: 'bot',
        content: "Hello! I'm Vyba AI, your AI assistant. How can I help you today?",
        options: initialOptions
      });
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    const inactivityTimer = setInterval(() => {
      if (Date.now() - lastActivityTime > 60000 && isOpen) { // 1 minute of inactivity
        simulateBotResponse({
          type: 'bot',
          content: "Is there anything else I can help you with?",
          options: initialOptions
        });
        setLastActivityTime(Date.now());
      }
    }, 60000);

    const fabAnimation = setInterval(() => {
      setFabAnimationState((prev) => (prev === 'dots' ? 'icon' : 'dots'));
    }, 3000);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearInterval(inactivityTimer);
      clearInterval(fabAnimation);
    };
  }, [isOpen, lastActivityTime]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const playSound = (type: 'incoming' | 'outgoing') => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const oscillator = audioContext.current.createOscillator();
    const gainNode = audioContext.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(type === 'incoming' ? 440 : 520, audioContext.current.currentTime);
    gainNode.gain.setValueAtTime(0, audioContext.current.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioContext.current.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.current.currentTime + 0.2);

    oscillator.start();
    oscillator.stop(audioContext.current.currentTime + 0.2);
  };

  const simulateBotResponse = async (response: Message): Promise<void> => {
    if (!isOpen) return;
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    setIsTyping(false);
    setMessages(prev => [...prev, response]);
    playSound('incoming');
    
    if (!isOpen) {
      setUnreadCount(prev => prev + 1);
    }

    const newRelatedQuestions = generateRelatedQuestions(response.content);
    setRelatedQuestions(newRelatedQuestions);
    setLastActivityTime(Date.now());
  };

  const handleSend = async (): Promise<void> => {
    if (!isOpen) return;
    if (inputValue.trim()) {
      const userMessage: Message = {
        type: 'user',
        content: inputValue
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setShowOptions(false);
      playSound('outgoing');

      const answer = findAnswer(inputValue);
      const botResponse: Message = {
        type: 'bot',
        content: answer,
        options: [
          { id: 1, label: 'Book a Consultation' },
          { id: 2, label: 'Contact Sales' },
          { id: 3, label: 'Ask Another Question' },
        ],
        explanation: "It provides more context and details about the topic."
      };

      await simulateBotResponse(botResponse);
    }
    setLastActivityTime(Date.now());
  };

  const handleOptionClick = async (option: Option): Promise<void> => {
    if (!isOpen) return;
    const userMessage: Message = {
      type: 'user',
      content: option.label
    };
    
    setMessages(prev => [...prev, userMessage]);
    setShowOptions(false);
    playSound('outgoing');

    let botResponse: Message;

    switch (option.label) {
      case 'Contact Sales':
        botResponse = {
          type: 'bot',
          content: 'Which country are you from?',
          options: [
            { id: 1, label: 'UAE' },
            { id: 2, label: 'India' },
          ],
        };
        break;
      case 'Book a Consultation':
        window.open('https://vblaze.org/schedule', '_blank');
        botResponse = {
          type: 'bot',
          content: 'I\'ve opened the scheduling page in a new tab for you. Is there anything else I can help you with?',
          options: initialOptions,
        };
        break;
      case 'Ask Another Question':
        botResponse = {
          type: 'bot',
          content: "Sure, I'm here to help. What would you like to know?",
          options: initialOptions,
        };
        break;
      case 'UAE':
        window.open('https://wa.me/+971XXXXXXXXX', '_blank');
        botResponse = {
          type: 'bot',
          content: 'I\'ve opened WhatsApp for you to contact our UAE sales team. Is there anything else you need?',
          options: initialOptions,
        };
        break;
      case 'India':
        window.open('https://wa.me/+91XXXXXXXXXX', '_blank');
        botResponse = {
          type: 'bot',
          content: 'I\'ve opened WhatsApp for you to contact our India sales team. Can I help you with anything else?',
          options: initialOptions,
        };
        break;
      default:
        const answer = findAnswer(option.label);
        botResponse = {
          type: 'bot',
          content: answer,
          options: [
            { id: 1, label: 'Book a Consultation' },
            { id: 2, label: 'Contact Sales' },
            { id: 3, label: 'Ask Another Question' },
          ],
          explanation: "It provides more context and details about the topic."
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const generateRelatedQuestions = (content: string): string[] => {
    const questions = [
      "Can you provide more details?",
      "How does this compare to other solutions?",
      "What are the benefits of this approach?",
      "Are there any case studies available?",
      "What's the typical timeline for implementation?"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[99]" onClick={() => setIsOpen(false)} />
      )}
      <div 
        ref={chatRef}
        className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 flex flex-col items-end z-[100]"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-[400px] max-w-full sm:max-w-[calc(100vw-3rem)] h-[calc(100vh-2rem)] sm:h-[600px] overflow-hidden"
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-3">
                    <AnimatedLogo />
                    <div>
                      <h3 className="font-semibold">Vyba AI</h3>
                      <p className="text-sm text-muted-foreground">AI-Powered Support</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden flex flex-col">
                  <ScrollArea className="flex-grow pr-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.type === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <p>{message.content}</p>
                          {message.options && (
                            <div className="mt-2 space-y-2">
                              {message.options.map((option) => (
                                <Button
                                  key={option.id}
                                  variant="secondary"
                                  size="sm"
                                  onClick={() => handleOptionClick(option)}
                                  className="w-full justify-start"
                                >
                                  {option.label}
                                </Button>
                              ))}
                            </div>
                          )}
                          {message.explanation && (
                            <p className="mt-2 text-sm opacity-80">{message.explanation}</p>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start mb-4">
                        <TypingAnimation />
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </ScrollArea>
                  
                  <div className="flex-shrink-0 mt-4">
                    <RelatedQuestions questions={relatedQuestions} onSelect={handleRelatedQuestionClick} />
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-grow"
                      />
                      <Button onClick={handleSend} size="icon">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="w-16 h-16 mt-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {fabAnimationState === 'dots' ? (
                  <motion.div
                    key="dots"
                    className="flex space-x-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary-foreground rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-primary-foreground rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-primary-foreground rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
                    />
                  </motion.div>
                ) : (
                  <motion.svg
                    key="icon"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.05 0 2.07-.17 3.02-.47L20 24l-1.53-4.89C20.04 17.23 22 14.79 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </motion.svg>
                )}
              </AnimatePresence>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground text-xs font-bold">
                  {unreadCount}
                </span>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ChatPopup;

