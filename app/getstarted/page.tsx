import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

export default function GetStarted() {
  return (
    <>
      <section className="pt-36 px-6 pb-20 flex flex-col items-center">
        <h1 className="font-bold text-center text-orange-50 text-4xl md:text-5xl mt-10">
          Get Started Now!
        </h1>
        <p className="text-zinc-500 text-sm mt-3 mb-8 text-center">
          AI. Fast, easy, and tailored to your brand. Instantly generate
          captions, scripts, and posts for any niche using
        </p>
        <div className="flex gap-4">
          <Button variant="solid" size="3">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button variant="outline" color="gray" size="3">
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
