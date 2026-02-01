export default function ServicesSEO() {
  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design & Development Services",
    description:
      "Professional web design and development services for small businesses. Custom website design, mobile-responsive development, SEO setup, and ongoing support.",
    provider: {
      "@type": "Person",
      name: "Huzain Koleosho",
      email: "koleoshohuzain@gmail.com",
      url: "https://huzain.work",
      jobTitle: "Freelance Web Developer & Designer",
    },
    serviceType: [
      "Web Design",
      "Web Development",
      "Website Redesign",
      "Responsive Web Design",
      "Mobile-Friendly Website Development",
      "Small Business Website Design",
      "Custom Website Development",
      "SEO Setup",
      "Website Maintenance",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Starter Website Package",
            description:
              "Up to 3 pages, mobile-responsive design, contact form, basic SEO setup, 7 days post-launch support",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "800-1200",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Website Package",
            description:
              "Up to 6 pages, mobile-responsive design, contact form with booking integration, blog section, SEO setup with Google Business optimization, analytics setup, 14 days post-launch support",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "2000-3000",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Package",
            description:
              "Unlimited pages, e-commerce functionality, custom features and integrations, priority support, ongoing maintenance",
          },
        },
      ],
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most projects take 2-4 weeks from start to finish, depending on the size and complexity. I'll give you a clear timeline before we begin.",
        },
      },
      {
        "@type": "Question",
        name: "What do I need to provide for my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not much. Your logo, brand colors (if you have them), any text or images you want to use, and feedback along the way. I'll guide you through everything.",
        },
      },
      {
        "@type": "Question",
        name: "What if I already have a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perfect — we'll start with an audit to see what's worth keeping and what needs to go. If your domain and hosting are fine, we can work with those.",
        },
      },
      {
        "@type": "Question",
        name: "Will I be able to update the website myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I'll set it up so you can make simple changes (text, images, etc.) without needing to call me. And I'll show you how.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need changes after the website launches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small tweaks within the support period are included. After that, I offer affordable maintenance packages — or you can just reach out when you need something.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer payment plans for website design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Standard terms are 50% upfront to start, 50% when we launch. For larger projects, we can discuss a schedule that works for you.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a website cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter websites for simple online presence start at $800-$1,200. Professional websites for growing businesses range from $2,000-$3,000. Custom projects with e-commerce or special features are priced based on requirements.",
        },
      },
    ],
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Huzain Koleosho - Web Design & Development",
    description:
      "Freelance web designer and developer specializing in fast, modern, mobile-friendly websites for small businesses. Get a website that actually brings you customers.",
    url: "https://huzain.work/services",
    email: "koleoshohuzain@gmail.com",
    priceRange: "$800 - $3000+",
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Responsive Design",
      "Mobile-First Development",
      "Search Engine Optimization",
      "User Experience Design",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Free Website Audit",
        description:
          "Get a free review of your current website with actionable recommendations to improve performance and conversions.",
      },
    ],
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Professional Web Design & Development Services",
    description:
      "Custom website design and development for small businesses. Fast, modern, mobile-friendly websites that bring you customers.",
    url: "https://huzain.work/services",
    mainEntity: {
      "@type": "Service",
      name: "Web Design & Development",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#services-hero h1", "#services-hero p"],
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://huzain.work/og-services.png",
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://huzain.work",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web Design Services",
        item: "https://huzain.work/services",
      },
    ],
  };

  // Person Schema (for author/creator)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Huzain Koleosho",
    url: "https://huzain.work",
    email: "koleoshohuzain@gmail.com",
    jobTitle: "Freelance Web Developer & Designer",
    description:
      "Professional freelance web developer and designer specializing in modern, fast, mobile-friendly websites for small businesses.",
    knowsAbout: [
      "Web Design",
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "SEO",
      "UI/UX Design",
    ],
    sameAs: [
      "https://linkedin.com/in/uzayn",
      "https://twitter.com/kolhuz",
      "https://github.com/uzayn",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
