interface Card {
  title: string;
  rating: number;
  description: string;
  features: string[];
  buttonText: string;
}

interface ExpertAuditsProps {
  label?: string;
  title: string;
  highlightedTitle?: string;
  description1?: string;
  description2?: string;
  badgeIcon?: string;
  cards: Card[];
  footerText?: string;
}

export function ExpertAudits({
  label = "——— Expert e-Commerce Audits",
  title,
  highlightedTitle,
  description1,
  description2,
  badgeIcon,
  cards,
  footerText,
}: ExpertAuditsProps) {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6 md:px-[10%]">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {label && <p className="text-gray-400 text-sm mb-4">{label}</p>}
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F0F2C6 0%, #F0F2C6 28.23%, #A9F125 100%)",
            }}
          >
            {title} {highlightedTitle}
          </h2>
        </div>
        {badgeIcon && (
          <img src={badgeIcon} alt="Badge" className="h-20 md:h-24" />
        )}
      </div>

      {description1 && (
        <p className="text-gray-400 text-base mb-2 max-w-3xl">{description1}</p>
      )}
      {description2 && (
        <p className="text-gray-400 text-base mb-12 max-w-3xl">
          {description2}
        </p>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 flex flex-col"
          >
            {/* Title & Rating */}
            <h3 className="text-[#A9F125] text-xl font-bold mb-2">
              {card.title}
            </h3>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#A9F125] text-sm">
                  ★
                </span>
              ))}
              <span className="text-white text-sm ml-1">{card.rating}</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-6">{card.description}</p>

            {/* Features List */}
            <ul className="space-y-2 mb-6 flex-1">
              {card.features.map((feature) => (
                <li
                  key={feature}
                  className="text-gray-300 text-sm flex items-start"
                >
                  <span className="text-[#A9F125] mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="bg-[#A9F125] hover:bg-[#98dc1f] text-black font-bold text-sm py-3 rounded-full transition-colors w-full">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      {footerText && (
        <p className="text-gray-400 text-sm text-center mt-8">{footerText}</p>
      )}
    </section>
  );
}
