import {
  Banner,
  ExpertAudits,
  Awards,
  Testimonials,
  Brands,
  FAQ,
} from "@/components/home";
import { Separator } from "@/components/ui/separator";

const ecommerceDevData = [
  {
    title: "E-Commerce Redesign Basic",
    rating: 4.9,
    description:
      "Custom e-Commerce theme development, give a better look to your store.",
    features: [
      "Custom theme development",
      "Store setup and configuration",
      "Responsive Design",
      "Optimize landing pages, product pages and website flow",
      "Implement persuasive design and call-to-action (CTA) improvements",
      "Enhance trust signals (e.g., reviews, guarantees, payment icons)",
      "Monitor test performance and conversion data",
      "On page SEO optimization",
    ],
    buttonText: "$2200",
  },
  {
    title: "E-Commerce Redesign Extra",
    rating: 4.9,
    description:
      "Custom e-Commerce theme development with some extra perks and advantages.",
    features: [
      "All in E-Commerce Redesign Basic, plus:",
      "Content optimization",
      "Regenerate SEO optimized product images and description",
      "Bundling and organizing products",
      "Products listing and migration",
      "Keyword research for Best Selling products",
    ],
    buttonText: "$3300",
  },
  {
    title: "E-Commerce Redesign Advance",
    rating: 4.9,
    description:
      "Get full control over your e-Commerce store and perform better than your competitors.",
    features: [
      "All in E-Commerce Redesign Extra, plus:",
      "Automation for delivery and labels",
      "Monthly growth roadmap",
      "Detailed post-implementation report",
      "Actionable insights for future optimization",
      "Monitor test performance and conversion data",
      "Competitor benchmarking",
      "24×7 technical support",
    ],
    buttonText: "$5200",
  },
];

const marketingKitData = [
  {
    title: "Beginners Marketing Kit",
    rating: 4.9,
    description: "Get your social media posts and blogs right on spot.",
    features: [
      "Social media posts design",
      "Social media accounts management",
      "Video and content creation",
      "Collaborating with influencers and brand awareness",
      "Meta ads expert assistance",
      "A/B meta ads testing",
      "SEO Keywords research",
      "2 blogs weekly on website",
    ],
    buttonText: "$500/month",
  },
  {
    title: "Complete Marketing Kit",
    rating: 4.9,
    description:
      "Get a full control over your marketing campaign, making sure you are hitting more sales.",
    features: [
      "All in beginners marketing kit, plus:",
      "Google ads assistance",
      "Google ads ROI optimization",
      "Competitor analysis and research",
    ],
    buttonText: "$750/month",
  },
  {
    title: "Advance Marketing Kit",
    rating: 4.9,
    description:
      "More advanced marketing automation makes sure you are competing with bigger brands and resulting in more sales every month.",
    features: [
      "All in complete marketing kit, plus:",
      "Local Search Engine Optimization",
      "Weekly Strategy Consultation",
      "Business Branding",
      "Ongoing Directory Distribution x 20",
      "Google Business Profile Setup & Optimization",
      "Up to 5 Geo targeted locations",
    ],
    buttonText: "$1250/month",
  },
];

const auditsData = [
  {
    title: "e-Commerce CRO Audit",
    rating: 4.8,
    description:
      "Get Your e-Commerce CRO Audit within 72 hours with 20+ Best practices and strategies across different categories.",
    features: [
      "Full SEO Report",
      "UX/UI Audit & Analysis",
      "Proven AB Test Winners",
      "Full Website Audit",
      "Checkout & Cart Audit",
      "Conversion Drop-off Analysis",
      "Free 30-Minute Consultation",
      "e-Commerce CRO Audit",
      "72 Hours Delivery",
      "Category-Specific Strategies",
    ],
    buttonText: "e-Commerce CRO Audit - $899",
  },
  {
    title: "e-Commerce SEO Audit",
    rating: 4.9,
    description:
      "In-depth SEO audit in just 24 hours. Get an actionable report by tomorrow.",
    features: [
      "Full Website SEO Audit",
      "Technical SEO Analysis",
      "Site Speed Performance Evaluation",
      "Free 30-Minute Consultation",
      "24 Hours Delivery",
      "100% Satisfaction Guarantee",
    ],
    buttonText: "e-Commerce CRO Audit - $599",
  },
  {
    title: "e-Commerce Consultation",
    rating: 5.0,
    description:
      "Get expert guidance and QA for your e-Commerce business with a one-hour consultation session.",
    features: [
      "60-Minute Expert Consultation",
      "Technical Assessment",
      "Q&A Session",
      "Action Plan Document",
      "Personalised Recommendations",
      "Follow-up Email Support",
      "100% Satisfaction Guarantee",
    ],
    buttonText: "e-Commerce CRO Audit - $899",
  },
];

export function Home() {
  return (
    <div>
      <Banner />
      <ExpertAudits
        title="E-Commerce Pitstop!"
        highlightedTitle="Come, Stop, And Go!"
        description1="We identify the areas that need improvement and provide actionable insights to boost your store's performance."
        description2="SEO, CRO, UX/UI, and site speed - we cover it all."
        badgeIcon="/assets/icons/money-back.svg"
        cards={auditsData}
      />
      <Awards />
      <Testimonials />
      <ExpertAudits
        label="——— e-Commerce Expert Services"
        title="E-Commerce Store Development"
        highlightedTitle="In Its Best!"
        description1="Just have the job done by the best e-Commerce developers. Migration, Development, Maintenance, and more."
        description2="WORDPRESS, MAGENTO, BIGCOMMERCE, WIX TO e-Commerce"
        badgeIcon="/assets/icons/money-back.svg"
        cards={ecommerceDevData}
        footerText="Ready to maximize your e-Commerce store performance? Schedule a e-Commerce optimization consultation with our expert team today."
      />
      <Separator className="bg-[#E3E5E885] w-screen -mx-[50vw] relative left-1/2 right-1/2" />
      <ExpertAudits
        label="——— Ongoing e-Commerce Marketing & Growth"
        title="Accelerate Your E-Commerce Success"
        highlightedTitle="With Expert Ongoing Marketing"
        description1="After your initial e-Commerce audit, our subscription services help implement strategic optimizations to continuously improve conversion rates and scale your e-Commerce success."
        description2="Our specialized e-Commerce agency provides comprehensive support across CRO, SEO, development, and design – turning data-backed insights into measurable revenue growth."
        badgeIcon="/assets/icons/money-back.svg"
        cards={marketingKitData}
      />
      <Brands />
      <FAQ />
    </div>
  );
}
