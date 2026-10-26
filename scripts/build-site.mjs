import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { posts } from "./blog-posts.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = JSON.parse(fs.readFileSync(path.join(root, "data/site.json"), "utf8"));
const { business, social, agents } = site;
const buildDate = "2026-09-01";

const esc = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const pageUrl = (slug) => slug === "index.html" ? business.url : `${business.url}${slug.replace(/(^|\/)index\.html$/, "$1")}`;
const blogSlug = "blog/index.html";
const landingSlug = "move-to-south-carolina.html";

const services = [
  {
    slug: "buying-a-home-sc.html",
    label: "Buy a Home",
    title: "Buying a Home in South Carolina | The Tyler Simmons Team",
    description: "Understand the South Carolina home buying process with local guidance for financing, home searches, offers, inspections, and closing.",
    eyebrow: "Buyer guidance",
    h1: "Buy a Home in South Carolina With a Clear Plan",
    lead: "From the first financing conversation through closing, our team helps buyers understand the process, compare options, and make informed decisions.",
    sections: [
      {
        h2: "A home search built around your priorities",
        paragraphs: [
          "A useful home search starts before opening a list of properties. We begin by discussing location, budget, timing, commute considerations, property type, and the features that matter most to you.",
          "Our agents serve buyers across South Carolina, with focused experience in Columbia and the Midlands, Lexington and Lake Murray, York County, Myrtle Beach, and surrounding communities."
        ]
      },
      {
        h2: "What to expect when buying",
        paragraphs: ["Every transaction is different, but most buyers move through the following stages:"],
        list: [
          "Discuss goals, timing, and preferred communities.",
          "Speak with a qualified lender and establish a working budget.",
          "Review available homes and tour the strongest options.",
          "Prepare an offer based on the property and current market conditions.",
          "Coordinate inspections, due diligence, financing, appraisal, and closing preparation.",
          "Complete the final walkthrough and closing."
        ]
      },
      {
        h2: "First-time homebuyer support",
        paragraphs: [
          "First-time buyers often need more than a property search. We explain terminology, identify decision points, and help you understand what happens next so the transaction feels manageable.",
          "A real estate agent is not a substitute for a lender, attorney, inspector, tax adviser, or other licensed professional. We help coordinate the process and connect clients with appropriate resources when specialized advice is needed."
        ]
      }
    ]
  },
  {
    slug: "relocation-south-carolina.html",
    label: "Relocate to South Carolina",
    title: "Relocating to South Carolina | Local Real Estate Guidance",
    description: "Plan a move to South Carolina with community comparisons, remote home-search support, and local real estate guidance from The Tyler Simmons Team.",
    eyebrow: "Relocation",
    h1: "Relocate to South Carolina With Local Guidance",
    lead: "Whether you are moving for work, family, military service, or a lifestyle change, we help you compare communities and manage a home search from near or far.",
    sections: [
      {
        h2: "Choose a community before choosing a house",
        paragraphs: [
          "A successful relocation begins with the daily-life questions. Consider work locations, commute tolerance, preferred pace, access to recreation, housing style, and the people or places you expect to visit most often.",
          "Our team can help you compare options in Columbia and the Midlands, Lexington and Lake Murray, York County, Myrtle Beach, and other South Carolina communities served by our agents."
        ]
      },
      {
        h2: "Support for long-distance buyers",
        list: [
          "Initial planning calls focused on timing, budget, and location priorities.",
          "Remote property review and video tour coordination when appropriate.",
          "Local context about housing patterns and travel between communities.",
          "Coordination with lenders, inspectors, attorneys, and other transaction professionals.",
          "A clear schedule from accepted offer through closing."
        ]
      },
      {
        h2: "Selling before or after a move",
        paragraphs: [
          "Relocation often involves both a purchase and a sale. We help clients think through timing, temporary housing, property preparation, and the practical relationship between two transactions."
        ]
      }
    ]
  },
  {
    slug: "selling-a-home-sc.html",
    label: "Sell a Home",
    title: "Sell Your South Carolina Home | Pricing and Marketing Guidance",
    description: "Prepare, price, market, negotiate, and sell your South Carolina home with guidance from The Tyler Simmons Team at Coldwell Banker Realty.",
    eyebrow: "Seller guidance",
    h1: "Sell Your South Carolina Home With Confidence",
    lead: "A strong sale begins with accurate preparation, a market-informed pricing strategy, professional presentation, and consistent communication.",
    sections: [
      {
        h2: "Start with the property and the local market",
        paragraphs: [
          "Online estimates can be a useful starting point, but they cannot fully account for condition, improvements, lot characteristics, location within a neighborhood, or current buyer response.",
          "We review relevant recent sales, active competition, property condition, and market conditions to help you establish a practical listing strategy."
        ]
      },
      {
        h2: "Our listing process",
        list: [
          "Review your goals, property, timing, and likely buyer audience.",
          "Discuss preparation priorities and where additional work may or may not be worthwhile.",
          "Develop a pricing and launch strategy using current local information.",
          "Prepare professional marketing and make the listing easy for buyers to discover.",
          "Review showing feedback and market response.",
          "Evaluate offers, negotiate terms, and coordinate the path to closing."
        ]
      },
      {
        h2: "Request a home value conversation",
        paragraphs: [
          "If you are considering a move, start with a property-specific conversation rather than relying only on an automated estimate. We can discuss comparable sales, likely buyer expectations, and steps that may strengthen the presentation of your home."
        ]
      }
    ]
  },
  {
    slug: "military-pcs-fort-jackson.html",
    label: "Military PCS",
    title: "Fort Jackson PCS Real Estate Guidance | Military Relocation",
    description: "Military PCS real estate guidance for service members and families relocating to or from Fort Jackson and the Columbia, South Carolina area.",
    eyebrow: "Military relocation",
    h1: "PCS Real Estate Guidance for Fort Jackson Families",
    lead: "Military timelines can move quickly. Our team helps service members, veterans, and their families organize the real estate side of a move to or from the Columbia area.",
    sections: [
      {
        h2: "Local help for a time-sensitive move",
        paragraphs: [
          "A Permanent Change of Station can require decisions about location, financing, travel, housing, and an existing property within a limited timeframe. We help clients separate immediate decisions from issues that can be handled later.",
          "Fort Jackson is located in the Columbia area, giving relocating households access to communities in Richland and Lexington counties. The right location depends on work, personal priorities, budget, and preferred travel patterns."
        ]
      },
      {
        h2: "A veteran's perspective",
        paragraphs: [
          "Corey Abercrombie served 12 years in the Army National Guard and brings personal understanding of military life to the team. His construction, engineering, and real estate investing experience also provides a practical lens when clients evaluate homes.",
          "Hollie Stabler is a certified Relocation Specialist and Hometown Heroes Agent who works with service members, first responders, and relocating families."
        ]
      },
      {
        h2: "Buying or selling during a PCS",
        list: [
          "Clarify reporting dates, travel availability, and decision deadlines.",
          "Discuss communities based on your real priorities rather than generic rankings.",
          "Coordinate remote tours and transaction milestones when appropriate.",
          "Work with a qualified lender on financing and any military-related loan questions.",
          "Create a sale plan if you own a property that must be sold as part of the move."
        ]
      }
    ]
  },
  {
    slug: "real-estate-investing-sc.html",
    label: "Investment Properties",
    title: "South Carolina Investment Property Guidance | Real Estate Team",
    description: "Evaluate South Carolina rental homes, vacation properties, land, and other real estate opportunities with practical buyer representation.",
    eyebrow: "Investor services",
    h1: "Evaluate South Carolina Investment Properties Carefully",
    lead: "Our team helps investors compare properties, coordinate due diligence, and consider the practical factors that can affect ownership after closing.",
    sections: [
      {
        h2: "Start with an investment objective",
        paragraphs: [
          "A property that works for one investor may be unsuitable for another. Before searching, clarify the type of property, expected holding period, financing, management plan, renovation tolerance, and level of risk you are prepared to accept.",
          "We provide real estate representation and local property guidance. We do not promise returns or replace legal, tax, lending, insurance, appraisal, construction, or financial advice."
        ]
      },
      {
        h2: "Property considerations",
        list: [
          "Location and the likely tenant or buyer audience.",
          "Property condition and the scope of immediate or future work.",
          "Insurance, association rules, local regulations, and management needs.",
          "Comparable sales and current competing properties.",
          "Inspection findings and specialist evaluations when needed.",
          "Resale options if the investment plan changes."
        ]
      },
      {
        h2: "Practical experience on the team",
        paragraphs: [
          "Corey Abercrombie brings more than two decades of construction and engineering experience and over a decade of real estate investing. Other team members contribute local market familiarity across the Midlands, York County, Myrtle Beach, and additional South Carolina communities."
        ]
      }
    ]
  }
];

const areas = [
  {
    slug: "columbia-sc-real-estate.html",
    label: "Columbia and Richland County",
    title: "Columbia SC Real Estate Agents | Homes and Relocation",
    description: "Buy, sell, or relocate in Columbia and Richland County with local real estate guidance from The Tyler Simmons Team at Coldwell Banker Realty.",
    eyebrow: "Columbia real estate",
    h1: "Real Estate Guidance for Columbia and Richland County",
    lead: "Columbia offers a broad mix of established neighborhoods, newer communities, downtown living, and access to surrounding areas throughout the Midlands.",
    sections: [
      {
        h2: "Planning a move in the Columbia area",
        paragraphs: [
          "Columbia is South Carolina's capital and a central hub for work, education, health care, state government, and regional travel. Housing options vary significantly across the city and Richland County.",
          "We help clients compare properties based on budget, location, property style, commute needs, and long-term plans. We avoid one-size-fits-all neighborhood recommendations because the best choice depends on the client."
        ]
      },
      {
        h2: "Buying or selling in Richland County",
        list: [
          "Review recent comparable sales and current competition.",
          "Discuss property condition and likely buyer expectations.",
          "Coordinate home searches or listing preparation around your schedule.",
          "Explain transaction steps and connect you with appropriate specialists.",
          "Manage communication from the initial plan through closing."
        ]
      },
      {
        h2: "Relocating to Columbia",
        paragraphs: [
          "For clients moving from outside South Carolina, we offer planning conversations, remote property review, and local context about travel between Columbia and surrounding communities. Military families moving to Fort Jackson can also review our dedicated PCS guidance."
        ]
      }
    ]
  },
  {
    slug: "lexington-lake-murray-real-estate.html",
    label: "Lexington and Lake Murray",
    title: "Lexington and Lake Murray Real Estate Agents | South Carolina",
    description: "Explore homes, selling options, and relocation guidance in Lexington, West Columbia, and the Lake Murray region of South Carolina.",
    eyebrow: "Lexington County real estate",
    h1: "Lexington and Lake Murray Real Estate Guidance",
    lead: "Our Midlands agents help buyers and sellers evaluate homes in Lexington, West Columbia, and communities around Lake Murray.",
    sections: [
      {
        h2: "A varied housing market",
        paragraphs: [
          "Lexington County includes established neighborhoods, new construction, rural properties, townhomes, and homes connected to the Lake Murray lifestyle. Property features, travel patterns, and market conditions can differ from one community to another.",
          "Our agents help clients narrow the search using their actual priorities instead of relying only on broad online descriptions."
        ]
      },
      {
        h2: "Lake and property-specific considerations",
        paragraphs: [
          "Waterfront, water-view, and lake-access properties may involve questions about docks, access rights, flood considerations, insurance, maintenance, and association rules. Buyers should verify property-specific details through the appropriate professionals and records.",
          "Corey Abercrombie lives in Lexington and brings construction, engineering, and investing experience to property conversations."
        ]
      },
      {
        h2: "Help for buyers and sellers",
        list: [
          "Property searches and tours based on your location and lifestyle needs.",
          "Market analysis and listing preparation for sellers.",
          "Offer strategy and transaction coordination.",
          "Relocation support for clients moving to or from the Midlands."
        ]
      }
    ]
  },
  {
    slug: "blythewood-sc-real-estate.html",
    label: "Blythewood and Fairfield County",
    title: "Blythewood SC Real Estate | Fairfield and Northern Richland",
    description: "Real estate guidance for buyers, sellers, and relocating clients in Blythewood, northern Richland County, and nearby Fairfield County.",
    eyebrow: "Blythewood real estate",
    h1: "Blythewood and Fairfield County Real Estate",
    lead: "Explore residential, rural, and land opportunities in Blythewood, northern Richland County, and nearby Fairfield County with a local team.",
    sections: [
      {
        h2: "Homes, land, and growing communities",
        paragraphs: [
          "Blythewood sits in northern Richland County near the Fairfield County line. The surrounding area includes subdivisions, acreage, rural properties, and homes with different travel patterns into Columbia and neighboring communities.",
          "Property type and location can affect inspections, utilities, land-use questions, maintenance, and resale considerations. We help clients identify the questions that should be investigated before making a decision."
        ]
      },
      {
        h2: "Selling in a property-specific market",
        paragraphs: [
          "Homes with acreage, workshops, outbuildings, private roads, or rural systems often require a more property-specific marketing approach. A useful pricing conversation should consider features that may not be reflected in a generic automated estimate."
        ]
      },
      {
        h2: "Local representation",
        paragraphs: [
          "Matt Stratton serves Richland, Lexington, and Fairfield counties. Other members of the team contribute experience with relocations, first-time buyers, investment properties, and home sales throughout the Midlands."
        ]
      }
    ]
  },
  {
    slug: "rock-hill-york-county-real-estate.html",
    label: "Rock Hill and York County",
    title: "Rock Hill and York County SC Real Estate Agent | Lisa Simmons",
    description: "Buy, sell, or relocate in Rock Hill, York County, and Lancaster with real estate guidance from Lisa Simmons and The Tyler Simmons Team.",
    eyebrow: "York County real estate",
    h1: "Rock Hill and York County Real Estate Guidance",
    lead: "Lisa Simmons helps buyers, sellers, first-time homebuyers, and relocating clients navigate Rock Hill, York County, Lancaster, and surrounding communities.",
    sections: [
      {
        h2: "A local plan for your move",
        paragraphs: [
          "Rock Hill and York County offer a range of housing styles and community settings. Clients may also compare nearby Lancaster County or consider how their work and family travel affect the search area.",
          "We begin with your budget, timing, property needs, and preferred travel patterns, then use those priorities to create a more focused search or sale plan."
        ]
      },
      {
        h2: "Lisa's approach",
        paragraphs: [
          "Lisa spent 28 years overseeing operations in the Family Court Division of York County before beginning her real estate career. Her background supports a calm, organized, and service-focused approach to client communication."
        ]
      },
      {
        h2: "Buyer and seller support",
        list: [
          "Local home searches and property tours.",
          "First-time buyer education and transaction coordination.",
          "Market analysis, preparation, and marketing for sellers.",
          "Relocation planning for clients moving into or out of the area."
        ]
      }
    ]
  },
  {
    slug: "myrtle-beach-real-estate.html",
    label: "Myrtle Beach and the Grand Strand",
    title: "Myrtle Beach Real Estate Agent | Coastal Homes and Relocation",
    description: "Explore Myrtle Beach and Grand Strand homes, relocation, vacation property, and selling options with The Tyler Simmons Team.",
    eyebrow: "Myrtle Beach real estate",
    h1: "Myrtle Beach and Grand Strand Real Estate Guidance",
    lead: "The coastal market includes primary residences, second homes, condominiums, vacation properties, and investment considerations that deserve careful review.",
    sections: [
      {
        h2: "Define how you plan to use the property",
        paragraphs: [
          "A primary home, second home, short-term rental, long-term rental, and future retirement property can require different searches and different questions.",
          "Before comparing properties, consider expected occupancy, management, association rules, insurance, maintenance, financing, and long-term plans."
        ]
      },
      {
        h2: "Condominium and coastal considerations",
        paragraphs: [
          "Coastal and condominium properties may involve association documents, rental restrictions, insurance questions, special assessments, flood information, building condition, and management arrangements. Buyers should review property-specific records and obtain professional advice where needed."
        ]
      },
      {
        h2: "A team connection for the coast",
        paragraphs: [
          "Lisa Simmons serves Myrtle Beach clients as well as Rock Hill, York County, and Lancaster. The broader team can assist with relocation planning, home sales, and coordinating a move between South Carolina markets."
        ]
      }
    ]
  }
];

const serviceCommitments = [
  {
    title: "Clear communication",
    text: "Our agents explain the next step, share relevant updates, and keep transaction details organized from the first conversation through closing."
  },
  {
    title: "Useful local context",
    text: "We help clients compare communities, property considerations, and market information without pretending that one neighborhood is right for everyone."
  },
  {
    title: "Coordinated support",
    text: "The team works across South Carolina markets and coordinates with the lenders, inspectors, attorneys, and other professionals involved in a transaction."
  }
];

const faqs = [
  ["What areas does The Tyler Simmons Team serve?", "The team serves clients across South Carolina, with agents focused on Columbia and the Midlands, Lexington and Lake Murray, Blythewood and Fairfield County, Rock Hill and York County, Myrtle Beach, and surrounding communities."],
  ["Do you help first-time homebuyers?", "Yes. Our agents explain the process, help buyers organize a search, coordinate transaction steps, and work with the lender, inspector, attorney, and other professionals involved in a purchase."],
  ["Can you help with a military PCS move to Fort Jackson?", "Yes. The team includes an Army National Guard veteran and relocation-focused agents who help military households organize a move to or from the Columbia and Fort Jackson area."],
  ["How do you estimate a home's value?", "We review relevant recent sales, active competition, property condition, location, features, and current buyer response. A property-specific analysis is more useful than relying only on an automated estimate."],
  ["Do you work with real estate investors?", "Yes. We help clients evaluate residential investment properties, vacation properties, land, and other opportunities. We do not promise returns and recommend appropriate legal, tax, lending, insurance, and inspection advice."],
  ["How can I contact the team?", `Call ${business.phoneDisplay}, email ${business.email}, or submit the contact form on isellscre.com.`]
];

function businessSchema() {
  return {
    "@type": "RealEstateAgent",
    "@id": `${business.url}#real-estate-agent`,
    name: business.name,
    legalName: business.legalBrand,
    description: "South Carolina real estate team helping buyers, sellers, relocating households, military families, and investors with local guidance.",
    url: business.url,
    telephone: business.phone,
    email: business.email,
    image: `${business.url}assets/images/optimized/hero-1920.webp`,
    logo: `${business.url}assets/images/optimized/logo-dark.webp`,
    priceRange: "Consultation available",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude
    },
    hasMap: business.mapsUrl,
    parentOrganization: {
      "@type": "Organization",
      name: business.brokerage
    },
    areaServed: [
      { "@type": "State", name: "South Carolina" },
      { "@type": "City", name: "Columbia" },
      { "@type": "City", name: "Lexington" },
      { "@type": "City", name: "Blythewood" },
      { "@type": "City", name: "Rock Hill" },
      { "@type": "City", name: "Myrtle Beach" },
      { "@type": "AdministrativeArea", name: "Richland County" },
      { "@type": "AdministrativeArea", name: "Lexington County" },
      { "@type": "AdministrativeArea", name: "Fairfield County" },
      { "@type": "AdministrativeArea", name: "York County" },
      { "@type": "AdministrativeArea", name: "Horry County" }
    ],
    employee: agents.map((agent) => ({ "@id": `${business.url}agent-${agent.slug}.html#agent` })),
    sameAs: Object.values(social)
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${business.url}#website`,
    url: business.url,
    name: business.name,
    publisher: { "@id": `${business.url}#real-estate-agent` },
    inLanguage: "en-US"
  };
}

function head({ slug, title, description, schema = [], robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1", preloadHero = false, image = null }) {
  const ogImage = image ? { url: `${business.url}${image.path}`, width: image.width, height: image.height } : { url: `${business.url}assets/images/optimized/hero-1920.webp`, width: 1920, height: 950 };
  const canonical = pageUrl(slug);
  const graph = [businessSchema(), websiteSchema(), ...schema];
  return `
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="author" content="${esc(business.name)}">
  <meta name="robots" content="${esc(robots)}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/optimized/favicon-192.png">
    <link rel="stylesheet" href="/assets/css/site.css?v=20261025b">
${preloadHero ? '  <link rel="preload" as="image" href="/assets/images/optimized/hero-960.webp" type="image/webp" fetchpriority="high">\n' : ""}  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(business.name)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${ogImage.url}">
  <meta property="og:image:width" content="${ogImage.width}">
  <meta property="og:image:height" content="${ogImage.height}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${ogImage.url}">
  <meta name="geo.region" content="US-SC">
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5DKL1FRFGF"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "G-5DKL1FRFGF");
  </script>`;
}

function header(current = "") {
  const item = (href, label, key, extra = "") => `<li><a href="${href}"${current === key ? ' aria-current="page"' : ""}${extra}>${label}</a></li>`;
  return `<a class="skip-link" href="#main-content">Skip to main content</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/" aria-label="The Tyler Simmons Team home">
        <img src="/assets/images/optimized/logo-light.webp" width="800" height="300" alt="The Tyler Simmons Team at Coldwell Banker Realty">
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" data-nav-toggle>Menu</button>
      <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation" data-primary-nav>
        <ul>
          ${item("/", "Home", "home")}
          ${item("/buying-a-home-sc.html", "Buy", "buy")}
          ${item("/selling-a-home-sc.html", "Sell", "sell")}
          ${item("/relocation-south-carolina.html", "Relocate", "relocate")}
          ${item("/#areas", "Areas", "areas")}
          ${item("/#team", "Team", "team")}
          ${item("/blog/", "Blog", "blog")}
          ${item("/#contact", "Contact", "contact", ' class="nav-cta"')}
        </ul>
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img class="footer-logo" src="/assets/images/optimized/logo-light.webp" width="800" height="300" loading="lazy" alt="The Tyler Simmons Team at Coldwell Banker Realty">
          <p>${esc(business.address.street)}, ${esc(business.address.city)}, ${esc(business.address.region)} ${esc(business.address.postalCode)}</p>
          <p><a href="tel:${business.phone}">${business.phoneDisplay}</a><br><a href="mailto:${business.email}">${business.email}</a></p>
        </div>
        <div>
          <h2>Real Estate Services</h2>
          <ul class="footer-links">
            ${services.map((service) => `<li><a href="/${service.slug}">${esc(service.label)}</a></li>`).join("\n")}
            <li><a href="/eval.html">Request a home value</a></li>
            <li><a href="${business.homeSearchUrl}">Search homes</a></li>
          </ul>
        </div>
        <div>
          <h2>Connect</h2>
          <ul class="social-links">
            <li><a href="${social.facebook}" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="${social.instagram}" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="${social.youtube}" target="_blank" rel="noopener">YouTube</a></li>
            <li><a href="${social.tiktok}" target="_blank" rel="noopener">TikTok</a></li>
            <li><a href="/blog/">Blog</a></li>
            <li><a href="${business.newsletterUrl}" target="_blank" rel="noopener">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-legal">
        <p>© <span data-current-year>${new Date().getFullYear()}</span> ${esc(business.name)}. Each office is independently owned and operated. <a href="/privacy.html">Privacy</a>.</p>
        <img src="/assets/images/footerlogos.png" width="200" height="78" loading="lazy" alt="Equal Housing Opportunity and Coldwell Banker Realty">
      </div>
    </div>
  </footer>
  <script src="/assets/js/site.js" defer></script>`;
}

function shell({ slug, title, description, body, current = "", schema = [], robots, preloadHero = false, image = null }) {
  return `<!doctype html>
<html lang="en-US">
<head>${head({ slug, title, description, schema, robots, preloadHero, image })}
</head>
<body>
  ${header(current)}
  ${body}
  ${footer()}
</body>
</html>
`;
}

function contactForm() {
  return `<form class="contact-form" action="https://formsubmit.co/${business.email}" method="post">
    <h3>Tell us how we can help</h3>
    <div class="field-grid">
      <div class="field"><label for="first-name">First name</label><input id="first-name" name="first_name" autocomplete="given-name" required></div>
      <div class="field"><label for="last-name">Last name</label><input id="last-name" name="last_name" autocomplete="family-name" required></div>
    </div>
    <div class="field-grid">
      <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div>
      <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
    </div>
    <div class="field"><label for="message">What are you planning?</label><textarea id="message" name="message"></textarea></div>
    <input type="hidden" name="_next" value="${business.url}thanks.html">
    <input type="hidden" name="_subject" value="New website inquiry for The Tyler Simmons Team">
    <input class="sr-only" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
    <input type="hidden" name="_template" value="table">
    <button class="button" type="submit">Send message</button>
    <p class="form-note">By submitting this form, you agree that our team may contact you about your real estate request. See our <a href="/privacy.html">privacy policy</a>.</p>
  </form>`;
}

function homepage() {
  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${business.url}#faq`,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };

  const body = `<main id="main-content">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <p class="eyebrow">The Tyler Simmons Team at Coldwell Banker Realty</p>
          <h1>South Carolina Real Estate, Guided by Local Experts</h1>
          <p class="lead">Moving to South Carolina or buying your next home here? Our team helps buyers and relocating families across Columbia, Lexington, Lake Murray, Blythewood, York County, Myrtle Beach, and the rest of the state.</p>
          <div class="button-row">
            <a class="button button-light" href="${business.homeSearchUrl}">Search South Carolina homes</a>
            <a class="button button-outline-light" href="/relocation-south-carolina.html">Plan a move to South Carolina</a>
          </div>
        </div>
      </div>
    </section>
    <div class="trust-bar">
      <div class="container trust-grid">
        <p>Coldwell Banker Realty</p>
        <p>South Carolina market coverage</p>
        <p>Military and relocation experience</p>
        <p>Buyer, seller, and investor guidance</p>
      </div>
    </div>

    <section class="section">
      <div class="container split">
        <div class="split-image mission-image"><img src="/assets/images/optimized/about-team.webp" width="816" height="777" alt="The Tyler Simmons Team logo displayed in a living room" loading="lazy"></div>
        <div>
          <p class="eyebrow">Our mission</p>
          <h2>A South Carolina real estate team built around service</h2>
          <p class="lead">We aim to provide opportunities, build community, and deliver superior service that turns dreams into reality for our clients.</p>
          <p>Our agents combine local market knowledge, relocation experience, practical property insight, and the resources of Coldwell Banker Realty. Clients receive clear communication and coordinated support from the first conversation through closing.</p>
          <div class="button-row"><a class="button" href="#team">Meet the team</a><a class="button button-secondary" href="tel:${business.phone}">Call ${business.phoneDisplay}</a></div>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="services">
      <div class="container">
        <div class="section-heading"><p class="eyebrow">How we help</p><h2>Real estate guidance for your next move</h2><p class="lead">Choose the service that matches your plans and learn what to expect before making a decision.</p></div>
        <div class="card-grid">
          ${services.map((service, index) => `<article class="card"><span class="service-number">${String(index + 1).padStart(2, "0")}</span><h3>${esc(service.label)}</h3><p>${esc(service.description)}</p><a class="card-link" href="/${service.slug}">Learn more</a></article>`).join("\n")}
          <article class="card"><span class="service-number">06</span><h3>Relocation Guides</h3><p>Moving from another state? Read our guides on taxes, communities, commutes, and buying a South Carolina home from out of state.</p><a class="card-link" href="/blog/">Read the guides</a></article>
        </div>
      </div>
    </section>

    <section class="section" id="areas">
      <div class="container">
        <div class="section-heading"><p class="eyebrow">Areas we serve</p><h2>Local guidance across South Carolina</h2><p class="lead">Our agents focus on the communities they know and connect clients with the right team member for each market.</p></div>
        <div class="area-grid">
          ${areas.map((area) => `<a class="area-card" href="/${area.slug}"><h3>${esc(area.label)}</h3><p>${esc(area.description)}</p></a>`).join("\n")}
          <a class="area-card" href="/relocation-south-carolina.html"><h3>Moving elsewhere in South Carolina?</h3><p>Tell us where you are headed. We will identify the appropriate local support for your move.</p></a>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="team">
      <div class="container">
        <div class="section-heading"><p class="eyebrow">Our agents</p><h2>Meet The Tyler Simmons Team</h2><p class="lead">Six agents, distinct areas of experience, and one coordinated commitment to the client.</p></div>
        <div class="agent-grid">
          ${agents.map((agent) => `<article class="agent-card"><picture><source srcset="/assets/images/optimized/${agent.image}-480.webp 480w, /assets/images/optimized/${agent.image}-720.webp 720w" sizes="(max-width: 720px) 100vw, 33vw" type="image/webp"><img src="/assets/images/optimized/${agent.image}-720.webp" width="720" height="1080" loading="lazy" alt="${esc(agent.name)}, ${esc(agent.title)}"></picture><div class="agent-card-content"><h3>${esc(agent.name)}</h3><p class="agent-role">${esc(agent.title)}</p><p>${esc(agent.summary)}</p><a class="card-link" href="/agent-${agent.slug}.html">View ${esc(agent.name.split(" ")[0])}'s profile</a></div></article>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="section" id="reviews">
      <div class="container">
        <div class="section-heading"><p class="eyebrow">How we work</p><h2>A clear, coordinated client experience</h2></div>
        <div class="review-grid">${serviceCommitments.map((item) => `<article class="review"><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join("\n")}</div>
      </div>
    </section>

    <section class="section section-soft" id="faq">
      <div class="narrow">
        <div class="section-heading"><p class="eyebrow">Frequently asked questions</p><h2>Start with straightforward answers</h2></div>
        <div class="faq-list">${faqs.map(([question, answer], index) => `<details${index === 0 ? " open" : ""}><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join("\n")}</div>
      </div>
    </section>

    <section class="section"><div class="container"><div class="cta"><p class="eyebrow">Find your next home</p><h2>Search current South Carolina listings</h2><p>Use our Coldwell Banker home search, then contact the team when you are ready to tour a property or discuss your options.</p><div class="button-row"><a class="button button-light" href="${business.homeSearchUrl}">Start a home search</a><a class="button button-outline-light" href="/buying-a-home-sc.html">Review the buying process</a></div></div></div></section>

    <section class="section" id="contact">
      <div class="container contact-grid">
        <div><p class="eyebrow">Contact</p><h2>Tell us what you are planning</h2><p class="lead">Buying, selling, relocating, or exploring your options? Start with a conversation.</p><ul class="contact-list"><li><strong>Phone:</strong> <a href="tel:${business.phone}">${business.phoneDisplay}</a></li><li><strong>Email:</strong> <a href="mailto:${business.email}">${business.email}</a></li><li><strong>Office:</strong> <a href="${business.mapsUrl}" target="_blank" rel="noopener">${esc(business.address.street)}, ${esc(business.address.city)}, ${esc(business.address.region)} ${esc(business.address.postalCode)}</a></li></ul></div>
        ${contactForm()}
      </div>
      <div class="container map-wrap"><iframe title="Map to The Tyler Simmons Team office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5436183813763!2d-81.02772562318648!3d34.00425447317509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a55f6dbc73df%3A0x96dd9851a267659a!2sThe%20Tyler%20Simmons%20Team%20at%20Coldwell%20Banker%20Realty!5e0!3m2!1sen!2sus!4v1761788992501!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
    </section>
  </main>`;

  return shell({
    slug: "index.html",
    title: "South Carolina Real Estate Agents | The Tyler Simmons Team",
    description: "The Tyler Simmons Team helps clients buy, sell, relocate, and invest across Columbia, Lexington, Lake Murray, York County, Myrtle Beach, and South Carolina.",
    body,
    current: "home",
    schema: [faqSchema],
    preloadHero: true
  });
}

function pageBody(page) {
  const schema = {
    "@type": "WebPage",
    "@id": `${pageUrl(page.slug)}#webpage`,
    url: pageUrl(page.slug),
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${business.url}#website` },
    about: { "@id": `${business.url}#real-estate-agent` },
    dateModified: buildDate,
    inLanguage: "en-US"
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.url },
      { "@type": "ListItem", position: 2, name: page.label, item: pageUrl(page.slug) }
    ]
  };
  const current = page.slug === "buying-a-home-sc.html" ? "buy" : page.slug === "selling-a-home-sc.html" ? "sell" : page.slug === "relocation-south-carolina.html" ? "relocate" : "areas";
  const body = `<main id="main-content">
    <section class="page-hero"><div class="container"><p class="breadcrumbs"><a href="/">Home</a> / ${esc(page.label)}</p><p class="eyebrow">${esc(page.eyebrow)}</p><h1>${esc(page.h1)}</h1><p class="lead">${esc(page.lead)}</p></div></section>
    <section class="section"><div class="container article-layout"><article class="prose">
      ${page.sections.map((section) => `<section><h2>${esc(section.h2)}</h2>${(section.paragraphs || []).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}${section.list ? `<ul>${section.list.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : ""}</section>`).join("\n")}
      <section><h2>Talk with a South Carolina real estate agent</h2><p>Tell us what you are planning, where you are considering a move, and what questions you need answered. We will connect you with the team member best suited to help.</p><div class="button-row"><a class="button" href="/#contact">Contact the team</a><a class="button button-secondary" href="tel:${business.phone}">Call ${business.phoneDisplay}</a></div></section>
    </article><aside class="sidebar-card"><p class="eyebrow">Next step</p><h2>Ready to begin?</h2><p>Search current listings or start a property-specific conversation.</p><a class="button" href="${business.homeSearchUrl}">Search homes</a><a class="button button-secondary" href="/#contact">Contact us</a></aside></div></section>
    <section class="section compact section-soft"><div class="container"><div class="section-heading"><p class="eyebrow">Related guidance</p><h2>Continue planning your move</h2></div><div class="card-grid">${services.filter((item) => item.slug !== page.slug).slice(0, 3).map((item) => `<article class="card"><h3>${esc(item.label)}</h3><p>${esc(item.description)}</p><a class="card-link" href="/${item.slug}">Learn more</a></article>`).join("")}</div></div></section>
  </main>`;
  return shell({ slug: page.slug, title: page.title, description: page.description, body, current, schema: [schema, breadcrumb] });
}

function agentPage(agent) {
  const slug = `agent-${agent.slug}.html`;
  const title = `${agent.name} | South Carolina REALTOR® | Coldwell Banker`;
  const description = `Meet ${agent.name}, a South Carolina real estate agent serving ${agent.areas.slice(0, 3).join(", ")} with ${business.name}.`;
  const personSchema = {
    "@type": "Person",
    "@id": `${pageUrl(slug)}#agent`,
    name: agent.name,
    jobTitle: agent.title,
    url: pageUrl(slug),
    image: `${business.url}assets/images/optimized/${agent.image}-720.webp`,
    worksFor: { "@id": `${business.url}#real-estate-agent` },
    knowsAbout: agent.areas
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.url },
      { "@type": "ListItem", position: 2, name: "Team", item: `${business.url}#team` },
      { "@type": "ListItem", position: 3, name: agent.name, item: pageUrl(slug) }
    ]
  };
  const body = `<main id="main-content">
    <section class="page-hero"><div class="container"><p class="breadcrumbs"><a href="/">Home</a> / <a href="/#team">Team</a> / ${esc(agent.name)}</p><p class="eyebrow">${esc(agent.title)}</p><h1>${esc(agent.name)}</h1><p class="lead">${esc(agent.summary)}</p></div></section>
    <section class="section"><div class="container agent-profile"><div class="agent-profile-photo"><picture><source srcset="/assets/images/optimized/${agent.image}-480.webp 480w, /assets/images/optimized/${agent.image}-720.webp 720w" sizes="(max-width: 720px) 100vw, 38vw" type="image/webp"><img src="/assets/images/optimized/${agent.image}-720.webp" width="720" height="1080" alt="${esc(agent.name)}, ${esc(agent.title)}"></picture></div><article class="prose"><p class="eyebrow">About ${esc(agent.name)}</p><h2>Local guidance with a personal approach</h2>${agent.bio.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}<h2>Areas and client needs</h2><ul class="tag-list">${agent.areas.map((area) => `<li>${esc(area)}</li>`).join("")}</ul><h2>Ask about working with ${esc(agent.name)}</h2><p>Contact the team and we will connect you with ${esc(agent.name.split(" ")[0])}.</p><p><strong>Team phone:</strong> <a href="tel:${business.phone}">${business.phoneDisplay}</a><br><strong>Team email:</strong> <a href="mailto:${business.email}">${business.email}</a></p><div class="button-row"><a class="button" href="mailto:${business.email}">Contact the team</a><a class="button button-secondary" href="${business.homeSearchUrl}">Search homes</a></div></article></div></section>
    <section class="section compact section-soft"><div class="container"><div class="section-heading"><p class="eyebrow">Team support</p><h2>One agent backed by a coordinated team</h2><p class="lead">Every client can benefit from the collective market knowledge and transaction support of The Tyler Simmons Team at Coldwell Banker Realty.</p></div><a class="button" href="/#team">Meet the full team</a></div></section>
  </main>`;
  return shell({ slug, title, description, body, current: "team", schema: [personSchema, breadcrumb] });
}

function simplePage({ slug, title, description, eyebrow, h1, lead, content, robots = "index,follow,max-image-preview:large" }) {
  const webPage = { "@type": "WebPage", "@id": `${pageUrl(slug)}#webpage`, url: pageUrl(slug), name: title, description, isPartOf: { "@id": `${business.url}#website` }, dateModified: buildDate };
  const body = `<main id="main-content"><section class="page-hero"><div class="container"><p class="breadcrumbs"><a href="/">Home</a> / ${esc(h1)}</p><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(h1)}</h1><p class="lead">${esc(lead)}</p></div></section><section class="section"><div class="narrow prose">${content}</div></section></main>`;
  return shell({ slug, title, description, body, schema: [webPage], robots });
}

const legacyPages = {
  "eval.html": simplePage({
    slug: "eval.html",
    title: "What Is My South Carolina Home Worth? | Tyler Simmons Team",
    description: "Request a property-specific South Carolina home value conversation using current comparable sales, condition, and local market information.",
    eyebrow: "Home value",
    h1: "Find Out What Your Home May Be Worth",
    lead: "An automated estimate is only a starting point. A useful pricing conversation considers the property, improvements, location, competition, and recent local sales.",
    content: `<h2>Start with a property-specific review</h2><p>Tell us about the home and your timing. Our team can review relevant market information and discuss how buyers may compare your property with current alternatives.</p><ul><li>Recent comparable sales</li><li>Current competing listings</li><li>Property condition and improvements</li><li>Location and lot characteristics</li><li>Current buyer response and market conditions</li></ul><p>An estimate is not an appraisal and does not guarantee a sale price.</p><div class="button-row"><a class="button" href="${business.homeValueUrl}">Request a home valuation</a><a class="button button-secondary" href="/selling-a-home-sc.html">Review our selling process</a></div>`
  }),
  "lend.html": simplePage({
    slug: "lend.html",
    title: "Preferred Mortgage Lender | Lexington Mortgage Center",
    description: "Meet Eric Moss at Lexington Mortgage Center, the preferred mortgage resource for The Tyler Simmons Team, and start your mortgage application.",
    eyebrow: "Financing resource",
    h1: "Meet Our Preferred Mortgage Lender",
    lead: "A qualified lender can help you understand loan options, estimated costs, documentation, and a realistic purchasing budget.",
    content: `<div class="split"><div class="split-image"><img src="/assets/images/eric-moss.webp" width="780" height="816" loading="lazy" alt="Eric Moss with Lexington Mortgage Center"></div><div><h2>Eric Moss</h2><p><strong>Lexington Mortgage Center</strong></p><p>Eric Moss at Lexington Mortgage Center is the team's preferred mortgage resource. Use the link below to start your mortgage application with Eric.</p><p>Loan approval, rates, programs, and terms are determined by the lender. The Tyler Simmons Team does not make lending decisions.</p><a class="button" href="http://ericmoss.zipforhome.com/" target="_blank" rel="noopener">Apply with Eric Moss</a></div></div>`
  }),
  "care.html": simplePage({
    slug: "care.html",
    title: "Community and Homebuyer Programs | Tyler Simmons Team",
    description: "Ask The Tyler Simmons Team about current community, homebuyer, lender, and closing-cost programs that may be available for your transaction.",
    eyebrow: "Community support",
    h1: "Ask About Current Homebuyer Programs",
    lead: "Lender programs, credits, and eligibility requirements can change. Contact our team for current information that applies to your transaction.",
    content: `<h2>Program availability changes</h2><p>Earlier versions of this page described a lender-specific promotion that may no longer be available. We removed the outdated terms so buyers are not relying on an expired offer.</p><p>Our team can help you ask the right questions about current lender programs, first-time buyer resources, military or hometown-hero options, and transaction-specific incentives. Any credit, reimbursement, or loan benefit is subject to the written terms and approval of the party offering it.</p><div class="button-row"><a class="button" href="/#contact">Ask about current programs</a><a class="button button-secondary" href="/buying-a-home-sc.html">Review buyer guidance</a></div>`,
    robots: "noindex,follow"
  }),
  "text.html": simplePage({
    slug: "text.html",
    title: "Opt In to Text Updates | The Tyler Simmons Team",
    description: "Provide consent to receive requested real estate text updates from The Tyler Simmons Team.",
    eyebrow: "Text message consent",
    h1: "Opt In to Text Updates",
    lead: "Use this form only if you want The Tyler Simmons Team to contact you by text about your real estate request.",
    content: `<form class="contact-form" action="https://formsubmit.co/${business.email}" method="post"><div class="field"><label for="sms-name">Name</label><input id="sms-name" name="name" autocomplete="name" required></div><div class="field"><label for="sms-phone">Mobile phone</label><input id="sms-phone" name="phone" type="tel" autocomplete="tel" required></div><fieldset class="field"><legend><strong>Consent</strong></legend><label><input type="checkbox" name="sms_consent" value="yes" required> I agree to receive text messages from The Tyler Simmons Team about my real estate request.</label></fieldset><input type="hidden" name="_next" value="${business.url}thanks.html"><input type="hidden" name="_subject" value="Website SMS consent submission"><input class="sr-only" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="button" type="submit">Submit consent</button><p class="form-note">Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help. Consent is not a condition of purchasing goods or services. See our <a href="/privacy.html">privacy policy</a>.</p></form>`,
    robots: "noindex,follow"
  }),
  "thanks.html": simplePage({
    slug: "thanks.html",
    title: "Thank You | The Tyler Simmons Team",
    description: "Confirmation that The Tyler Simmons Team received your website submission.",
    eyebrow: "Submission received",
    h1: "Thank You for Contacting Us",
    lead: "We received your submission and a member of the team will follow up. For a faster response, call us directly.",
    content: `<div class="button-row"><a class="button" href="tel:${business.phone}">Call ${business.phoneDisplay}</a><a class="button button-secondary" href="/">Return to the homepage</a></div>`,
    robots: "noindex,nofollow"
  }),
  "privacy.html": simplePage({
    slug: "privacy.html",
    title: "Privacy Policy | The Tyler Simmons Team",
    description: "Read how The Tyler Simmons Team collects, uses, protects, and manages information submitted through isellscre.com.",
    eyebrow: "Website policy",
    h1: "Privacy Policy",
    lead: "This policy explains how information submitted through isellscre.com may be used and how to contact us with a privacy question.",
    content: `<p><strong>Last updated:</strong> September 1, 2026</p><h2>Information we collect</h2><p>We may collect information that you voluntarily submit, such as your name, email address, phone number, property information, and details about a real estate request. We may also receive basic website analytics such as pages visited, device type, and referral source.</p><h2>How information is used</h2><p>We use submitted information to respond to requests, provide real estate services, coordinate with professionals involved in a requested transaction, improve the website, and communicate information you asked to receive.</p><h2>Text messages</h2><p>If you provide express consent to receive text messages, message frequency may vary and message and data rates may apply. Reply STOP to opt out and HELP for help. Consent to text messages is not a condition of purchasing goods or services.</p><h2>Service providers</h2><p>The website uses service providers that may process information needed to operate forms, analytics, maps, chat, accessibility tools, and other website functions. We do not sell personal information. Information may be disclosed when required by law or when necessary to provide a service you requested.</p><h2>Data retention and security</h2><p>We retain information as reasonably necessary for the purpose for which it was collected and applicable legal or business requirements. No internet transmission or storage system can be guaranteed completely secure.</p><h2>Your choices</h2><p>You may ask to update contact information, stop marketing communication, or ask a question about information submitted through this site. Some records may need to be retained for legal or transaction-related reasons.</p><h2>Contact</h2><p>Email <a href="mailto:${business.email}">${business.email}</a>, call <a href="tel:${business.phone}">${business.phoneDisplay}</a>, or write to ${esc(business.address.street)}, ${esc(business.address.city)}, ${esc(business.address.region)} ${esc(business.address.postalCode)}.</p>`
  })
};

const relocationCta = `<div class="cta"><p class="eyebrow">Planning a move?</p><h2>Get a South Carolina move plan from a local team</h2><p>Tell us where you are moving from, where you are looking, and your timeline. We will match you with the agent who knows that area and help you plan the search from wherever you are now.</p><div class="button-row"><a class="button button-light" href="/${landingSlug}">Start your move plan</a><a class="button button-outline-light" href="tel:${business.phone}">Call ${business.phoneDisplay}</a></div></div>`;

const postImagePath = (post) => `assets/images/blog/${post.image}.webp`;
const postThumb = (post) => `<a class="post-thumb" href="/${post.slug}" tabindex="-1" aria-hidden="true"><img src="/${postImagePath(post)}" width="1600" height="840" loading="lazy" alt=""></a>`;

function blogPost(post) {
  const url = pageUrl(post.slug);
  const article = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.h1,
    description: post.description,
    url,
    datePublished: post.date,
    dateModified: post.date,
    image: `${business.url}${postImagePath(post)}`,
    articleSection: post.category,
    author: { "@id": `${business.url}#real-estate-agent` },
    publisher: { "@id": `${business.url}#real-estate-agent` },
    isPartOf: { "@id": `${pageUrl(blogSlug)}#blog` },
    inLanguage: "en-US"
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl(blogSlug) },
      { "@type": "ListItem", position: 3, name: post.label, item: url }
    ]
  };
  const others = posts.filter((item) => item.slug !== post.slug);
  const related = [...others.filter((item) => item.category === post.category), ...others.filter((item) => item.category !== post.category)].slice(0, 3);
  const body = `<main id="main-content">
    <section class="page-hero"><div class="container"><p class="breadcrumbs"><a href="/">Home</a> / <a href="/blog/">Blog</a> / ${esc(post.label)}</p><p class="eyebrow">${esc(post.category)}</p><h1>${esc(post.h1)}</h1><p class="lead">${esc(post.lead)}</p><p class="post-meta"><time datetime="${post.date}">${esc(post.dateDisplay)}</time> · ${post.readMinutes} min read · ${esc(business.name)}</p></div></section>
    <div class="container post-feature"><img src="/${postImagePath(post)}" width="1600" height="840" alt="${esc(post.imageAlt)}" fetchpriority="high"></div>
    <section class="section"><div class="container article-layout"><article class="prose">
      ${post.sections.map((section) => `<section><h2>${esc(section.h2)}</h2>${section.html}</section>`).join("\n")}
      <section><h2>Talk with a local agent</h2><p>${esc(post.agentNote)} Tell us about your move and we will help you build a plan, whether you are ready to tour this month or just starting to research.</p><div class="button-row"><a class="button" href="/${landingSlug}">Start your move plan</a><a class="button button-secondary" href="tel:${business.phone}">Call ${business.phoneDisplay}</a></div></section>
      <section class="post-sources"><h2>Sources</h2><ul>${post.sources.map((source) => `<li><a href="${source.url}" target="_blank" rel="noopener">${esc(source.title)}</a></li>`).join("")}</ul><p class="form-note">This guide is general information, not tax, legal, or lending advice. Tax rates and rules change, so confirm details with a qualified professional.</p></section>
    </article><aside class="sidebar-card"><p class="eyebrow">Moving to South Carolina?</p><h2>Get a local plan</h2><p>Share where you are moving from and your timeline. We will match you with the right agent.</p><a class="button" href="/${landingSlug}">Start your move plan</a><a class="button button-secondary" href="${business.homeSearchUrl}">Search homes</a></aside></div></section>
    ${related.length ? `<section class="section compact section-soft"><div class="container"><div class="section-heading"><p class="eyebrow">Keep reading</p><h2>More from our blog</h2></div><div class="card-grid">${related.map((item) => `<article class="card post-card">${postThumb(item)}<p class="post-meta">${esc(item.category)}</p><h3>${esc(item.label)}</h3><p>${esc(item.description)}</p><a class="card-link" href="/${item.slug}">Read more</a></article>`).join("")}</div></div></section>` : ""}
  </main>`;
  return shell({ slug: post.slug, title: post.title, description: post.description, body, current: "blog", schema: [article, breadcrumb], image: { path: postImagePath(post), width: 1600, height: 840 } });
}

function blogIndex() {
  const url = pageUrl(blogSlug);
  const blog = {
    "@type": "Blog",
    "@id": `${url}#blog`,
    name: `${business.name} Blog`,
    url,
    description: "South Carolina real estate news, buying and selling advice, and relocation guides from The Tyler Simmons Team.",
    publisher: { "@id": `${business.url}#real-estate-agent` },
    blogPost: posts.map((post) => ({ "@id": `${pageUrl(post.slug)}#article` })),
    inLanguage: "en-US"
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: url }
    ]
  };
  const body = `<main id="main-content">
    <section class="page-hero"><div class="container"><p class="breadcrumbs"><a href="/">Home</a> / Blog</p><p class="eyebrow">Blog</p><h1>The Tyler Simmons Team Blog</h1><p class="lead">South Carolina real estate advice, market updates, and relocation guides from our local team.</p></div></section>
    <section class="section"><div class="container"><div class="card-grid post-grid">
      ${posts.map((post) => `<article class="card post-card">${postThumb(post)}<p class="post-meta"><span class="post-category">${esc(post.category)}</span> · <time datetime="${post.date}">${esc(post.dateDisplay)}</time> · ${post.readMinutes} min read</p><h2 class="post-card-title"><a href="/${post.slug}">${esc(post.h1)}</a></h2><p>${esc(post.description)}</p><a class="card-link" href="/${post.slug}" aria-hidden="true" tabindex="-1">Read more</a></article>`).join("\n")}
    </div></div></section>
    <section class="section compact section-soft"><div class="container"><div class="section-heading"><p class="eyebrow">Newsletter</p><h2>Get new posts by email</h2><p class="lead">Subscribe to The Simmons Newsletter for South Carolina market updates and new articles.</p></div><a class="button" href="${business.newsletterUrl}" target="_blank" rel="noopener">Subscribe to the newsletter</a></div></section>
    <section class="section"><div class="container">${relocationCta}</div></section>
  </main>`;
  return shell({ slug: blogSlug, title: "Blog | South Carolina Real Estate | The Tyler Simmons Team", description: "South Carolina real estate advice, market updates, buying and selling tips, and relocation guides from The Tyler Simmons Team at Coldwell Banker Realty.", body, current: "blog", schema: [blog, breadcrumb], image: posts[0] ? { path: postImagePath(posts[0]), width: 1600, height: 840 } : null });
}

function landingPage() {
  const option = (value) => `<option>${esc(value)}</option>`;
  const body = `<main id="main-content">
    <section class="page-hero"><div class="container"><p class="eyebrow">Moving to South Carolina</p><h1>Moving to South Carolina? Start With a Local Buyer's Agent</h1><p class="lead">Our team helps relocating buyers from every state find the right community and the right home, with remote tours and a clear plan from the first call through closing.</p></div></section>
    <section class="section"><div class="container contact-grid">
      <div class="prose">
        <h2>What you get when you work with us</h2>
        <ul>
          <li><strong>Help choosing the area first.</strong> We compare communities around your work, commute, budget, schools, and lifestyle before you look at houses.</li>
          <li><strong>Remote tours.</strong> Live video walkthroughs and neighborhood drive-throughs so your in-person trip is focused on the best options.</li>
          <li><strong>Agents across the state.</strong> Columbia and the Midlands, Lexington and Lake Murray, Blythewood, Rock Hill and York County, and Myrtle Beach.</li>
          <li><strong>Coordination on both ends.</strong> If you are selling where you live now, we can connect you with a Coldwell Banker agent there and line up the timing.</li>
          <li><strong>A local closing team.</strong> Lenders, inspectors, and South Carolina closing attorneys coordinated for you while you are still out of state.</li>
        </ul>
        <p>Prefer to talk now? Call <a href="tel:${business.phone}">${business.phoneDisplay}</a>.</p>
        <p><a href="/blog/">Read our relocation guides</a></p>
      </div>
      <form class="contact-form" action="https://formsubmit.co/${business.email}" method="post">
        <h2>Tell us about your move</h2>
        <div class="field-grid">
          <div class="field"><label for="lp-first-name">First name</label><input id="lp-first-name" name="first_name" autocomplete="given-name" required></div>
          <div class="field"><label for="lp-last-name">Last name</label><input id="lp-last-name" name="last_name" autocomplete="family-name" required></div>
        </div>
        <div class="field-grid">
          <div class="field"><label for="lp-phone">Phone</label><input id="lp-phone" name="phone" type="tel" autocomplete="tel" required></div>
          <div class="field"><label for="lp-email">Email</label><input id="lp-email" name="email" type="email" autocomplete="email" required></div>
        </div>
        <div class="field"><label for="lp-from">Where are you moving from?</label><input id="lp-from" name="moving_from" placeholder="City and state" required></div>
        <div class="field"><label for="lp-area">Where in South Carolina?</label><select id="lp-area" name="area" required><option value="">Choose one</option>${["Columbia and the Midlands", "Lexington and Lake Murray", "Blythewood and Fairfield County", "Rock Hill and York County", "Myrtle Beach and the Grand Strand", "Somewhere else in SC", "Not sure yet"].map(option).join("")}</select></div>
        <div class="field-grid">
          <div class="field"><label for="lp-timeline">When do you plan to buy?</label><select id="lp-timeline" name="timeline" required><option value="">Choose one</option>${["Within 3 months", "3 to 6 months", "6 to 12 months", "More than a year", "Just researching"].map(option).join("")}</select></div>
          <div class="field"><label for="lp-financing">Financing</label><select id="lp-financing" name="financing" required><option value="">Choose one</option>${["Pre-approved", "Not pre-approved yet", "Paying cash"].map(option).join("")}</select></div>
        </div>
        <div class="field"><label for="lp-message">Anything else we should know? (optional)</label><textarea id="lp-message" name="message" placeholder="Price range, must-haves, work location, school needs, a home you need to sell first"></textarea></div>
        <input type="hidden" name="lead_source" value="Relocation landing page">
        <input type="hidden" name="_next" value="${business.url}thanks.html?src=relocation">
        <input type="hidden" name="_subject" value="New relocation buyer lead from isellscre.com">
        <input class="sr-only" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
        <input type="hidden" name="_template" value="table">
        <button class="button" type="submit">Get my move plan</button>
        <p class="form-note">By submitting this form, you agree that our team may contact you about your real estate request. See our <a href="/privacy.html">privacy policy</a>.</p>
      </form>
    </div></section>
  </main>`;
  return shell({ slug: landingSlug, title: "Moving to South Carolina? Local Buyer's Agents | Tyler Simmons Team", description: "Relocating to South Carolina? Get help choosing a community, remote home tours, and a local buyer's agent from The Tyler Simmons Team at Coldwell Banker Realty.", body, current: "relocate", robots: "noindex,follow" });
}

function generateSupportFiles() {
  const schema = { "@context": "https://schema.org", "@graph": [businessSchema(), websiteSchema(), ...agents.map((agent) => ({
    "@type": "Person",
    "@id": `${business.url}agent-${agent.slug}.html#agent`,
    name: agent.name,
    jobTitle: agent.title,
    url: `${business.url}agent-${agent.slug}.html`,
    image: `${business.url}assets/images/optimized/${agent.image}-720.webp`,
    worksFor: { "@id": `${business.url}#real-estate-agent` }
  }))] };
  fs.writeFileSync(path.join(root, "schema.json"), `${JSON.stringify(schema, null, 2)}\n`);

  const latestPost = posts.map((post) => post.date).sort().at(-1) || buildDate;
  const sitemapEntries = [
    ...["index.html", ...services.map((x) => x.slug), ...areas.map((x) => x.slug), ...agents.map((x) => `agent-${x.slug}.html`), "eval.html", "lend.html", "privacy.html"].map((slug) => [slug, buildDate]),
    [blogSlug, latestPost],
    ...posts.map((post) => [post.slug, post.date])
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.map(([slug, lastmod]) => `  <url>\n    <loc>${pageUrl(slug)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join("\n")}\n</urlset>\n`;
  fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

  const privatePaths = ["/thanks.html", "/text.html", "/mail.php", "/contract.html", "/initial.html", "/accessibility-enhancements.html"];
  const agentRules = (agent) => `User-agent: ${agent}\nAllow: /\n${privatePaths.map((item) => `Disallow: ${item}`).join("\n")}`;
  const robots = `${["*", "OAI-SearchBot", "GPTBot", "Google-Extended", "PerplexityBot", "ClaudeBot"].map(agentRules).join("\n\n")}\n\nSitemap: ${business.url}sitemap.xml\n`;
  fs.writeFileSync(path.join(root, "robots.txt"), robots);

  const llms = `# ${business.name} | South Carolina Real Estate\n\n> ${business.name} at ${business.brokerage} helps buyers, sellers, relocating households, military families, and investors across South Carolina.\n\n## Primary Contact\n\n- Website: ${business.url}\n- Phone: ${business.phoneDisplay}\n- Email: ${business.email}\n- Office: ${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}\n\n## Services\n\n${services.map((item) => `- [${item.label}](${business.url}${item.slug}): ${item.description}`).join("\n")}\n\n## Service Areas\n\n${areas.map((item) => `- [${item.label}](${business.url}${item.slug})`).join("\n")}\n\n## Blog\n\n- [Blog](${pageUrl(blogSlug)})\n${posts.map((post) => `- [${post.label}](${pageUrl(post.slug)}): ${post.description}`).join("\n")}\n\n## Current Team\n\n${agents.map((agent) => `- [${agent.name}](${business.url}agent-${agent.slug}.html): ${agent.title}. ${agent.summary}`).join("\n")}\n\n## Public Resources\n\n- [Search homes](${business.homeSearchUrl})\n- [Request a home value](${business.url}eval.html)\n- [Preferred lender](${business.url}lend.html)\n- [Privacy policy](${business.url}privacy.html)\n- [Sitemap](${business.url}sitemap.xml)\n- [Structured data](${business.url}schema.json)\n`;
  fs.writeFileSync(path.join(root, "llms.txt"), llms);

  const full = `${llms}\n## Business Identity\n\n${business.name} is a South Carolina real estate team associated with ${business.brokerage}. The team maintains its primary public website at ${business.url}. The six current agents shown on the website are ${agents.map((agent) => agent.name).join(", ")}.\n\n## Client Needs\n\nThe team serves first-time and repeat buyers, home sellers, relocating households, military families completing PCS moves, and clients evaluating real estate investments. Real estate guidance does not replace legal, tax, lending, appraisal, inspection, insurance, construction, or financial advice.\n\n## Geographic Focus\n\nThe team's published areas include Columbia, Richland County, Lexington, West Columbia, Lake Murray, Blythewood, Fairfield County, Rock Hill, York County, Lancaster, Myrtle Beach, Horry County, and other South Carolina communities served by its agents.\n\n## Contact Guidance\n\nFor current listings, market information, property-specific advice, availability, or service-area confirmation, contact the team at ${business.phoneDisplay} or ${business.email}. Do not infer guarantees about property values, investment returns, financing approval, sale timing, or transaction outcomes.\n`;
  fs.writeFileSync(path.join(root, "llms-full.txt"), full);
}

fs.writeFileSync(path.join(root, "index.html"), homepage());
for (const page of [...services, ...areas]) fs.writeFileSync(path.join(root, page.slug), pageBody(page));
for (const agent of agents) fs.writeFileSync(path.join(root, `agent-${agent.slug}.html`), agentPage(agent));
for (const [slug, content] of Object.entries(legacyPages)) fs.writeFileSync(path.join(root, slug), content);
fs.mkdirSync(path.join(root, "blog"), { recursive: true });
fs.writeFileSync(path.join(root, blogSlug), blogIndex());
for (const post of posts) fs.writeFileSync(path.join(root, post.slug), blogPost(post));
fs.writeFileSync(path.join(root, landingSlug), landingPage());
generateSupportFiles();

console.log(`Built ${1 + services.length + areas.length + agents.length + Object.keys(legacyPages).length + 2 + posts.length} HTML pages.`);
