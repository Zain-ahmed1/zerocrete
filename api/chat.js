import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { messages } = req.body;

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: process.env.SYSTEM_PROMPT,
            },
            ...messages,
        ],
    });

    const replyText = completion.choices[0].message.content;

    const showWhatsapp =
        /price|custom|bulk|contact|testing|partnership/i.test(replyText);

    res.status(200).json({
        reply: { role: "assistant", content: replyText },
        showWhatsapp,
    });
}
