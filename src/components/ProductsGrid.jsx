function ProductsGrid({ products, lastAddedId, onAddToCart }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
        >
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
              product.tag === "new"
                ? "bg-emerald-100 text-emerald-700"
                : product.tag === "popular"
                  ? "bg-violet-100 text-violet-600"
                  : "bg-amber-100 text-amber-700"
            }`}
          >
            {product.tagType}
          </span>
          <img
            src={product.icon}
            alt={`${product.name} icon`}
            className="mb-4 h-10 w-10 rounded-lg bg-slate-50 p-1"
          />
          <h3 className="text-2xl font-bold text-slate-800">{product.name}</h3>
          <p className="mt-2 text-sm text-slate-500">{product.description}</p>
          <p className="mt-4 text-3xl font-extrabold text-slate-800">
            ${product.price}
            <span className="ml-1 text-base font-medium text-slate-400">
              /
              {product.period === "one-time"
                ? "One-Time"
                : product.period === "monthly"
                  ? "Mo"
                  : "Year"}
            </span>
          </p>
          <ul className="mt-4 space-y-1 text-sm text-slate-500">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="font-bold text-emerald-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={`btn mt-6 w-full rounded-full border-none text-white transition-colors ${
              lastAddedId === product.id
                ? "bg-emerald-500 hover:bg-emerald-600"
                : "bg-brand-gradient hover:opacity-90"
            }`}
            onClick={() => onAddToCart(product)}
          >
            {lastAddedId === product.id ? "Added to Cart" : "Buy Now"}
          </button>
        </article>
      ))}
    </div>
  );
}

export default ProductsGrid;
