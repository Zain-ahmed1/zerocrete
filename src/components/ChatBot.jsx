import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm the ZeroCrete AI. Ask me about our eco-friendly bricks!",
            sender: 'bot'
        }
    ]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // --- CONFIGURATION ---
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    // This tells the AI who it is. Customize this for your startup!
    const SYSTEM_INSTRUCTION = `
    You are the customer support AI for a startup called "ZeroCrete".
    
    About ZeroCrete:
    - We convert industrial waste into high-quality construction bricks.
    - Our bricks are eco-friendly, durable, and cost-effective.
    - Our goal is to reduce landfill waste and carbon footprint.
    - We are located in Jamshoro, Pakistan.
    - Compressive strength is around 50Mpa or ~8000 psi.
    
    Your Role:
    - Answer questions politely and professionally.
    - If someone asks about pricing, say "Pricing depends on volume, please contact zerocretepk@gmail.com."
    - Keep answers short and helpful (under 3 sentences if possible).
  `;

    const genAI = new GoogleGenerativeAI(API_KEY);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // 1. Add User Message
        const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInputText("");
        setIsLoading(true);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const prompt = `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userMessage.text}`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const botText = response.text();

            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: botText, sender: 'bot' }
            ]);
        } catch (error) {
            console.error("Error calling Gemini:", error);
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: "Sorry, I'm having trouble connecting to the server right now.", sender: 'bot' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-gray-200 flex flex-col h-[500px]">
                    {/* Header */}
                    <div className="bg-green-700 p-4 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                            <h3 className="font-semibold">ZeroCrete AI</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-green-800 p-1 rounded transition">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${msg.sender === 'user'
                                    ? 'bg-green-600 text-white rounded-br-none'
                                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex items-center gap-2 text-gray-500 text-sm">
                                    <Loader2 size={16} className="animate-spin" />
                                    Thinking...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Ask about ZeroCrete..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
        </div>
    );
};

export default ChatBot;