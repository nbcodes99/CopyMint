import FeatureCard from "./components/FeatureCard";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <section className="pt-16 md:pt-24 w-full">
        <HeroSection />
      </section>
      <section className="relative z-[999] flex flex-col items-center w-full py-10 px-4">
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(transparent_39px,_#2a2a2a_40px),_linear-gradient(90deg,_transparent_39px,_#2a2a2a_40px)] [background-size:40px_40px] opacity-50 animate-pulse-slow !bg-transparent z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.1),_transparent_60%)] pointer-events-none z-0" />

        <h1 className="text-4xl font-bold text-zinc-200 relative mb-6">
          Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full">
          <FeatureCard
            title={"Fast & Easy"}
            description={
              "No complex setup. Just enter your niche, choose the content type, and generate high-quality posts instantly."
            }
          />
          <FeatureCard
            title={"Niche Specific"}
            description={
              "Get content that’s tailored to your business and audience — not generic fluff."
            }
          />
          <FeatureCard
            title={"Multi Format"}
            description={
              "From Instagram captions to blog intros, create content for multiple platforms in one place."
            }
          />
        </div>
      </section>
      <section className="flex flex-col items-center w-full py-10 px-4">
        <h1 className="font-bold text-4xl text-zinc-200 mb-6">FAQ</h1>
        
      </section>
    </>
  );
}
