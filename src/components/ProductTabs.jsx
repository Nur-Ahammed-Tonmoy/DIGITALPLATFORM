function ProductTabs({ activeTab, cartCount, onTabChange }) {
  return (
    <div className="mt-6 inline-flex rounded-full bg-white p-1 shadow-soft">
      <button
        className={`btn btn-sm rounded-full border-0 px-6 ${
          activeTab === "products"
            ? "bg-brand-gradient text-white"
            : "bg-transparent text-slate-500"
        }`}
        onClick={() => onTabChange("products")}
      >
        Products
      </button>
      <button
        className={`btn btn-sm rounded-full border-0 px-6 ${
          activeTab === "cart"
            ? "bg-brand-gradient text-white"
            : "bg-transparent text-slate-500"
        }`}
        onClick={() => onTabChange("cart")}
      >
        Cart ({cartCount})
      </button>
    </div>
  );
}

export default ProductTabs;
