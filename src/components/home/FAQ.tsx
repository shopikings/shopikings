const faqs = [
  {
    question: "What is your e-Commerce CRO Audit service?",
    answer:
      "Our e-Commerce CRO Audit is an human-made analysis of your website's performance and conversion potential. We thoroughly check your store to identify areas for improvement and provide actionable recommendations helping improve your store conversion rate.",
  },
  {
    question: "How quickly will I receive my CRO Audit report?",
    answer:
      "We deliver your full website report within 72 hours of receiving your website details. This report includes a complete UX/UI revamp proposal with specific examples tailored to your site.",
  },
  {
    question: "What does your Shopify SEO service include?",
    answer:
      "Our Shopify SEO service provides a report covering both technical and non-technical SEO aspects. We deliver this detailed analysis within 23 hours, giving you quick insights into your store's search engine optimization status.",
  },
  {
    question: "Can you help me migrate to Shopify from another platform?",
    answer:
      "Yes, we offer migration services from any platform to Shopify. Our experienced Shopify agency ensures a painless transition, preserving your existing Google rankings and even improving your conversion rates. As a leading Shopify CRO agency, we optimize your store during migration to maximize your business results.",
  },
  {
    question: "How much does a custom Shopify theme cost?",
    answer:
      "For a fully custom Shopify theme built from scratch, including complete design services, pricing starts from $3000. This ensures a unique, high-quality solution tailored specifically to your brand and business needs. For a detailed quote based on your specific requirements, please request a free consultation through our Shopify development page.",
  },
  {
    question: "Do you offer custom e-Commerce store development?",
    answer:
      "Yes, we provide custom e-Commerce store development services led by industry-renowned experts. Our team can handle any custom development needs to enhance your store's functionality and performance.",
  },
  {
    question: "Are you certified Shopify partners?",
    answer:
      "Yes, we are certified Shopify partners. Our developers hold official Shopify certifications and display the prestigious Shopify Partner badge. This certification demonstrates our deep expertise and commitment to delivering top-tier Shopify solutions.",
  },
  {
    question: "How do I get started with your Shopify optimization services?",
    answer:
      "The best way to get started is with our Shopify CRO Audit service. This step gives you a complete picture of your store's performance and identifies key optimization opportunities. From there, you can go ahead with our monthly Shopify Retainers and implement the fixes, usually we see 20%-60% uplift in conversion in 1-2 months already.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#EFECE2] py-16 px-6 md:px-[10%] text-[#444444]">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left - FAQ List */}
        <div className="lg:w-2/3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#444444]/30 py-6 first:pt-0"
            >
              <h3 className="text-[#444444] text-lg font-bold mb-3">
                {faq.question}
              </h3>
              <p className="text-[#444444]/80 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Right - Sticky Title */}
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <p className="text-[#444444]/70 text-xs mb-4 border-b border-[#444444]/40 pb-2">
              Frequently Asked Questions about e-Commerce, CRO and SEO Services
            </p>
            <h2 className="text-[#444444] text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Expert
              <br />
              Answers To
              <br />
              Common
              <br />
              E-Commerce
              <br />
              Optimization
              <br />
              Queries
            </h2>
            <p className="text-[#444444]/80 text-sm leading-relaxed">
              Find answers to frequently asked questions about our e-Commerce
              optimization services. If you need more information, don't
              hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
