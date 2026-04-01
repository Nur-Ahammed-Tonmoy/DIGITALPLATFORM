function StepsSection({ stepCards }) {
  return (
    <section className="bg-white py-16" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-slate-800">
            Get Started In 3 Steps
          </h2>
          <p className="mt-2 text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stepCards.map((item) => (
            <article
              key={item.id}
              className="relative rounded-2xl border border-slate-200 bg-[#f8f9fd] p-8 text-center"
            >
              <span className="absolute right-4 top-4 rounded-full bg-brand-gradient px-2 py-1 text-xs font-bold text-white">
                {item.id}
              </span>
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="mx-auto mb-5 h-16 w-16 rounded-full bg-brand-50 p-4"
              />
              <h3 className="text-2xl font-bold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
