import { useState } from "react";

function AIAssistantButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-4 right-4 z-50 bg-slate-900 text-white p-4 rounded-full shadow-xl hover:-translate-y-1 transition"
            aria-label="Ask ZeroCrete AI"
        >
            🤖
        </button>
    );
}

export default function ZeroCreteAIChat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hi 👋 I’m ZeroCrete AI. Ask me about our concrete, durability, or applications.",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [showWhatsapp, setShowWhatsapp] = useState(false);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            const data = await res.json();

            setMessages((prev) => [...prev, data.reply]);
            if (data.showWhatsapp) setShowWhatsapp(true);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "I couldn’t respond just now. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {!open && <AIAssistantButton onClick={() => setOpen(true)} />}

            {open && (
                <div className="fixed bottom-4 right-4 w-[95vw] max-w-md bg-white rounded-xl shadow-2xl z-50 flex flex-col">
                    <div className="p-3 border-b flex justify-between items-center">
                        <span className="font-semibold">ZeroCrete AI</span>
                        <button onClick={() => setOpen(false)}>✕</button>
                    </div>

                    <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg text-sm max-w-[85%] ${m.role === "assistant"
                                        ? "bg-slate-100"
                                        : "bg-green-100 ml-auto"
                                    }`}
                            >
                                {m.content}
                            </div>
                        ))}

                        {loading && (
                            <div className="text-sm text-slate-500 italic">
                                ZeroCrete AI is thinking…
                            </div>
                        )}
                    </div>

                    {showWhatsapp && (
                        <a
                            href="https://wa.me/923258959145"
                            target="_blank"
                            className="m-3 text-center bg-[#25D366] text-white py-2 rounded-lg"
                        >
                            Contact our team on WhatsApp
                        </a>
                    )}

                    <div className="p-3 border-t flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
                            placeholder="Ask something…"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-slate-900 text-white px-4 rounded-lg"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
