import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import bannerImage from "./assets/banner.png";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ProductTabs from "./components/ProductTabs";
import ProductsGrid from "./components/ProductsGrid";
import CartPanel from "./components/CartPanel";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import { pricingPlans, products, stepCards } from "./data/catalogData";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);
  const [lastAddedId, setLastAddedId] = useState(null);

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems],
  );

  const addToCart = (product) => {
    const isAlreadyAdded = cartItems.some((item) => item.id === product.id);

    

    setCartItems((previousItems) => [...previousItems, product]);
    setLastAddedId(product.id);
    toast.success(`${product.name} added to cart.`);
    setTimeout(() => setLastAddedId(null), 1200);
  };

  const removeFromCart = (id) => {
    const removedProduct = cartItems.find((item) => item.id === id);
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id),
    );

    if (removedProduct) {
      toast.warn(`${removedProduct.name} removed from cart.`);
    }
  };

  const handleProceedCheckout = () => {
    if (!cartItems.length) {
      toast.info("Your cart is empty.");
      return;
    }

    setCartItems([]);
    toast.success("Proceed to checkout successful. Cart cleared.");
  };

  return (
    <div className="bg-[#f6f7fb] text-slate-800">
      <Header cartCount={cartItems.length} />

      <main>
        <HeroSection bannerImage={bannerImage} />
        <StatsSection />

        <section
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
          id="products"
        >
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-slate-800">
              Premium Digital Tools
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
            <ProductTabs
              activeTab={activeTab}
              cartCount={cartItems.length}
              onTabChange={setActiveTab}
            />
          </div>

          {activeTab === "products" ? (
            <ProductsGrid
              products={products}
              lastAddedId={lastAddedId}
              onAddToCart={addToCart}
            />
          ) : (
            <CartPanel
              cartItems={cartItems}
              totalPrice={totalPrice}
              onRemoveFromCart={removeFromCart}
              onCheckout={handleProceedCheckout}
            />
          )}
        </section>
        <StepsSection stepCards={stepCards} />
        <PricingSection pricingPlans={pricingPlans} />
        <CtaSection />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={1800} />
    </div>
  );
}

export default App;
