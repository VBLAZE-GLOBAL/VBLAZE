"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Maximize2, Minimize2 } from "lucide-react";
import { findAnswer, contactInfo } from "@/components/utils/qa-database";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

interface Message {
  id: string;
  content: string;
  type: "user" | "bot";
  options?: string[];
}

export default function ChatPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm VBAI, your AI assistant. How can I help you today?",
      type: "bot",
      options: [
        "AI Solutions",
        "VR Development",
        "UI/UX Design",
        "App Development",
        "Digital Marketing",
      ],
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: findAnswer(inputValue),
        type: "bot",
        options: ["Book Consultation", "Contact Sales", "Explore Services"],
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionClick = (option: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content: option,
      type: "user",
    };
    setMessages((prev) => [...prev, newMessage]);

    if (option === "Book Consultation") {
      window.location.href = "https://www.vblaze.org/schedule";
      return;
    }

    if (option === "Contact Sales") {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Please select your region to connect with our sales team:",
        type: "bot",
        options: ["UAE Team", "Indian Team"],
      };
      setMessages((prev) => [...prev, botResponse]);
      return;
    }

    if (option === "UAE Team") {
      window.location.href = contactInfo.UAE.whatsapp;
      return;
    }

    if (option === "Indian Team") {
      window.location.href = contactInfo.India.whatsapp;
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: findAnswer(option),
        type: "bot",
        options: ["Book Consultation", "Contact Sales", "Ask Another Question"],
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
          >
            <Card
              className={`w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden ${
                isMinimized ? "h-[60px]" : ""
              }`}
            >
              <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full" />
                    <Avatar className="w-12 h-12 border-2 border-white">
                      <AvatarImage
                        src="https://i.postimg.cc/9Mr6M4tm/bot.png"
                        alt="AI Assistant"
                      />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      VBAI Assistant
                    </h2>
                    <p className="text-sm text-white/80">AI-Powered Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white/80"
                    onClick={() => setIsMinimized(!isMinimized)}
                  >
                    {isMinimized ? (
                      <Maximize2 className="w-5 h-5" />
                    ) : (
                      <Minimize2 className="w-5 h-5" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white/80"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              {!isMinimized && (
                <>
                  <CardContent className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.type === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {message.type === "bot" && (
                            <div className="relative mr-3">
                              <div className="absolute inset-0 bg-white rounded-full" />
                              <Avatar className="w-8 h-8 border-2 border-white">
                                <AvatarImage
                                  src="https://i.postimg.cc/9Mr6M4tm/bot.png"
                                  alt="AI Assistant"
                                />
                                <AvatarFallback>AI</AvatarFallback>
                              </Avatar>
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] rounded-2xl p-4 ${
                              message.type === "user"
                                ? "bg-blue-600 text-white"
                                : "bg-white shadow-md dark:bg-gray-800"
                            }`}
                          >
                            <p className="text-base leading-relaxed text-black dark:text-white">
                              {message.content}
                            </p>
                            {message.options && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {message.options.map((option) => (
                                  <Button
                                    key={option}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleOptionClick(option)}
                                    className="text-sm font-medium bg-gray-100 text-black dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
                                  >
                                    {option}
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex items-center">
                          <div className="relative mr-3">
                            <div className="absolute inset-0 bg-white rounded-full" />
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage
                                src="https://i.postimg.cc/9Mr6M4tm/bot.png"
                                alt="AI Assistant"
                              />
                              <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="bg-white shadow-md dark:bg-gray-800 rounded-2xl p-4">
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t bg-white dark:bg-gray-900">
                    <div className="flex w-full gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        className="flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                      />
                      <Button
                        onClick={handleSend}
                        size="icon"
                        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardFooter>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </Button>
    </>
  );
}
