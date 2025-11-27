import { Search } from "lucide-react";

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
          <img src="/assets/icons/logo.svg" />


          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white text-sm px-3 py-2 transition-colors flex items-center"
              >
                {item.label}
                {index < navItems.length - 1 && (
                  <span className="ml-3 text-gray-600">•</span>
                )}
              </a>
            ))}
          </nav>

          {/* Right side - Search & CTA */}
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-white p-2">
              <Search className="w-4 h-4" />
            </button>
            <button className="bg-[#c8e600] hover:bg-[#b5d000] text-black font-semibold text-sm px-4 py-1.5 rounded transition-colors">
              Audit &gt;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
