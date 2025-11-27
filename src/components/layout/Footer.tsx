import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  "e-Commerce Audits and Development": [
    "CRO Audit",
    "Redesign e-Commerce Store",
    "SEO Audit",
    "SEO Optimization",
    "Shopify Experts",
    "Website Speed Audit & Optimization",
    "New Store Design",
  ],
  "Marketing & Social Media Management": [
    "Content Creation",
    "Social Media Management",
    "Meta & Google Ads",
    "SEO Optimization",
    "Google Merchant Center",
  ],
  "Resources & Free Tools": [
    "Shopify Theme Detector",
    "CRO Calculator",
    "e-Commerce CRO Checklist",
  ],
  "About ShopiKings": ["About Us", "Our Team", "FAQs", "Contact Us", "Gallery"],
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-12 w-screen pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <img
            src="/assets/icons/logo.png"
            alt="Shopikings"
            className="w-full"
          />
        </div>

        <p className="text-gray-400 text-sm mb-2">
          Think the logo's huge? It's our last shot to grab you—you're at the
          footer!
        </p>
        <a
          href="#"
          className="text-white text-sm underline inline-flex items-center gap-2 mb-10"
        >
          CRO Audit on the way out? <span>————&gt;</span>
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-800">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8">
          {/* Social & Connect */}
          <div>
            <p className="text-gray-400 text-sm mb-4">
              You might need a decent e-Commerce agency in the future,
              <br />
              so let's connect!
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-[#A9F125]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#A9F125]">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#A9F125]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#A9F125]">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Office USA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">
              Head office USA
            </h4>
            <p className="text-gray-400 text-sm">
              42 Broadway, New York, NY 10004
            </p>
            <p className="text-gray-400 text-sm underline">
              Company no: 0805647323
            </p>
          </div>

          {/* Office UK */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">
              Head office UK
            </h4>
            <p className="text-gray-400 text-sm">
              1 Hessle Walk, Leeds, England, LS6 1EJ
            </p>
            <p className="text-gray-400 text-sm underline">
              Company no: 16640386
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-800 bg-[#1a1a1a] px-6 mt-4">
        <p className="text-gray-500 text-xs">
          © 2025 All Rights Reserved Shopikings®
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-gray-400 text-xs underline hover:text-white"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-gray-400 text-xs underline hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
