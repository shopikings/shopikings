export function Brands() {
  const brands = [
    { name: "Dirty Dog", logo: "/assets/icons/dirtydog.svg" },
    { name: "Air Cosmetics", logo: "/assets/icons/aircosmetics.svg" },
    { name: "Shokz", logo: "/assets/icons/shokz.svg" },
    { name: "Moroccan Glam", logo: "/assets/icons/moroccan.svg" },
    { name: "Lisettel", logo: "/assets/icons/lisettel.svg" },
    { name: "Cuts", logo: "/assets/icons/cuts.svg" },
    { name: "KonZuk", logo: "/assets/icons/KonZuk.svg" },
    { name: "Moroccan Glow", logo: "/assets/icons/moroccan-glow.svg" },
    { name: "Koba", logo: "/assets/icons/koba.svg" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-16 px-6 md:px-[10%]">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <div className="lg:w-[45%]">
          <p className="text-white font-extrabold underline decoration-[#A9F125] text-sm mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-[#A9F125]"></span>
            Brands That Trust Us
          </p>
          <h2
            className=" text-3xl md:text-[40px] font-extrabold bg-clip-text text-transparent mb-6"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF 0%, #A9F125 100%)",
            }}
          >
            A Brief List Of
            <br />
            Brands We've
            <br />
            Worked With
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xs">
            We've worked with a variety of brands, from small businesses to
            large enterprises.
          </p>
          <button className="text-white text-sm flex items-center gap-2 border-b border-white pb-1 hover:text-[#A9F125] hover:border-[#A9F125] transition-colors">
            Conversion Optimization
            <span>———→</span>
          </button>
        </div>

        {/* Right Grid - Brand Logos */}
        <div className="lg:w-[55%] grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-800">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-[#0a0a0a] flex items-center justify-center p-8 md:p-12 min-h-[120px] md:min-h-[150px]"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 md:max-h-32 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
