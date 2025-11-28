const awards = [
  {
    icon: "/assets/icons/clutch-review.svg",
    label: "Clutch",
    sublabel: "Reviews ★★★★★",
  },
  {
    icon: "/assets/icons/crunchbase.svg",
    label: "crunchbase",
    sublabel: "Reviews ★★★★★",
  },
  { icon: "/assets/icons/review.svg", label: "G2 Reviews", sublabel: "★★★★★" },
  {
    icon: "/assets/icons/trustpilot.svg",
    label: "Trustpilot",
    sublabel: "Reviews ★★★★★",
  },
];

const partners = [
  {
    icon: "/assets/icons/shopify-partner.svg",
    label: "shopify",
    sublabel: "Certified Partners",
  },
  {
    icon: "/assets/icons/google-review.svg",
    label: "Google",
    sublabel: "Reviews ★★★★★",
  },
  { icon: "/assets/icons/review-s.svg", label: "Reviews", sublabel: "★★★★★" },
  {
    icon: "/assets/icons/shopify-plus.svg",
    label: "shopifyplus",
    sublabel: "Reviews ★★★★★",
  },
];

export function Awards() {
  return (
    <section className="bg-[#EFECE2] py-16 px-6 md:px-[10%]">
      {/* Header */}
      <p className="text-[#444444] font-extrabold text-sm -mt-10 mb-6 ml-15 underline decoration-[#A9F125]">
        Awards And Reviews as E-Commerce Agency
      </p>
      <h2 className="text-[#444444] text-4xl md:text-[40px] font-extrabold my-7">
        Recognized E-Commerce Development Agency
      </h2>
      <p className="text-[#444444] text-base mb-22 w-[full]">
        ShopiKings has been recognized as a top e-Commerce CRO Agency by Google
        Reviews, GoodFirms, Clutch, TrustPilot, G2, and DesignRush.
      </p>

      {/* Awards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {awards.map((award) => (
          <div
            key={award.label}
            className="flex flex-col items-center text-center"
          >
            <img src={award.icon} alt={award.label} className="h-12 mb-3" />
          </div>
        ))}
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-22">
        {partners.map((partner) => (
          <div
            key={partner.label}
            className="flex flex-col items-center text-center"
          >
            <img src={partner.icon} alt={partner.label} className="h-12 mb-3" />
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-[#444444] text-base w-[full]">
        As a leading e-Commerce Plus Agency, we're proud to be recognized for
        our expertise in conversion rate optimisation, e-Commerce SEO, and
        e-Commerce development.
      </p>
    </section>
  );
}
