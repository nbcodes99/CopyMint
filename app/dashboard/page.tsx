"use client";

import { Card, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

type Generation = {
  id: number;
  content: string;
  niche: string;
  content_type: string;
  created_at: string;
};

export default function DashboardPage() {
  const [generations, setGenerations] = useState<Generation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGeneration, setSelectedGeneration] =
    useState<Generation | null>(null);

  useEffect(() => {
    async function fetchGenerations() {
      try {
        const res = await fetch("/api/generations");
        const data = await res.json();
        setGenerations(data.generations || []);
      } catch (err) {
        console.error("Error fetching generations:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGenerations();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center pt-32">
        Dashboard
      </h1>
      <section className="p-6 max-w-4xl flex flex-col mx-auto">
        {generations.length === 0 ? (
          <p>No content generated yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {generations.map((gen) => (
              <Card
                key={gen.id}
                variant="surface"
                className="cursor-pointer transition hover:shadow-md p-10"
                onClick={() => setSelectedGeneration(gen)}
              >
                <Text as="div" size="1" color="gray" className="mb-1">
                  {gen.content_type.replace("_", " ").toUpperCase()} —{" "}
                  {new Date(gen.created_at).toLocaleString()}
                </Text>
                <Text as="div" size="2" weight="medium" className="mb-2">
                  Niche: {gen.niche}
                </Text>
                <Text as="p" size="2" color="gray" className="line-clamp-3">
                  {gen.content}
                </Text>
              </Card>
            ))}
          </div>
        )}

        {selectedGeneration && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full relative">
              <button
                onClick={() => setSelectedGeneration(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>

              <div className="text-sm text-gray-500 mb-1">
                {selectedGeneration.content_type
                  .replace("_", " ")
                  .toUpperCase()}{" "}
                — {new Date(selectedGeneration.created_at).toLocaleString()}
              </div>
              <div className="text-sm font-medium mb-2">
                Niche: {selectedGeneration.niche}
              </div>
              <pre className="whitespace-pre-wrap text-sm text-gray-800">
                {selectedGeneration.content}
              </pre>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
