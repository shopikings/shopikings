const services = [
  {
    title: "e-Commerce CRO Audit",
    description: "Conversion rate optimization analysis.",
  },
  {
    title: "e-Commerce SEO Audit",
    description: "Full search engine optimization review.",
  },
  {
    title: "e-Commerce Development",
    description: "Custom theme and custom development solutions.",
  },
  {
    title: "e-Commerce Marketing",
    description:
      "Ongoing marketing services which includes social media, PPC and SEO.",
  },
];

export function Banner() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/home/banner.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[90vh] px-6 md:px-[10%] pt-32 pb-18">
        {/* Top Content */}
        <div className="max-w-2xl">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF 0%, #A9F125 100%)",
            }}
          >
            #1 e-Commerce CRO
          </h1>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF 0%, #A9F125 100%)",
            }}
          >
            Agency Worldwide
          </h2>

          {/* Badges */}
          <div className="flex items-center gap-4 mb-6 backdrop-blur-md bg-white/30 p-4 rounded-lg inline-flex">
            <img
              src="/assets/icons/clutch-review.svg"
              alt="Clutch Reviews"
              className="h-10"
            />
            <img
              src="/assets/icons/shopify-partner.svg"
              alt="Shopify Certified Partners"
              className="h-10"
            />
          </div>

          {/* Stats */}
          <p className="text-white text-sm mb-2">
            We're a dedicated team specializing in
          </p>
          <p className="text-white text-sm mb-6">
            e-Commerce Conversion Rate Optimization (CRO)
          </p>

          {/* CTA Button */}
          <button className="bg-[#A9F125] hover:bg-[#98dc1f] text-black font-semibold px-8 py-3 rounded-full transition-colors flex items-center gap-2">
            Improve Conversion Rate Now <span>&gt;</span>
          </button>
        </div>

        {/* Bottom Services */}
        <div className="mt-10">
          <div className="flex gap-0 mb-6 backdrop-blur-xs bg-white/5 rounded-lg w-fit">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`px-1 py-8 w-52 ${
                  index !== 0 ? "border-l border-white/10" : ""
                } ${
                  index !== services.length - 1
                    ? "border-r border-white/10"
                    : ""
                }`}
              >
                <h3 className="text-white text-center font-semibold text-base mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center text-xs">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Get a Free Quote */}
          <button className="bg-[#A9F125] hover:bg-[#98dc1f] text-black font-semibold text-sm px-6 py-2 rounded-full transition-colors">
            Get a Free Quote •
          </button>
        </div>
      </div>
    </section>
  );
}
