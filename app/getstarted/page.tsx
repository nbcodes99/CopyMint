import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

export default function GetStarted() {
  return (
    <>
      <section className="pt-36 px-6 pb-20 flex flex-col items-center">
        <h1 className="font-bold text-green-100 text-3xl md:text-5xl my-4">
          Get Started Now!
        </h1>
        <div className="flex gap-4">
          <Button variant="soft">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button variant="outline">
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
