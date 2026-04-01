import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#0b1533] py-14 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-extrabold text-white">DigiTools</h3>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <button className="btn btn-circle btn-sm border-none bg-white text-[#0b1533]">
                <FaYoutube />
              </button>
              <button className="btn btn-circle btn-sm border-none bg-white text-[#0b1533]">
                <FaFacebook />
              </button>
              <button className="btn btn-circle btn-sm border-none bg-white text-[#0b1533]">
                <FaXTwitter />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-700 pt-5 text-sm text-slate-400">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
