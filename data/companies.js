/*
 * VanRadar seed index.
 *
 * Each signal is deliberately small: name, one line, a category, a website.
 * `k` holds hidden search keywords so queries like "ai" or "healthcare"
 * find companies whose one-liner doesn't use that exact word.
 *
 * Categories are defined in app.js (CATEGORIES). Keep descriptions under ~70
 * characters and written in plain language.
 */
window.VANRADAR_COMPANIES = [
  // AI & Robotics
  { n: "Sanctuary AI", l: "General-purpose humanoid robots that learn real work", c: "ai", u: "https://sanctuary.ai", k: "robotics humanoid embodied ai machine learning" },
  { n: "Novarc Technologies", l: "Collaborative welding robots for pipe and fabrication shops", c: "ai", u: "https://www.novarctech.com", k: "robotics cobot welding manufacturing ai vision" },
  { n: "Picovoice", l: "Voice AI that runs entirely on the device, no cloud", c: "ai", u: "https://picovoice.ai", k: "speech wake word llm edge on-device ai machine learning developer" },
  { n: "Variational AI", l: "Generative models that design new drug molecules", c: "ai", u: "https://variational.ai", k: "drug discovery generative ai machine learning biotech chemistry" },

  // Quantum
  { n: "D-Wave", l: "Quantum computers and cloud access for optimization", c: "quantum", u: "https://www.dwavequantum.com", k: "quantum annealing computing hardware optimization" },
  { n: "Photonic", l: "Networked quantum computing built on silicon spin qubits", c: "quantum", u: "https://photonic.com", k: "quantum computing silicon photonics qubits hardware" },

  // Biotech
  { n: "AbCellera", l: "Finds antibody treatments from natural immune responses", c: "bio", u: "https://www.abcellera.com", k: "antibody therapeutics drug discovery biotech pharma" },
  { n: "Zymeworks", l: "Engineered antibody drugs for hard-to-treat cancers", c: "bio", u: "https://www.zymeworks.com", k: "oncology cancer antibody therapeutics pharma biotech" },
  { n: "Xenon Pharmaceuticals", l: "New medicines for epilepsy and neurological disorders", c: "bio", u: "https://www.xenon-pharma.com", k: "neurology epilepsy drug pharma biotech clinical" },
  { n: "STEMCELL Technologies", l: "Tools and media that labs use to grow and study cells", c: "bio", u: "https://www.stemcell.com", k: "cell biology research tools lab life sciences biotech" },
  { n: "Aspect Biosystems", l: "Bioprinted tissue therapeutics to replace damaged organs", c: "bio", u: "https://www.aspectbiosystems.com", k: "bioprinting tissue engineering regenerative medicine biotech 3d" },
  { n: "Acuitas Therapeutics", l: "Lipid nanoparticles that deliver mRNA medicines", c: "bio", u: "https://acuitastx.com", k: "lnp mrna vaccines drug delivery biotech" },

  // Health
  { n: "Jane", l: "Booking, charting and billing for health and wellness clinics", c: "health", u: "https://jane.app", k: "healthcare clinic practice management scheduling saas" },
  { n: "Kardium", l: "A catheter system for treating irregular heartbeats", c: "health", u: "https://kardium.com", k: "medtech medical device cardiology atrial fibrillation healthcare" },
  { n: "MetaOptima", l: "DermEngine: imaging and AI tools for skin cancer checks", c: "health", u: "https://www.metaoptima.com", k: "dermatology healthcare ai imaging medtech" },
  { n: "Kits", l: "Online eye exams, glasses and contact lenses", c: "health", u: "https://www.kits.com", k: "eyewear vision healthcare ecommerce" },

  // Climate & Energy
  { n: "Ballard Power", l: "Hydrogen fuel cells for buses, trains and ships", c: "climate", u: "https://www.ballard.com", k: "hydrogen fuel cell clean energy transportation cleantech" },
  { n: "General Fusion", l: "Building a practical fusion power plant", c: "climate", u: "https://generalfusion.com", k: "fusion energy power cleantech physics" },
  { n: "Svante", l: "Filters that capture CO₂ from industrial smokestacks", c: "climate", u: "https://www.svanteinc.com", k: "carbon capture climate cleantech materials" },
  { n: "Ekona Power", l: "Clean hydrogen from natural gas without CO₂ emissions", c: "climate", u: "https://www.ekonapower.com", k: "hydrogen pyrolysis energy cleantech climate" },
  { n: "Ionomr Innovations", l: "Membranes for electrolyzers, fuel cells and batteries", c: "climate", u: "https://ionomr.com", k: "materials hydrogen electrolyzer cleantech energy" },
  { n: "Ostara", l: "Recovers nutrients from wastewater to make fertilizer", c: "climate", u: "https://ostara.com", k: "water fertilizer circular agriculture cleantech sustainability" },

  // Fintech
  { n: "Trulioo", l: "Identity verification for businesses in nearly every country", c: "fintech", u: "https://www.trulioo.com", k: "identity kyc compliance verification api fintech security" },
  { n: "Procurify", l: "Spend management that tracks purchases before they happen", c: "fintech", u: "https://www.procurify.com", k: "procurement spend finance saas fintech" },
  { n: "FISPAN", l: "Connects business banking directly into accounting software", c: "fintech", u: "https://www.fispan.com", k: "banking erp integration payments fintech" },
  { n: "Mogo", l: "Digital wealth and investing app for Canadians", c: "fintech", u: "https://www.mogo.ca", k: "investing personal finance money fintech" },

  // Software
  { n: "Clio", l: "Cloud software for running a law practice", c: "software", u: "https://www.clio.com", k: "legal legaltech practice management saas" },
  { n: "Visier", l: "People analytics that answer workforce questions", c: "software", u: "https://www.visier.com", k: "hr analytics workforce data saas ai" },
  { n: "Thinkific", l: "Create, market and sell online courses", c: "software", u: "https://www.thinkific.com", k: "education edtech courses creators saas" },
  { n: "Klue", l: "Competitive intelligence for sales and product teams", c: "software", u: "https://klue.com", k: "sales enablement competitors ai saas" },
  { n: "ActiveState", l: "Secure, reproducible open-source language runtimes", c: "software", u: "https://www.activestate.com", k: "developer tools python open source supply chain security devtools" },
  { n: "Absolute Security", l: "Keeps laptops and their security tools working and found", c: "software", u: "https://www.absolute.com", k: "cybersecurity endpoint security devices" },

  // Marketing
  { n: "Hootsuite", l: "Plan, publish and measure social media in one place", c: "marketing", u: "https://www.hootsuite.com", k: "social media marketing saas analytics" },
  { n: "Later", l: "Social scheduling and influencer marketing", c: "marketing", u: "https://later.com", k: "instagram creators influencer social marketing saas" },
  { n: "Unbounce", l: "Landing page builder with AI-assisted copy and testing", c: "marketing", u: "https://unbounce.com", k: "landing pages conversion marketing ai saas" },

  // Commerce
  { n: "Article", l: "Modern furniture sold direct, online only", c: "commerce", u: "https://www.article.com", k: "furniture ecommerce dtc retail" },
  { n: "Indochino", l: "Made-to-measure suits ordered online or in showrooms", c: "commerce", u: "https://www.indochino.com", k: "fashion apparel ecommerce dtc retail" },
  { n: "Spud", l: "Local and organic grocery delivery", c: "commerce", u: "https://www.spud.ca", k: "grocery food delivery ecommerce sustainability" },
  { n: "Fresh Prep", l: "Weekly meal kits with zero-waste packaging", c: "commerce", u: "https://www.freshprep.ca", k: "food meal kit delivery ecommerce sustainability" },
  { n: "Elastic Path", l: "Composable commerce APIs for building online stores", c: "commerce", u: "https://www.elasticpath.com", k: "ecommerce headless api developer saas" },

  // Mobility & Logistics
  { n: "Spare", l: "Software for running on-demand and paratransit service", c: "mobility", u: "https://spare.com", k: "transit transportation mobility saas cities" },
  { n: "Mojio", l: "Connected-car platform for automakers and fleets", c: "mobility", u: "https://www.moj.io", k: "automotive iot telematics fleet mobility" },
  { n: "Routific", l: "Route planning for local delivery businesses", c: "mobility", u: "https://www.routific.com", k: "logistics delivery routing optimization saas" },

  // Games & Media
  { n: "Kabam", l: "Mobile games built around big-franchise worlds", c: "media", u: "https://kabam.com", k: "games gaming mobile entertainment" },
  { n: "Relic Entertainment", l: "Real-time strategy games for PC and console", c: "media", u: "https://www.relic.com", k: "games gaming strategy pc entertainment" },
  { n: "Dapper Labs", l: "Digital collectibles and the Flow blockchain", c: "media", u: "https://www.dapperlabs.com", k: "web3 blockchain crypto nft collectibles" },
  { n: "PressReader", l: "Thousands of newspapers and magazines in one app", c: "media", u: "https://www.pressreader.com", k: "news publishing media reading app" },

  // Earth & Ag
  { n: "Semios", l: "Sensors and data for orchards and vineyards", c: "earth", u: "https://semios.com", k: "agtech agriculture iot sensors farming data" },
  { n: "Ideon Technologies", l: "Uses cosmic-ray muons to see deep underground", c: "earth", u: "https://ideon.ai", k: "mining exploration geology physics deeptech ai minerals" }
];
