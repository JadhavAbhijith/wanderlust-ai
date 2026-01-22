import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "models/gemini-2.0-flash";

async function run() {

  const prompt = `
You are a professional travel planner.

Plan a 3-day budget-friendly trip to Goa for a solo traveler.
List exactly 5 activities in bullet points.
Keep suggestions affordable and practical.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    }
  );

  const data = await response.json();

  if (data.error) 
    {
        console.error("API Error:", data.error.message);
        return;
    }

  console.log("Gemini AI Response:\n");
  console.log(data.candidates[0].content.parts[0].text);
}

run();
