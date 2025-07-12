import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center px-6 md:px-24 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,165,0,0.15),_transparent_100%)] z-0 pointer-events-none" />
      <div className="max-w-3xl flex flex-col items-center text-center px-3">
        <p className="mb-6 md:mb-4 px-4 py-1 text-sm bg-black/40 border animate-scale-in border-orange-500 rounded-full text-orange-400">
          🔥 Solutions
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-200 leading-tight animate-slide-up">
          The AI Content Engine your brand needs
        </h1>

        <p className="text-zinc-400 mb-8 text-lg animate-slide-down">
          From captions to visuals, CopyMint generates AI-powered content
          tailored to your niche — saving you hours and boosting your brand
          presence effortlessly.
        </p>
        <div className="flex gap-4 animate-zoomIn">
          <Button variant="solid" size="3" color="orange">
            <Link href="/getstarted">Get Started</Link>
          </Button>
          <Button variant="outline" size="3" color="orange">
            <Link href="/generate">Generate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
