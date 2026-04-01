function PricingSection({ pricingPlans }) {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      id="pricing"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-slate-800">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-2 text-slate-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className={`relative rounded-2xl border border-slate-200 p-6 ${
              plan.highlight
                ? "bg-brand-gradient text-white shadow-soft"
                : "bg-white"
            }`}
          >
            {plan.highlight && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-amber-900">
                Most Popular
              </span>
            )}
            <h3
              className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-slate-800"}`}
            >
              {plan.name}
            </h3>
            <p
              className={`mt-1 text-sm ${plan.highlight ? "text-white/80" : "text-slate-500"}`}
            >
              {plan.description}
            </p>
            <p
              className={`mt-4 text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-800"}`}
            >
              ${plan.price}
              <span
                className={`ml-1 text-base font-medium ${plan.highlight ? "text-white/80" : "text-slate-400"}`}
              >
                /Month
              </span>
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span
                    className={
                      plan.highlight ? "text-white" : "text-emerald-500"
                    }
                  >
                    ✓
                  </span>
                  <span
                    className={
                      plan.highlight ? "text-white/90" : "text-slate-500"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`btn mt-6 w-full rounded-full border-0 ${
                plan.highlight
                  ? "bg-white text-brand-500 hover:bg-slate-100"
                  : "bg-brand-gradient text-white hover:opacity-90"
              }`}
            >
              {plan.buttonText}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
