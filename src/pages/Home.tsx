import { Banner, ExpertAudits } from "@/components/home";

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
    </div>
  );
}
