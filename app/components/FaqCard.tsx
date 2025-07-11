"use client";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

type FAQCardProps = {
  question: string;
  answer: string;
};

export default function FAQCard({ question, answer }: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-96 md:max-w-2xl border-b border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-left space-x-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-zinc-200">{question}</span>
        <IoMdAddCircle
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[200px] mt-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 text-sm">{answer}</p>
      </div>
    </div>
  );
}
