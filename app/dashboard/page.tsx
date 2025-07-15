"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import DashboardCard from "../components/DashboardCard";
import { Spinner } from "@radix-ui/themes";
import { IoCloseSharp } from "react-icons/io5";

type Generation = {
  id: number;
  content: string;
  niche: string;
  content_type: string;
  created_at: string;
};

export default function Dashboard() {
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="3" />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-semibold md:mb-4 text-center pt-32">
        Dash<span className="text-orange-500">board</span>
      </h1>
      <section className="p-6 max-w-4xl flex flex-col mx-auto">
        {generations.length === 0 ? (
          <p className="text-center">No content generated yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {generations.map((gen) => (
              <Dialog.Root
                key={gen.id}
                open={selectedGeneration?.id === gen.id}
                onOpenChange={(isOpen) =>
                  setSelectedGeneration(isOpen ? gen : null)
                }
              >
                <Dialog.Trigger asChild>
                  <div>
                    <DashboardCard
                      content={gen.content}
                      contentType={gen.content_type}
                      niche={gen.niche}
                      createdAt={gen.created_at}
                    />
                  </div>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
                  <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-full max-w-xl sm:mx-4 max-h-[90vh] overflow-y-auto bg-zinc-900 p-4 sm:p-6 sm:rounded-xl rounded-none -translate-x-1/2 -translate-y-1/2 focus:outline-none">
                    <div className="flex justify-between items-center mb-4 px-6 pt-6">
                      <Dialog.Title className="text-lg font-semibold text-white">
                        Full Content
                      </Dialog.Title>
                      <Dialog.Close className="text-gray-400 hover:text-white text-2xl leading-none">
                        <IoCloseSharp />
                      </Dialog.Close>
                    </div>

                    <DashboardCard
                      content={gen.content}
                      contentType={gen.content_type}
                      niche={gen.niche}
                      createdAt={gen.created_at}
                      full
                    />
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
