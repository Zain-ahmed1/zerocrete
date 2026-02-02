import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Missing GEMINI_API_KEY");
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        const { messages } = req.body;

        // Convert chat messages to Gemini-friendly text
        const conversation = [
            process.env.SYSTEM_PROMPT || "You are a helpful assistant.",
            ...messages.map((m) => `${m.role}: ${m.content}`),
        ].join("\n");

        const result = await model.generateContent(conversation);
        const replyText = result.response.text();

        res.status(200).json({
            reply: { role: "assistant", content: replyText },
            showWhatsapp: /price|custom|bulk|contact|testing|partnership/i.test(
                replyText
            ),
        });
    } catch (err) {
        console.error("GEMINI ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
}
