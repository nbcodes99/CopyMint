import FaqSection from "./components/FaqSection";
import FeatureCard from "./components/FeatureCard";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <section className="pt-16 md:pt-24 w-full bg-black">
        <HeroSection />
      </section>
      <section className="relative z-[999] flex flex-col bg-black/60 items-center w-full py-10 px-4">
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
      <section className="flex flex-col bg-black/80 items-center w-full py-10 px-4">
        <FaqSection />
      </section>
    </>
  );
}
