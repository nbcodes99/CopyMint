"use client";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="pt-36 flex flex-col items-center px-4 text-zinc-200 pb-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-orange-500 text-sm uppercase tracking-wide font-semibold">
          Choose Your Plan
        </h1>
        <h1 className="text-3xl font-bold mt-4">
          Simple, Fair Pricing for Daily Creators
        </h1>
        <p className="text-zinc-400 mt-4 text-sm">
          Start free. Upgrade for more generations, faster speed, and premium
          features.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 w-full h-fit"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="bg-zinc-900 rounded-xl flex flex-col p-6 border border-zinc-700 h-fit"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-1">Free</h3>
          <p className="text-orange-400 text-3xl font-bold mb-2">$0</p>
          <p className="text-zinc-400 mb-6">Perfect to get started.</p>
          <hr className="border-zinc-700 mb-4" />
          <ul className="space-y-2 mb-6 flex flex-col items-start">
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> 3 generations
              per day
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> All content
              types
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> 1 saved
              brand/niche
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineCancel className="text-red-400 text-lg" /> No image
              suggestions
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineCancel className="text-red-400 text-lg" /> Priority
              support
            </li>
          </ul>
          <button className="w-full py-2 bg-orange-500 rounded-md font-medium">
            Select
          </button>
        </motion.div>

        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border-2 border-orange-500 shadow-lg relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold mb-1">Standard</h3>
          <p className="text-orange-400 text-3xl font-bold mb-2">$4.99</p>
          <p className="text-zinc-400 mb-6">
            For active creators and growing brands.
          </p>
          <hr className="border-zinc-700 mb-4" />
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> 10 generations
              per day
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> All content
              types
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> 5 saved
              brands/niches
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineCancel className="text-red-400 text-lg" /> Image
              suggestions
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> Priority
              support
            </li>
          </ul>
          <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 rounded-md font-semibold">
            Select
          </button>
        </motion.div>

        <motion.div
          className="bg-zinc-900 rounded-xl p-6 border border-zinc-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-1">Premium</h3>
          <p className="text-orange-400 text-3xl font-bold mb-2">$14.99</p>
          <p className="text-zinc-400 mb-6">
            For power users, teams, and agencies.
          </p>
          <hr className="border-zinc-700 mb-4" />
          <ul className="space-y-2 mb-6 flex flex-col">
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> Unlimited
              generations
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> All content
              types
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> Unlimited
              brands/niches
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> Image
              suggestions
            </li>
            <li className="flex items-center gap-2">
              <GrStatusGood className="text-green-400 text-lg" /> Priority
              support
            </li>
          </ul>
          <button className="w-full py-2 bg-orange-500 rounded-md font-medium">
            Select
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
