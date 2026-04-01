import { useState } from "react";
import { FaBars, FaCartShopping, FaXmark } from "react-icons/fa6";

function Header({ cartCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f8f8f8]">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
        <a
          className="text-3xl font-extrabold tracking-tight text-brand-500"
          href="#"
        >
          DigiTools
        </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="transition hover:text-brand-500"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 text-slate-700 md:flex">
            <div className="indicator">
              {cartCount > 0 && (
                <span className="badge indicator-item border-0 bg-brand-500 text-xs text-white">
                  {cartCount}
                </span>
              )}
              <button className="btn btn-ghost btn-sm rounded-full px-1 text-base text-slate-700 hover:bg-transparent hover:text-brand-500">
                <FaCartShopping />
              </button>
            </div>

            <button className="btn btn-ghost btn-sm rounded-full px-2 text-base font-semibold text-slate-700 hover:bg-transparent hover:text-brand-500">
              Login
            </button>

            <button className="btn btn-sm rounded-full border-none bg-brand-gradient px-6 text-base font-semibold text-white hover:opacity-90">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-2 text-slate-700 md:hidden">
            <div className="indicator">
              {cartCount > 0 && (
                <span className="badge indicator-item border-0 bg-brand-500 text-xs text-white">
                  {cartCount}
                </span>
              )}
              <button className="btn btn-ghost btn-sm rounded-full px-1 text-base text-slate-700 hover:bg-transparent hover:text-brand-500">
                <FaCartShopping />
              </button>
            </div>

            <button
              className="btn btn-ghost btn-sm rounded-full px-1 text-lg text-slate-700 hover:bg-transparent hover:text-brand-500"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 space-y-3 border-t border-slate-200 pt-4 md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="rounded-lg px-2 py-2 transition hover:bg-slate-100 hover:text-brand-500"
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button className="btn btn-ghost btn-sm rounded-full px-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                Login
              </button>
              <button className="btn btn-sm rounded-full border-none bg-brand-gradient px-4 text-sm font-semibold text-white hover:opacity-90">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
