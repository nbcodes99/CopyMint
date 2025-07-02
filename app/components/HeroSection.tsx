import Image from "next/image";
import icon1 from "../assets/icon1.png";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center px-6 md:px-24 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.1),_transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(transparent_39px,_#2a2a2a_40px),_linear-gradient(90deg,_transparent_39px,_#2a2a2a_40px)] [background-size:40px_40px] opacity-50 animate-pulse-slow !bg-transparent z-0" />

      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl flex flex-col items-center md:items-start text-center md:text-left animate-slide-up px-3">
          <p className="mb-10 md:mb-4 inline-block px-4 py-1 text-sm bg-black/50 border border-green-900 rounded-full">
            🔥 We raised $1M in funding!
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-200">
            The AI Content Engine your brand needs
          </h1>

          <p className="text-zinc-400 mb-8">
            From captions to visuals, CopyMint generates AI-powered content
            tailored to your niche — saving you hours and boosting your brand
            presence effortlessly.
          </p>

          <div className="flex gap-4">
            <Button variant="solid" size="3" color="green">
              <Link href="/getstarted">Get Started</Link>
            </Button>
            <Button variant="outline" size="3" color="green">
              <Link href="/learnmore">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:block max-w-md animate-scale-in">
          <Image src={icon1} alt="Logo" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
