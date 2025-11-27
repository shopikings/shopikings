import { Search } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { label: "e-Commerce Audit", href: "#" },
  { label: "Store Development/Redesign", href: "#" },
  { label: "e-Commerce Automation", href: "#" },
  { label: "Marketing & Social Media", href: "#" },
  { label: "Local SEO Optimization", href: "#" },
];

export function Header() {
  return (
    <header className="bg-[#000000B2] border-b border-gray-800">
      <div className="px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="/assets/icons/logo.svg" alt="Logo" />
            <div
              className="h-6 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(227, 229, 232, 0.52) 0%, #A9F125 100%)",
              }}
            />
            <img
              src="/assets/icons/shopify.svg"
              alt="Shopify"
              className="h-5"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <a
                  href={item.href}
                  className="text-white text-sm py-2 transition-colors"
                >
                  <span className="text-white">{item.label}</span>
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-[#A9F125]">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search & CTA */}
          <div className="flex items-center gap-6">
            {/* Search bar */}
            <div className="flex items-center gap-2 border-b border-[#A9F125] pb-2 w-32">
              <Search className="w-4 h-4 text-[#A9F125]" />
              <input
                type="text"
                placeholder=""
                className="flex-1 bg-transparent text-white text-sm outline-none w-full"
              />
              <div className="bg-[#A9F125] h-5 w-4 rounded-sm flex items-center justify-center shrink-0">
                <span className="text-black text-[10px] font-bold">/</span>
              </div>
            </div>
            {/* Audit button */}
            <Button className="bg-[#A9F125] hover:bg-[#98dc1f] text-black font-bold text-sm px-6 py-2 rounded-full transition-colors flex items-center gap-1">
              Audit{" "}
              <span className="text-lg leading-none mb-0.5">&rsaquo;</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
