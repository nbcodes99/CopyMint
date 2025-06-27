import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <section className="pt-16 md:pt-24 w-full">
        <HeroSection />
      </section>
      <section className="relative z-[999] flex flex-col items-center w-full bg-black/50 py-10 px-4">
        <h1 className="text-4xl font-bold text-zinc-100 relative z-[1000]">
          What CopyMint Can Do For You
        </h1>
      </section>
    </>
  );
}
