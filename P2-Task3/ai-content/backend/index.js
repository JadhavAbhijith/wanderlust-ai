import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash"
});

app.post("/api/ai-chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ reply: "Prompt is required" });
  }

  try {
    const result = await model.generateContent(prompt);
    const text =
      result.response.candidates[0].content.parts[0].text;

    res.json({ reply: text });
  } catch (error) {
    res.json({
      reply:
        "AI service unavailable (quota or billing issue)"
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
