"use client";

import React from "react";
import { useState } from "react";

export default function AIChatPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!prompt) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch {
      setResponse("Unable to reach backend");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <h2>Next.js AI Chat</h2>

      <textarea
        placeholder="Enter your prompt..."
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />

      <button onClick={sendPrompt} disabled={loading}>
        {loading ? "Generating..." : "Send Prompt"}
      </button>

      {response && (
        <div style={{ marginTop: 20 }}>
          <h3>AI Response</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
