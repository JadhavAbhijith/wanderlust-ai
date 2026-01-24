import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash"
});

async function generateText(prompt) {
  try {
    const result = await model.generateContent(prompt);

    const responseText = result.response.candidates[0].content.parts[0].text;

    console.log("Gemini Response:\n");
    console.log(responseText);
  } 
  catch (error) {
    console.error("Gemini API Error:", error.message);
  }
}

generateText("Explain Generative AI in simple terms for a beginner, in 4 bullet points.");
