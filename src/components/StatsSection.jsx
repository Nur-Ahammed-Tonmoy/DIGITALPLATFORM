function StatsSection() {
  return (
    <section className="bg-brand-gradient py-12 text-white" id="features">
      <div className="mx-auto grid max-w-4xl gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-5xl font-bold">50K+</h3>
          <p className="mt-2 text-white/85">Active Users</p>
        </div>
        <div className="sm:border-x sm:border-white/30">
          <h3 className="text-5xl font-bold">200+</h3>
          <p className="mt-2 text-white/85">Premium Tools</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">4.9</h3>
          <p className="mt-2 text-white/85">Rating</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
