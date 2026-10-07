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
  { n: "Ideon Technologies", l: "Uses cosmic-ray muons to see deep underground", c: "earth", u: "https://ideon.ai", k: "mining exploration geology physics deeptech ai minerals" },

  // ---- Startups: AI & Robotics ----
  { n: "Apera AI", l: "AI vision software that lets industrial robots pick and assemble parts", c: "ai", u: "https://apera.ai", k: "robotics machine vision bin picking manufacturing automation 4d vision" },
  { n: "Unblocked", l: "Context engine that gives AI coding agents knowledge of your codebase", c: "ai", u: "https://getunblocked.com", k: "developer tools ai coding agents context engine devtools" },
  { n: "Durable", l: "AI business builder for websites, CRM, bookings and marketing", c: "ai", u: "https://durable.com", k: "ai website builder small business smb generative ai crm marketing" },
  { n: "Metaspectral", l: "AI that reads hyperspectral data for recycling, mining and earth imaging", c: "ai", u: "https://metaspectral.com", k: "hyperspectral imaging computer vision recycling sorting earth observation space" },
  { n: "Inverted AI", l: "Human-like simulated drivers for testing autonomous vehicles", c: "ai", u: "https://inverted.ai", k: "autonomous vehicles simulation behavior models ubc spinout adas mobility" },
  { n: "Mundo AI", l: "Training data and evaluations for audio, video and multilingual AI", c: "ai", u: "https://mundoai.world", k: "training data multilingual datasets y combinator" },
  { n: "OnDeck AI", l: "Vision model that analyzes any video footage without custom training", c: "ai", u: "https://www.ondeckai.com", k: "computer vision video analysis vlm defence security y combinator" },
  { n: "Ariglad", l: "AI that writes and updates support knowledge base articles", c: "ai", u: "https://www.ariglad.com", k: "knowledge base customer support ai automation y combinator saas" },
  { n: "Trueplace", l: "AI interviewers that help candidates practise for career interviews", c: "ai", u: "https://www.trueplace.ca", k: "edtech interview prep ai avatar career y combinator" },
  { n: "Quandri", l: "AI automation for insurance brokerage renewals and service work", c: "ai", u: "https://www.quandri.io", k: "insurtech insurance brokers ai agents automation saas fintech" },
  { n: "Caseway", l: "AI legal research tool with cited answers from court decisions", c: "ai", u: "https://www.caseway.ai", k: "legal tech legal research ai case law lawyers" },
  { n: "NorBot", l: "Sources, deploys and manages commercial robots for Canadian firms", c: "ai", u: "https://norbot.ca", k: "robotics integrator service robots fleet management cleaning delivery" },
  { n: "A&K Robotics", l: "Self-driving mobility pods for airports and large venues", c: "ai", u: "https://www.aandkrobotics.com", k: "robotics autonomous micro-mobility airport pods accessibility" },
  { n: "DaoAI", l: "AI optical inspection that finds defects on circuit board lines", c: "ai", u: "https://www.daoai.com", k: "machine vision pcb inspection manufacturing visual ai" },
  { n: "Conexiom", l: "AI that turns emailed sales orders into ERP-ready data", c: "ai", u: "https://conexiom.com", k: "order automation b2b sales documents erp distributors manufacturing" },
  { n: "Finitizer", l: "Agentic AI that finds and removes waste in company cloud spending", c: "ai", u: "https://finitizer.com", k: "cloud cost optimization finops agentic ai" },
  { n: "GroundedAI", l: "Field data and AI tools for tunnelling and underground mining crews", c: "ai", u: "https://www.groundedai.com", k: "tunnelling geotechnical mining construction field data" },
  { n: "Superpilot", l: "AI growth marketing platform that makes content for online stores", c: "ai", u: "https://superpilot.com", k: "ecommerce ai marketing seo landing pages commerce growth" },
  { n: "UrbanLogiq", l: "AI data platform that helps governments plan and decide", c: "ai", u: "https://www.urbanlogiq.com", k: "govtech government data analytics smart city saas" },

  // ---- Startups: Quantum ----
  { n: "1QBit", l: "Software tools for designing large-scale quantum computers", c: "quantum", u: "https://1qbit.com", k: "quantum computing software optimization" },
  { n: "BTQ Technologies", l: "Post-quantum security and quantum computing infrastructure", c: "quantum", u: "https://btq.com", k: "post-quantum cryptography quantum security" },

  // ---- Startups: Software ----
  { n: "LōD Technologies", l: "Energy software that shifts data centre compute around grid needs", c: "software", u: "https://lod.io", k: "ai inference data centre energy demand response compute climate" },
  { n: "IcePanel", l: "Shared diagrams for mapping software architecture", c: "software", u: "https://icepanel.io", k: "developer tools devtools c4 model architecture diagrams y combinator" },
  { n: "Repacket", l: "Browser security gateway that stops phishing and data leaks", c: "software", u: "https://repacket.com", k: "cybersecurity secure web gateway dlp phishing security y combinator" },
  { n: "Styx Intelligence", l: "Finds brand impersonation and leaked credentials online", c: "software", u: "https://styxintel.com", k: "cybersecurity digital risk protection threat intelligence dark web security" },
  { n: "CyberQP", l: "AI privileged access management for IT service providers", c: "software", u: "https://www.cyberqp.ai", k: "cybersecurity pam msp identity credentials security" },
  { n: "D3 Security", l: "Agentic AI platform that triages security operations alerts", c: "software", u: "https://d3security.com", k: "cybersecurity soc soar incident response ai security" },
  { n: "Optigo Networks", l: "Network monitoring and security for smart building systems", c: "software", u: "https://optigo.net", k: "ot security building automation network monitoring" },
  { n: "Hubbl", l: "Scans Salesforce setups for security gaps and wasted spend", c: "software", u: "https://www.hubbl.com", k: "salesforce security tech debt saas diagnostics devops" },
  { n: "Codezero", l: "Keeps passwords and API keys away from AI agents and apps", c: "software", u: "https://codezero.io", k: "developer tools devtools credential security ai agents secrets" },
  { n: "Matidor", l: "Field project tracking on a live map for site-based teams", c: "software", u: "https://matidor.com", k: "project management gis field operations environmental y combinator" },
  { n: "Switchboard", l: "Fleet management, logging and compliance software for trucking", c: "software", u: "https://www.onswitchboard.com", k: "trucking eld fleet management telematics logistics y combinator" },
  { n: "Rise People", l: "All-in-one HR, payroll and benefits software for Canadian firms", c: "software", u: "https://risepeople.com", k: "hr tech payroll benefits hris" },
  { n: "VanHack", l: "Subscription platform for hiring pre-screened tech talent", c: "software", u: "https://vanhack.com", k: "hr tech recruiting hiring engineers talent marketplace" },
  { n: "Riipen", l: "Links students with employers for real-world class projects", c: "software", u: "https://www.riipen.com", k: "edtech education experiential learning students employers" },
  { n: "Clariti", l: "Permitting software and AI plan review for local governments", c: "software", u: "https://www.claritisoftware.com", k: "govtech permitting ai plan review municipalities saas" },

  // ---- Startups: Biotech ----
  { n: "Borealis Biosciences", l: "RNA medicines for kidney disease", c: "bio", u: "https://www.borealisbio.com", k: "rna therapeutics kidney disease sirna" },
  { n: "Gandeeva Therapeutics", l: "Uses cryo-EM imaging and machine learning to design cancer drugs", c: "bio", u: "https://www.gandeeva.com", k: "cryo-em machine learning ai drug discovery oncology" },
  { n: "Abdera Therapeutics", l: "Antibody-guided radiation therapies for hard-to-treat cancers", c: "bio", u: "https://abderatx.com", k: "radiopharmaceutical antibody oncology cancer clinical" },
  { n: "Alpha-9 Oncology", l: "Radiopharmaceuticals for imaging and treating cancer", c: "bio", u: "https://www.a9oncology.com", k: "radiopharmaceutical theranostics melanoma oncology cancer" },
  { n: "ME Therapeutics", l: "Immuno-oncology drugs aimed at myeloid immune cells", c: "bio", u: "https://www.metherapeutics.com", k: "immuno-oncology myeloid cells cancer drug discovery" },
  { n: "NanoVation Therapeutics", l: "Lipid nanoparticles that deliver genetic medicines beyond the liver", c: "bio", u: "https://nanovationtx.com", k: "lipid nanoparticle lnp nucleic acid delivery genetic medicine" },
  { n: "Incisive Genetics", l: "Lipid nanoparticle delivery for in-body CRISPR gene editing", c: "bio", u: "https://incisivegenetics.com", k: "crispr gene editing lnp delivery gene therapy ubc spinout" },
  { n: "CereCura Nanotherapeutics", l: "Lipid nanoparticle RNA therapies for brain disorders", c: "bio", u: "https://www.cerecura.com", k: "rna lnp neuroscience brain cns delivery" },
  { n: "Sustained Therapeutics", l: "Long-acting injectable non-opioid drugs for chronic pain", c: "bio", u: "https://sustainedtherapeutics.com", k: "non-opioid pain sustained release drug delivery" },
  { n: "3C Therapeutics", l: "Antibody conjugates that destroy cancer-driving proteins", c: "bio", u: "https://www.3ctherapeutics.com", k: "degrader antibody conjugate protein degradation oncology cancer" },
  { n: "DCx Biotherapeutics", l: "Precision drug conjugates for genetically defined cancers", c: "bio", u: "https://www.dcxbio.com", k: "antibody drug conjugate adc precision oncology cancer" },
  { n: "Reverb Therapeutics", l: "Antibodies that redirect the body's own cytokines to disease sites", c: "bio", u: "https://www.reverbtx.com", k: "bispecific antibody cytokine cancer autoimmune" },
  { n: "SeraGene Therapeutics", l: "siRNA therapies for rare bleeding and clotting disorders", c: "bio", u: "https://www.seragenetx.com", k: "sirna lnp bleeding disorders hemophilia rna" },
  { n: "Optigo Biotherapeutics", l: "Long-acting eye injections for retinal disease", c: "bio", u: "https://www.optigobio.com", k: "ophthalmology retina eye biologic" },
  { n: "Zucara Therapeutics", l: "Once-daily drug to prevent low blood sugar in diabetes", c: "bio", u: "https://www.zucara.ca", k: "hypoglycemia type 1 diabetes drug" },
  { n: "Pramana Pharmaceuticals", l: "Small-molecule drugs for diabetes, obesity and metabolic disease", c: "bio", u: "https://www.pramanapharma.ca", k: "cardiometabolic obesity diabetes small molecule glp-1" },
  { n: "Augurex Life Sciences", l: "Blood tests for diagnosing rheumatoid arthritis and spine disease", c: "bio", u: "https://augurex.com", k: "diagnostics biomarker rheumatoid arthritis health" },
  { n: "BugSeq", l: "Software that analyzes pathogen DNA to find infections and resistance", c: "bio", u: "https://bugseq.com", k: "bioinformatics sequencing infectious disease antimicrobial resistance software" },
  { n: "Integrated Nanotherapeutics", l: "Nanoparticle delivery technology for vaccines and drugs", c: "bio", u: "https://integratedntx.com", k: "nanotechnology drug delivery lipid nanoparticle vaccines" },
  { n: "Virogin Biotech", l: "Engineered viruses that attack tumors and trigger immunity", c: "bio", u: "https://virogin.com", k: "oncolytic virus cancer immunotherapy clinical" },
  { n: "NervGen Pharma", l: "Peptide drug to repair nerves after spinal cord injury", c: "bio", u: "https://nervgen.com", k: "spinal cord injury nerve repair neuroregeneration" },
  { n: "ViewsML", l: "AI that reads biomarkers from tissue images without lab staining", c: "bio", u: "https://www.viewsml.com", k: "digital pathology ai machine learning virtual staining biomarkers" },
  { n: "HTuO Biosciences", l: "Computer modeling of protein motion to speed drug design", c: "bio", u: "https://www.htuobio.com", k: "in silico drug discovery molecular simulation computational chemistry" },

  // ---- Startups: Health ----
  { n: "Sonic Incytes", l: "AI-guided point-of-care ultrasound for liver disease", c: "health", u: "https://www.sonicincytes.com", k: "medtech ultrasound liver ai healthcare" },
  { n: "Clarius Mobile Health", l: "Wireless handheld ultrasound scanners that pair with phones", c: "health", u: "https://clarius.com", k: "medtech handheld ultrasound pocus wireless imaging healthcare" },
  { n: "Avee Health", l: "On-demand virtual doctor visits for patients across BC", c: "health", u: "https://avee.health", k: "virtual care telehealth primary care doctors healthcare" },
  { n: "EyeCareX", l: "AI tools that automate parts of the eye exam for optometrists", c: "health", u: "https://www.eyecarex.com", k: "optometry eye exam ai vision care digital health" },
  { n: "Proton Intelligence", l: "Wearable that continuously tracks potassium for kidney patients", c: "health", u: "https://www.protonintelligence.com", k: "continuous monitoring potassium wearable kidney medtech" },
  { n: "Human in Motion Robotics", l: "Self-balancing exoskeleton that helps people with paralysis walk", c: "health", u: "https://www.humaninmotion.com", k: "exoskeleton rehabilitation spinal cord injury robotics medtech" },
  { n: "Lungpacer Medical", l: "Diaphragm pacing device to wean ICU patients off ventilators", c: "health", u: "https://lungpacer.com", k: "medtech diaphragm pacing ventilator icu medical device" },
  { n: "Medimap", l: "Shows live walk-in clinic wait times and books visits", c: "health", u: "https://medimap.ca", k: "walk-in clinic wait times booking healthcare" },
  { n: "Cortico", l: "Software that automates patient booking and intake for clinics", c: "health", u: "https://cortico.health", k: "clinic software patient engagement emr scheduling healthcare" },
  { n: "Thrive Health", l: "Platform for remote patient monitoring and virtual care programs", c: "health", u: "https://www.thrive.health", k: "remote patient monitoring digital health platform" },
  { n: "Arya Health", l: "Cloud electronic health records built for clinics", c: "health", u: "https://aryaehr.com", k: "ehr emr electronic health records clinic software healthcare" },
  { n: "MacroHealth", l: "Marketplace software connecting health payers and providers", c: "health", u: "https://www.macrohealth.com", k: "healthcare payments provider network payer platform" },
  { n: "Careteam Technologies", l: "Care coordination platform for patients with complex conditions", c: "health", u: "https://www.careteam.tech", k: "care coordination chronic disease patient navigation digital health" },
  { n: "Rocket Doctor AI", l: "AI-assisted virtual care network linking patients and doctors", c: "health", u: "https://rocketdoctor.ai", k: "virtual care ai telehealth physician network healthcare" },

  // ---- Startups: Climate & Energy ----
  { n: "Moment Energy", l: "Battery storage systems built from repurposed EV batteries", c: "climate", u: "https://www.momentenergy.com", k: "second life ev battery energy storage cleantech" },
  { n: "Mangrove Lithium", l: "Electrochemical refining of battery-grade lithium", c: "climate", u: "https://www.mangrovelithium.com", k: "lithium refinery battery supply chain electrochemical cleantech" },
  { n: "Arca", l: "Turns mine waste into permanent carbon removal", c: "climate", u: "https://www.arcaclimate.com", k: "carbon removal cdr mineralization mine tailings" },
  { n: "CO280", l: "Captures CO₂ at pulp and paper mills for carbon removal", c: "climate", u: "https://www.co280.com", k: "carbon capture removal pulp paper mill biogenic co2" },
  { n: "Agora Energy Technologies", l: "Flow battery that runs on captured CO₂ to store energy", c: "climate", u: "https://agoraenergy.ca", k: "co2 flow battery grid storage carbon utilization cleantech" },
  { n: "Axine Water Technologies", l: "Destroys PFAS 'forever chemicals' in industrial wastewater", c: "climate", u: "https://www.axinewater.com", k: "water treatment pfas wastewater electrochemical cleantech" },
  { n: "Saltworks Technologies", l: "Industrial water treatment and lithium refining systems", c: "climate", u: "https://www.saltworkstech.com", k: "desalination wastewater brine lithium water cleantech" },
  { n: "Plastic Bank", l: "Pays coastal communities to collect plastic waste", c: "climate", u: "https://www.plasticbank.com", k: "ocean plastic recycling circular economy collection" },
  { n: "ChopValue", l: "Makes furniture and panels from recycled chopsticks", c: "climate", u: "https://www.chopvalue.com", k: "circular economy upcycling bamboo furniture microfactory" },
  { n: "veritree", l: "Verified tree planting and reforestation for businesses", c: "climate", u: "https://www.veritree.com", k: "reforestation tree planting nature restoration carbon" },
  { n: "Clir Renewables", l: "AI software to manage wind, solar and storage portfolios", c: "climate", u: "https://www.clir.eco", k: "renewable energy analytics wind solar ai software" },
  { n: "Portable Electric", l: "Silent battery units that replace diesel generators", c: "climate", u: "https://www.portable-electric.com", k: "mobile battery generator replacement film construction ev charging energy" },
  { n: "Daanaa", l: "Programmable chip-based power electronics for energy systems", c: "climate", u: "https://www.daanaa.com", k: "power electronics solar storage semiconductor energy" },
  { n: "Rainforest Automation", l: "Grid analytics and demand response software for utilities", c: "climate", u: "https://www.rainforestautomation.com", k: "smart grid demand response utility energy management" },
  { n: "HTEC", l: "Builds hydrogen production, fueling stations and supply", c: "climate", u: "https://www.htec.ca", k: "hydrogen fueling station fuel cell trucks zero emission energy" },
  { n: "Hydra Energy", l: "Hydrogen conversions for heavy-duty diesel trucks", c: "climate", u: "https://www.hydraenergy.com", k: "hydrogen diesel fleet trucking emissions energy" },
  { n: "Nexterra", l: "Gasification systems that turn waste wood into heat and power", c: "climate", u: "https://www.nexterra.ca", k: "biomass gasification waste to energy renewable heat" },
  { n: "Greenlight Innovation", l: "Test equipment for fuel cells, electrolyzers and batteries", c: "climate", u: "https://www.greenlightinnovation.com", k: "fuel cell electrolyzer hydrogen battery testing energy" },
  { n: "Oxygen8", l: "High-efficiency ventilation and heat recovery for buildings", c: "climate", u: "https://www.oxygen8.ca", k: "building decarbonization ventilation heat pump cleantech" },
  { n: "SenseNet", l: "AI cameras and sensors for early wildfire detection", c: "climate", u: "https://sensenet.ai", k: "wildfire detection smoke cameras sensors ai" },
  { n: "VoltSafe", l: "Magnetic prongless smart plugs for EVs, boats and homes", c: "climate", u: "https://www.voltsafe.com", k: "magnetic connector smart plug energy monitoring ev marine" },
  { n: "PhyCo", l: "Compostable seaweed-based bioplastics for farming", c: "climate", u: "https://phyco.ca", k: "seaweed bioplastic compostable agriculture ocean biomaterials" },

  // ---- Startups: Earth & Ag ----
  { n: "Maia Farms", l: "Mushroom and mycelium ingredients for food makers", c: "earth", u: "https://maiafarms.com", k: "mycelium mushroom protein food tech fermentation agtech" },
  { n: "Terramera", l: "Plant-based crop inputs and soil intelligence for farmers", c: "earth", u: "https://www.terramera.com", k: "agtech biopesticide green chemistry soil carbon agriculture" },
  { n: "Lucent BioSciences", l: "Low-carbon micronutrient fertilizers from recycled materials", c: "earth", u: "https://lucentbiosciences.com", k: "fertilizer micronutrients soil health circular agtech" },
  { n: "Verdi", l: "Wireless irrigation automation for farms", c: "earth", u: "https://www.verdi.ag", k: "precision irrigation agtech water agriculture automation" },
  { n: "Ecoation", l: "Greenhouse crop monitoring for pests, climate and yield", c: "earth", u: "https://www.ecoation.com", k: "greenhouse agtech pest detection yield prediction ai" },
  { n: "MineSense Technologies", l: "Sensors that sort ore from waste in real time at the mine", c: "earth", u: "https://minesense.com", k: "mining ore sorting sensors digital mining copper" },
  { n: "VRIFY", l: "AI mineral exploration and 3D presentation software", c: "earth", u: "https://vrify.com", k: "mining exploration ai geoscience 3d" },
  { n: "RZOLV Technologies", l: "Cyanide-free reagent for extracting gold and metals", c: "earth", u: "https://rzolv.com", k: "mining gold extraction non-cyanide chemistry" },

  // ---- Startups: Mobility & Logistics ----
  { n: "Spexi", l: "Network of drone pilots collecting high-res aerial imagery", c: "mobility", u: "https://www.spexi.com", k: "drones aerial imagery geospatial mapping digital twin" },
  { n: "FireSwarm Solutions", l: "Heavy-lift drone swarms for fighting wildfires", c: "mobility", u: "https://fireswarmsolutions.com", k: "drones wildfire suppression autonomous robotics climate" },
  { n: "Eagle Eyes Search", l: "Drone video software that helps find missing people", c: "mobility", u: "https://eagleeyessearch.com", k: "drones search and rescue computer vision ai" },
  { n: "ENVO Drive Systems", l: "Electric bikes, trikes, snow bikes and boat drives", c: "mobility", u: "https://www.envodrive.com", k: "ebike electric mobility ev electric boat" },
  { n: "Hypercharge", l: "EV charging hardware, networks and energy software", c: "mobility", u: "https://www.hypercharge.com", k: "ev charging stations electric vehicles fleet climate" },
  { n: "UniUni", l: "Last-mile parcel delivery for online retailers", c: "mobility", u: "https://www.uniuni.com", k: "logistics last mile delivery parcels ecommerce shipping" },

  // ---- Startups: Fintech ----
  { n: "Bree", l: "App offering Canadians no-interest cash advances", c: "fintech", u: "https://www.trybree.com", k: "cash advance consumer lending y combinator money" },
  { n: "Sivo", l: "Lending API so platforms can offer credit to their users", c: "fintech", u: "https://sivo.com", k: "embedded lending debt capital api y combinator credit" },
  { n: "VoPay", l: "API platform for embedding payments into software products", c: "fintech", u: "https://www.vopay.com", k: "payments api embedded finance interac" },
  { n: "Blossom Social", l: "Social network where investors share their real portfolios", c: "fintech", u: "https://www.blossomsocial.com", k: "investing app social trading stocks dividends" },
  { n: "Spark", l: "Sales and CRM software for new home developments", c: "fintech", u: "https://spark.re", k: "proptech real estate presale developer crm" },
  { n: "liv.rent", l: "Rental platform with verified listings, screening and leases", c: "fintech", u: "https://liv.rent", k: "proptech rentals landlord tenant screening real estate" },
  { n: "APOLLO Insurance", l: "Online tenant, personal and small business insurance", c: "fintech", u: "https://apollocover.com", k: "insurtech renters insurance small business" },
  { n: "Spring Financial", l: "Online personal loans and credit-building programs", c: "fintech", u: "https://www.springfinancial.ca", k: "consumer lending personal loans credit building" },
  { n: "Levr", l: "AI workspace that helps brokers prepare business loan files", c: "fintech", u: "https://levr.ai", k: "small business lending loan brokers ai underwriting" },
  { n: "Yield Exchange", l: "Marketplace where institutions bid on GICs and deposits", c: "fintech", u: "https://yieldexchange.ca", k: "gic marketplace treasury deposits institutional investing" },
  { n: "FrontFundr", l: "Equity crowdfunding for Canadian private companies", c: "fintech", u: "https://www.frontfundr.com", k: "equity crowdfunding private markets investors investing" },
  { n: "AllScale", l: "Self-custody stablecoin payments, invoicing and payroll", c: "fintech", u: "https://www.allscale.io", k: "stablecoin payments crypto invoicing payroll web3" },

  // ---- Startups: Marketing ----
  { n: "Fintel Connect", l: "Affiliate marketing network built for financial brands", c: "marketing", u: "https://www.fintelconnect.com", k: "affiliate marketing partner network banks fintech" },
  { n: "Tradable Bits", l: "Fan data and engagement platform for sports and music", c: "marketing", u: "https://www.tradablebits.com", k: "fan engagement first party data sports music crm" },
  { n: "Yoke", l: "AI agents that run LinkedIn prospecting for sales teams", c: "marketing", u: "https://www.yokegtm.com", k: "ai sales outbound linkedin prospecting agents b2b" },
  { n: "Creator.co", l: "AI platform that matches brands with influencers", c: "marketing", u: "https://www.creator.co", k: "influencer marketing creators ugc campaigns ai" },
  { n: "Lumen5", l: "AI tool that turns text into social marketing videos", c: "marketing", u: "https://lumen5.com", k: "ai video creation content marketing social media generative" },
  { n: "Browse AI", l: "No-code tool to scrape and monitor website data", c: "marketing", u: "https://www.browse.ai", k: "web scraping data extraction monitoring no-code ai" },
  { n: "Rival Technologies", l: "Chat-style mobile surveys for market research", c: "marketing", u: "https://www.rivaltech.com", k: "market research conversational surveys insights" },
  { n: "SalesCloser AI", l: "AI agent that runs live product demos and sales calls", c: "marketing", u: "https://salescloser.ai", k: "ai sales agent demos qualification" },
  { n: "Keela", l: "Donor management and fundraising CRM for nonprofits", c: "marketing", u: "https://www.keela.co", k: "nonprofit crm donor management fundraising" },

  // ---- Startups: Commerce ----
  { n: "Monos", l: "Direct-to-consumer luggage and travel accessories", c: "commerce", u: "https://www.monos.com", k: "luggage travel dtc consumer brand ecommerce" },
  { n: "Freshline", l: "Ordering and payments software for perishable food sellers", c: "commerce", u: "https://freshline.io", k: "food wholesale ecommerce ordering distributors seafood" },
  { n: "Blanka", l: "Platform to launch a private-label cosmetics brand", c: "commerce", u: "https://www.blankabrand.com", k: "private label beauty cosmetics ecommerce" },
  { n: "Perk Labs", l: "Mobile ordering and loyalty app for restaurants", c: "commerce", u: "https://perklabs.io", k: "restaurant ordering loyalty payments app" },
  { n: "Makeship", l: "Makes limited-run plush and merch with online creators", c: "commerce", u: "https://www.makeship.com", k: "creator merch plush crowdfunding creator economy" },
  { n: "Pixieset", l: "Client galleries, websites and studio tools for photographers", c: "commerce", u: "https://pixieset.com", k: "photographers galleries creator tools websites" },
  { n: "Canada Drives", l: "Online marketplace to buy, finance and sell used cars", c: "commerce", u: "https://www.canadadrives.ca", k: "used cars online auto marketplace financing" },

  // ---- Startups: Games & Media ----
  { n: "Brace Yourself Games", l: "Indie studio making rhythm and roguelike games", c: "media", u: "https://braceyourselfgames.com", k: "indie games gaming necrodancer publisher studio" },
  { n: "Blackbird Interactive", l: "Game studio behind the Homeworld series", c: "media", u: "https://www.blackbirdinteractive.com", k: "game studio gaming homeworld co-development" },
  { n: "Cognitive3D", l: "Spatial analytics for VR, AR and robotics sessions", c: "media", u: "https://cognitive3d.com", k: "xr analytics vr ar spatial data enterprise" },
  { n: "Monstercat", l: "Independent electronic music label and platform", c: "media", u: "https://www.monstercat.com", k: "music label edm artists streaming" },
  { n: "Hinterland Studio", l: "Indie studio making The Long Dark survival games", c: "media", u: "https://www.hinterland.com", k: "indie games gaming survival" },
  { n: "Endnight Games", l: "Indie studio behind The Forest survival horror games", c: "media", u: "https://endnightgames.com", k: "indie games gaming survival horror" },
  { n: "A Thinking Ape", l: "Maker of long-running social mobile strategy games", c: "media", u: "https://www.athinkingape.com", k: "mobile games gaming social strategy studio" },
  { n: "East Side Games Group", l: "Free-to-play mobile game developer and publisher", c: "media", u: "https://eastsidegamesgroup.com", k: "mobile games gaming idle games publisher" },
  { n: "LayerZero Labs", l: "Protocol for moving assets and messages across blockchains", c: "media", u: "https://layerzero.network", k: "web3 crypto interoperability cross-chain blockchain" },
  { n: "Indiegraf", l: "Publishing and revenue platform for local news outlets", c: "media", u: "https://indiegraf.com", k: "local news media publishing newsletters memberships" }
];
