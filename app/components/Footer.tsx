export default function Footer() {
  return (
    // <section className="text-zinc-300 bg-black/40 px-6 pt-10 md:px-20 pb-8">
    //   <div className="w-full flex-col md:flex-row items-center justify-between">
    //     <div className="flex flex-col items-start max-w-96 sapce-y-6">
    //       <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
    //         Copy<span className="text-orange-500">Mint</span>
    //       </h2>
    //       <p className="text-sm leading-relaxed w-72">
    //         AI-powered content generation tailored to your niche.
    //       </p>
    //     </div>
    //     <div className="flex space-x-10 items-center">
    //       <div className="flex flex-col items-start">
    //         <h1 className="font-bold text-xl mb-3">Support</h1>
    //         <span className="flex flex-col gap-y-2 text-zinc-400">
    //           <a href="/profile" className="text-sm hover:text-zinc-300">
    //             Help
    //           </a>
    //           <a href="#faq" className="text-sm hover:text-zinc-300">
    //             FAQ
    //           </a>
    //           <a href="/contact" className="text-sm hover:text-zinc-300">
    //             Contact
    //           </a>
    //         </span>
    //       </div>
    //       <div className="flex flex-col items-start">
    //         <h1 className="font-bold text-xl mb-3">Quick Links</h1>
    //         <span className="flex flex-col gap-y-2 text-zinc-400">
    //           <a href="/generate" className="text-sm hover:text-zinc-300">
    //             Generate
    //           </a>
    //           <a href="/features" className="text-sm hover:text-zinc-300">
    //             Features
    //           </a>
    //           <a href="/pricing" className="text-sm hover:text-zinc-300">
    //             Pricing
    //           </a>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-12 pt-6 text-center text-sm text-zinc-500">
    //     &copy; {new Date().getFullYear()} CopyMint. All rights reserved.
    //   </div>
    // </section>
    <section className="bg-black/40 w-full flex flex-col justify-between px-6 py-10">
      <div className="flex flex-col md:flex-row items-center justify-around mb-16 border-b-2 border-zinc-800 pb-10">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-zinc-200 text-2xl">
            Copy<span className="text-orange-500">Mint</span>
          </h1>
          <p className="text-sm leading-relaxed font-medium text-center md:text-left w-72 text-zinc-400 mt-3">
            AI-powered content generation tailored to your niche.
          </p>
          <h1 className="font-bold mt-10 text-base text-zinc-200">Support</h1>
          <p className="text-sm text-zinc-400 font-medium mb-8">
            echoStacks.dev@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-x-14 mt-20 md:mt-0 ">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl mb-3">Support</h1>
            <span className="flex flex-col gap-y-2 text-zinc-400">
              <a href="/" className="text-sm hover:text-zinc-300">
                Home
              </a>
              <a href="#faq" className="text-sm hover:text-zinc-300">
                FAQ
              </a>
              <a href="/contact" className="text-sm hover:text-zinc-300">
                Contact
              </a>
            </span>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl mb-3">Quick Links</h1>
            <span className="flex flex-col gap-y-2 text-zinc-400">
              <a href="/generate" className="text-sm hover:text-zinc-300">
                Generate
              </a>
              <a href="/features" className="text-sm hover:text-zinc-300">
                Features
              </a>
              <a href="/pricing" className="text-sm hover:text-zinc-300">
                Pricing
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <p className="text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} CopyMint. All rights reserved.
        </p>
        {/* <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
          <p className="underline text-zinc-500 cursor-pointer text-sm">
            Privacy Policy
          </p>
          <p className="underline text-zinc-500 cursor-pointer text-sm">
            Terms of Service
          </p>
          <p className="underline text-zinc-500 cursor-pointer text-sm">
            Cookies
          </p>
        </div> */}
      </div>
    </section>
  );
}
