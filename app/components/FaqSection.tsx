import FaqCard from "./FaqCard";

export default function FaqSection() {
  const faqs = [
    {
      question: "Is it really free to use?",
      answer:
        "Yes! You can generate content without paying anything. We may add premium features later, but the core tool is currently free.",
    },
    {
      question: "What kind of content can it create?",
      answer:
        "You can generate Instagram captions, blog intros, tweets, and more. We’re constantly adding new content types.",
    },
    {
      question: "Can I use the content for my clients?",
      answer:
        "Absolutely! Whether you’re a freelancer or a social media manager, the content is yours to use however you like.",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full py-10 px-4" id="faq">
      <h1 className="font-bold text-4xl text-zinc-200 mb-3">FAQ</h1>
      <p className="text-center text-gray-400 mb-8">
        Got questions? We&apos;ve got answers.
      </p>

      {faqs.map((faq, i) => (
        <FaqCard key={i} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}
