function CtaSection() {
  return (
    <section
      className="bg-brand-gradient py-20 text-center text-white"
      id="faq"
    >
      <h2 className="text-4xl font-extrabold text-white">
        Ready To Transform Your Workflow?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-white/90">
        Join thousands of professionals who are already using DigiTools to work
        smarter. Start your free trial today.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button className="btn rounded-full border-none bg-white px-6 text-brand-500 hover:bg-slate-100">
          Explore Products
        </button>
        <button className="btn rounded-full border border-white/70 bg-transparent px-6 text-white hover:bg-white/10">
          View Pricing
        </button>
      </div>
      <p className="mt-5 text-sm text-white/80">
        14-day free trial - No credit card required - Cancel anytime
      </p>
    </section>
  );
}

export default CtaSection;
