"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./ChatWidget.module.css";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Abdelrahman's AI assistant. How can I help you learn more about his work and experience?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("skill") || lowerInput.includes("technology")) {
      return "Abdelrahman specializes in JavaScript/TypeScript, React.js, Next.js, Node.js, and Python. He's also experienced with databases like MongoDB and PostgreSQL, and cloud services like AWS.";
    }

    if (lowerInput.includes("project") || lowerInput.includes("work")) {
      return "Abdelrahman has worked on various projects including e-commerce platforms, task management apps, and blog platforms. You can check out his Projects page to see detailed information about each project with live demos and GitHub links.";
    }

    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("hire") ||
      lowerInput.includes("email")
    ) {
      return "You can reach Abdelrahman through the Contact page where you'll find his email, GitHub, and LinkedIn. There's also a contact form you can use to send him a message directly.";
    }

    if (
      lowerInput.includes("experience") ||
      lowerInput.includes("background")
    ) {
      return "Abdelrahman is a full-stack developer with experience at Tech Solutions Inc. and Digital Agency. He's passionate about creating innovative web applications and has a strong background in modern web technologies.";
    }

    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      return "Hello! I'm here to help you learn more about Abdelrahman. Feel free to ask about his skills, projects, experience, or how to contact him.";
    }

    if (lowerInput.includes("location") || lowerInput.includes("where")) {
      return "Abdelrahman is based in Egypt. He's available for both local and remote opportunities.";
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! You might want to check out Abdelrahman's About page for more details about his background and interests.",
      "I'd be happy to help! You can find more information about Abdelrahman's work on his Projects page, or reach out to him directly through the Contact page.",
      "Great question! Abdelrahman is always interested in discussing new opportunities and collaborations. Feel free to contact him directly!",
      "For more specific information about Abdelrahman's experience and skills, I recommend checking out his About page or contacting him directly.",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={styles.chatWidget}>
      <button
        className={`${styles.chatButton} ${
          isOpen ? styles.chatButtonOpen : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h3>Chat with AI Assistant</h3>
            <span className={styles.status}>Online</span>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.isUser ? styles.userMessage : styles.aiMessage
                }`}
              >
                <div className={styles.messageContent}>
                  <p>{message.text}</p>
                  <span className={styles.timestamp}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.message} ${styles.aiMessage}`}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className={styles.inputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about Abdelrahman..."
              className={styles.input}
              disabled={isTyping}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!inputValue.trim() || isTyping}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
