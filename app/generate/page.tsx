"use client";

import { Button, Select, TextField } from "@radix-ui/themes";
import { useState } from "react";

export default function GenerateContentPage() {
  const [niche, setNiche] = useState("");
  const [type, setType] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const typeOptions = [
    { label: "Instagram Post", value: "instagram_post" },
    { label: "LinkedIn Post", value: "linkedin_post" },
    { label: "Email Newsletter", value: "email_newsletter" },
    { label: "Product Description", value: "product_description" },
    { label: "YouTube Script", value: "youtube_script" },
    { label: "Blog Post", value: "post" },
    { label: "Tweet", value: "tweet" },
  ];

  async function generate() {
    setIsLoading(true);

    try {
      const res = await fetch("/api/generate-content", {
        method: "POST",
        body: JSON.stringify({ niche, contentType: type }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setOutput(data.content || data.error || "No response");
    } catch (err) {
      console.error("Error generating content:", err);
      setOutput("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 pt-40">
      <div
        className="flex flex-col items-center gap-6 w-full p-8 rounded-xl bg-zinc-900 shadow-2xl"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(255, 115, 0, 0.1), transparent 70%)",
        }}
      >
        <h1 className="text-4xl font-bold text-zinc-100">Generate</h1>

        <div className="flex flex-col gap-4 w-full max-w-sm mb-6">
          <TextField.Root
            color="orange"
            size="3"
            variant="classic"
            onChange={(e) => setNiche(e.target.value)}
            placeholder="Type a niche"
            value={niche}
          />

          <Select.Root value={type} size="3" onValueChange={setType}>
            <Select.Trigger
              placeholder="Select a content type"
              color="orange"
              variant="classic"
              radius="large"
              className="w-full"
            />
            <Select.Content>
              {typeOptions.map(({ label, value }) => (
                <Select.Item key={value} value={value}>
                  {label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>

          <Button
            onClick={generate}
            variant="classic"
            className="w-full"
            loading={isLoading}
          >
            Generate
          </Button>
        </div>

        {output && (
          <>
            <h1 className="text-2xl text-zinc-500 font-semibold">Output</h1>
            {/* <div
              className="mt-4 p-4 bg-zinc-900 rounded-md w-full max-w-md h-fit"
              style={{
                boxShadow: "0 4px 30px rgba(255, 115, 0, 0.3)",
              }}
            >
              <p className="text-zinc-600 text-sm">{output}</p>
            </div> */}
            <div
              className="mt-4 p-6 rounded-md w-full max-w-md h-fit overflow-auto"
              style={{
                backgroundColor: "#0d0d0d",
                boxShadow: "0 0 20px rgba(255, 115, 0, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
              }}
            >
              <p className="text-zinc-200 text-sm">{output}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
