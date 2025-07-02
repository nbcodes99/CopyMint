"use client";

import { useState } from "react";

export default function GenerateContentPage() {
  const [niche, setNiche] = useState("");
  const [type, setType] = useState("Instagram caption");
  const [output, setOutput] = useState("");

  async function generate() {
    const res = await fetch("/api/generate-content", {
      method: "POST",
      body: JSON.stringify({ niche, contentType: type }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setOutput(data.content || data.error);
  }

  return (
    <div className="max-w-xl mx-auto p-6 pt-24">
      <h1 className="text-xl mb-4">Generate Social Media Content</h1>

      <input
        suppressHydrationWarning
        key="niche"
        type="text"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        placeholder="Enter niche (e.g., fitness coach)"
        className="border px-3 py-2 w-full mb-3"
        autoComplete="off"
      />

      <select
        suppressHydrationWarning
        key="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border px-3 py-2 w-full mb-3"
      >
        <option>Instagram caption</option>
        <option>Twitter post</option>
        <option>Blog intro</option>
      </select>

      <button
        suppressHydrationWarning
        onClick={generate}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Generate
      </button>

      {output && (
        <div className="mt-4 bg-zinc-800 text-white p-4 rounded">
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
}
