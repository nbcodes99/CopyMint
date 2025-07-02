import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <>
      <div className="flex flex-col items-center p-10 m-4 shadow-md feature-card rounded-md z-10">
        <h1 className="font-bold text-3xl text-zinc-200">{title}</h1>
        <p className="text-sm mt-3 text-zinc-600 text-center">{description}</p>
      </div>
    </>
  );
}
