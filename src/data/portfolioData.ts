export interface CaseStudySection {
  id: string;
  title: string;
  tagline?: string;
  summary: string;
  keyTakeaway?: string;
  content: string[];
  visualId?: string;
  quote?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'screen' | 'diagram' | 'ecosystem' | 'research';
  categoryLabel: string;
  imageSrc: string;
  caption: string;
  pmRationale: string;
  tradeoffOrDecision: string;
  userType: 'Commuter' | 'Staff / Conductor' | 'Executive / Ecosystem' | 'Product Architecture';
  aspectRatio?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  role: string;
  team: string;
  timeline: string;
  domain: string;
  scale: string;
  status: string;
  executiveSummary: string;
  heroImage: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  sections: CaseStudySection[];
  artifacts: GalleryItem[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    institution: string;
    email: string;
    location: string;
    links: {
      github: string;
      linkedin: string;
      resumePdf: string;
    };
    coreBeliefs: string[];
    strengths: {
      title: string;
      description: string;
    }[];
    differentiators: string[];
    targetCompanies: string[];
  };
  caseStudies: CaseStudy[];
  galleryItems: GalleryItem[];
  experiences: ExperienceItem[];
  productPhilosophy: {
    mission: string;
    approach: string;
    principles: {
      number: string;
      title: string;
      description: string;
      example: string;
    }[];
  };
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Gaurav Gupta",
    role: "Product Manager",
    tagline: "Building products that improve people's lives by combining technology, user empathy, and systems thinking.",
    bio: "I specialize in untangling complex, ambiguous real-world problems and systematically reducing uncertainty until a practical, high-impact product can be built. With a Computer Science foundation from IIT Kharagpur and deep training in Object-Oriented Analysis & Systems Design, I bridge deep technical feasibility with organizational incentives and human behavior.",
    institution: "Indian Institute of Technology (IIT) Kharagpur",
    email: "gupta.gaurav.iitkgp@gmail.com",
    location: "Bengaluru / Nashik, India",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      resumePdf: "/assets/aistudio/NBA_product_portfolio_-_artifacts_3418db75.pdf",
    },
    coreBeliefs: [
      "Great products start with understanding people, not assuming technical requirements.",
      "Constraints inspire better product decisions than unlimited resources.",
      "Product Managers create alignment across technology, business, and users.",
      "Shipping is important, but solving the right problem is far more important.",
      "A product succeeds only when customer incentives, operational workflows, and institutional realities align."
    ],
    strengths: [
      {
        title: "Systems Thinking",
        description: "Viewing products not as isolated apps, but as nodes within a broader network of users, organizations, legacy infrastructure, and incentives."
      },
      {
        title: "0-to-1 Opportunity Discovery",
        description: "Uncovering overlooked real-world pain points through direct field observation, commuter interviews, and operational data auditing."
      },
      {
        title: "Pragmatic Product Pivoting",
        description: "Willingness to discard technically seductive ideas (e.g., GPS tracking) when ground reality demands low-cost, robust heuristic solutions."
      },
      {
        title: "Cross-Functional Leadership",
        description: "Mobilizing a 7-person cross-functional team, securing college grant funding, and pitching to municipal leadership without formal authority."
      },
      {
        title: "Rigorous Retrospective Judgment",
        description: "Diagnosing why products succeed or stall at the adoption boundary, treating failure as an objective system misalignment rather than bad luck."
      }
    ],
    differentiators: [
      "Naturally identifies overlooked, complex real-world civic and operational problems.",
      "Commands systems-level thinking (OOAD) to model complex multi-sided platforms before writing a line of code.",
      "Takes initiative to build products from scratch without waiting for formal mandates.",
      "Prioritizes authenticity and measured evidence over inflated hype metrics."
    ],
    targetCompanies: [
      "Google", "Microsoft", "Amazon", "Atlassian", "Razorpay", "CRED", "Swiggy", "Uber", "Airbnb"
    ]
  },
  caseStudies: [
    {
      id: "nashik-bus-assistant",
      title: "Nashik Bus Assistant (NBA)",
      subtitle: "Designing a low-cost digital transit system for a city struggling with unreliable public transportation",
      tagline: "From 0.5–1.5 hr commuter wait times to predictable journeys: pivoting from high-cost GPS tracking to a low-cost heuristic transit platform under real-world constraints.",
      role: "Product Lead / Scrum Master",
      team: "7 members (Product, Mobile Engineering, Backend, User Research)",
      timeline: "May 2018 – May 2019",
      domain: "Public Mobility / Civic Tech / Systems Architecture",
      scale: "70,000+ daily city commuters · 90 bus routes structured",
      status: "Deployable MVP built & validated; public rollout constrained by institutional transition (MSRTC → NMC Smart City)",
      heroImage: "/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_38_23_PM_ea32cc97.png",
      metrics: [
        {
          label: "Problem Scale",
          value: "70,000+",
          detail: "Daily public transit commuters affected by schedule unpredictability"
        },
        {
          label: "Network Covered",
          value: "90 Routes",
          detail: "Extracted, cleaned, and structured from legacy pen-and-paper logs"
        },
        {
          label: "Proposed Wait Reduction",
          value: "20%",
          detail: "Target reduction in commuter wait time via predictable timetable & ETA heuristics"
        },
        {
          label: "Financial Pressure Context",
          value: "₹17.72 Cr",
          detail: "Annual MSRTC operating deficit, causing fleet reduction from 265 to 110 buses"
        }
      ],
      executiveSummary: "In 2018, Nashik's public bus system was in crisis: fleet sizes dropped 58% due to municipal deficits, leaving 70,000+ daily commuters waiting 30 to 90 minutes with zero visibility into bus arrivals. As Product Lead, I spearheaded a 7-person team to solve this. When field research revealed that buses lacked GPS hardware and bus stops lacked GIS coordinates, I led a critical pivot: instead of abandoning the project or demanding multimillion-rupee hardware overhauls, we engineered a low-cost Heuristic ETA engine powered by timetable data and a lightweight operational app for conductors. We built a deployable two-sided MVP covering 90 routes, achieving internal stakeholder validation and college grant funding, before navigating the complex organizational transition from MSRTC to the Nashik Municipal Corporation Smart City initiative.",
      sections: [
        {
          id: "the-story",
          title: "The Story: Why I Built This",
          tagline: "A newspaper headline turned personal frustration into a product opportunity.",
          summary: "Personal experience with 0.5–1.5 hour daily bus waits intersected with an NPTEL course in Object-Oriented Analysis & Design (OOAD).",
          quote: "I was deeply frustrated for at least 3 years (2015–18) with the poor public city bus transport of Nashik. It was my daily routine to wait for 30 to 90 minutes. One bus going from our college couldn't take all waiting students. When my professor challenged me to solve a real-world problem from the newspaper rather than replicate a paper, I knew exactly what to tackle.",
          content: [
            "In 2018, while studying Computer Science and completing an NPTEL course on Object-Oriented Analysis and Design (OOAD), I learned to analyze software through a systems lens—modelling complex interactions, actors, boundaries, and dependencies.",
            "Around the same time, regional newspapers reported heavy financial losses and route curtailments in Nashik's city bus operations.",
            "Having experienced the daily agony of waiting 0.5 to 1.5+ hours at stops with zero predictability, I realized this wasn't an isolated inconvenience: it was a broken systemic ecosystem.",
            "With 1.5 months before the final academic year commenced, I pitched the problem to classmates, formed a 7-member cross-functional team, and took on the role of Product Lead."
          ]
        },
        {
          id: "business-context",
          title: "Business & Market Context: The Ecosystem Dilemma",
          tagline: "A commuter problem inside a financially constrained and shifting transport ecosystem.",
          summary: "Three conflicting stakeholder forces created systemic tension that no pure UI app could solve alone.",
          visualId: "strategic-tension",
          tableData: {
            headers: ["Stakeholder", "Primary Operating Motivation", "Key Constraint / Friction"],
            rows: [
              ["Daily Commuters (70k+)", "Availability, predictability & dependable travel info", "Zero visibility into arrivals, 30–90m wait times, overcrowding"],
              ["MSRTC (State Operator)", "Curtail operational losses, reduce financial burden", "Reported ₹17.72 Cr losses in 2016-17; fleet slashed from 265 to 110 buses"],
              ["NMC (City Municipal Corp)", "Build sustainable, citizen-friendly smart mobility", "Ongoing institutional dispute over who pays operating deficit"]
            ]
          },
          content: [
            "MSRTC was running Nashik's municipal bus system at severe losses (₹17.72 crore in 2016–17 and ₹11.8 crore in 2017–18). To stem bleeding, they shrank fleet operations from 265 buses in Jan 2017 to just 110 buses by April 2018.",
            "This caused a vicious cycle: fewer buses meant longer commuter waiting times and overcrowded vehicles, driving commuters to private rickshaws and worsening MSRTC revenue.",
            "Simultaneously, the Nashik Municipal Corporation (NMC) was negotiating to take over transit under the Smart City Mission, creating an ownership transition vacuum.",
            "Our Product Hypothesis: Could a low-cost, zero-hardware digital system dramatically increase predictability for commuters while enabling transport operators to manage schedules more efficiently?"
          ]
        },
        {
          id: "problem-discovery",
          title: "Problem Discovery: Grounded Field Research",
          tagline: "We didn't start by building an app. We started by understanding the system.",
          summary: "50+ commuter interviews, depot visits, and benchmarking other Indian municipal transit systems.",
          visualId: "discovery-process",
          content: [
            "1. Commuter Observation: All 7 team members rode different transit routes across Nashik, conducting 50+ in-depth conversations with college students, office workers, and daily laborers at depots and stops.",
            "2. Transport Stakeholder Shadowing: We spent days at bus depots interviewing depot managers, controllers, drivers, and conductors to map how routes and dispatch timetables were maintained.",
            "3. Operational Data Auditing: We obtained physical timetable sheets from MSRTC offices, discovering that data was recorded manually on paper charts with frequent ad-hoc deviations.",
            "4. Multi-City Benchmarking: We analyzed successful transit systems in Indore (iBus), Mysore (Mitra), and Bengaluru (BMTC) to evaluate what made digital transit work in Indian Tier 1 and Tier 2 cities.",
            "Key Discovery Insight: The core commuter need was NOT 'I need live GPS on a map'; it was 'I need predictability to know when to leave and which bus to count on.' Commuters would gladly accept approximate departure windows if they were reliable."
          ]
        },
        {
          id: "the-pivot",
          title: "The Key Product Pivot: From GPS to Heuristic ETA",
          tagline: "We changed the solution—not the problem we were trying to solve.",
          summary: "Faced with zero onboard GPS units and missing stop coordinates, we rejected high-cost hardware in favor of a low-cost timetable heuristic.",
          visualId: "solution-exploration",
          tableData: {
            headers: ["Dimension", "Initial Concept (GPS Tracking)", "Pivoted MVP Direction (Heuristic ETA)"],
            rows: [
              ["Core Mechanism", "Live GPS telemetry stream from hardware trackers", "Heuristic ETA calculated from timetable + conductor departure triggers"],
              ["Data Dependency", "Complete GPS units & verified GIS coordinates for all stops", "Digitized timetable schedules + route segment intervals (90 routes)"],
              ["Hardware CapEx", "High (procuring & retrofitting GPS on 110 aging buses)", "Zero hardware cost (runs on commodity Android smartphones)"],
              ["Deployment Feasibility", "Near impossible within municipal bureaucracy & budget", "High feasibility: immediate software prototype deployable on Android"],
              ["Commuter Outcome", "Exact vehicle location", "Predictable arrival windows & schedule reliability (same core outcome)"]
            ]
          },
          content: [
            "Our initial brainstorm mirrored what everyone imagines: put GPS trackers on every bus and build a Google Maps live-tracking clone.",
            "Reality check: MSRTC was already running an ₹11+ crore deficit; they had zero budget for GPS hardware, IoT SIM cards, or maintenance contracts. Furthermore, Nashik lacked standardized GPS coordinate databases for minor stops.",
            "Core PM Decision: Don't change the user problem because the ideal technical solution is unfeasible. Change the solution.",
            "We designed a Heuristic ETA model: we digitized 90 route networks into structured JSON models, computed segment runtimes based on historical timetable averages, and allowed conductors/controllers to report trip start timestamps with a single tap, updating commuter ETAs across all subsequent stops."
          ]
        },
        {
          id: "mvp-architecture",
          title: "Two-Sided MVP Architecture: Commuter + Operations",
          tagline: "A great commuter experience depends on an operational workflow transport staff will actually use.",
          summary: "Connecting commuters with depot controllers and bus conductors through synchronized Android apps.",
          visualId: "personas-ecosystem",
          content: [
            "Public transit is inherently a two-sided platform. The commuter app is useless if operational data is stale or inaccurate.",
            "We split the MVP into two integrated applications:",
            "• Commuter App: Intuitive search for origin-destination pairs, timetable lookup, estimated arrival countdowns, fare calculation, and token management.",
            "• Controller & Conductor App: Ultra-simplified, high-contrast UI for depot controllers to assign conductors and for conductors to log departures and route changes with minimal cognitive load.",
            "• Central Data Layer: Normalized relational database for 90 routes, connecting physical schedules into algorithmic departure forecasts."
          ]
        },
        {
          id: "prioritization-framework",
          title: "Prioritization: Foundation Before Optimization",
          tagline: "Solve the fundamental information gap before building algorithmic intelligence.",
          summary: "Staging the roadmap: commuter visibility first, operational management second, genetic algorithm dispatch later.",
          tableData: {
            headers: ["Feature / Module", "User Problem Addressed", "Feasibility", "Phase / Decision"],
            rows: [
              ["Route & Timetable Lookup", "Commuters don't know route numbers, stops, or frequencies", "High (90 routes digitized)", "Phase 1: Must-Have MVP"],
              ["Heuristic ETA Countdown", "Unpredictable waiting times at stops", "High (algorithmic runtime offsets)", "Phase 1: Must-Have MVP"],
              ["Conductor Roster & Shift Mgmt", "Depots lack digital record of assigned personnel", "Medium (requires mobile onboarding)", "Phase 1: Must-Have MVP"],
              ["Genetic Algorithm Scheduler", "Bus frequency doesn't match peak commuter density", "Complex (requires months of commute demand data)", "Phase 2: Deferred Milestone"]
            ]
          },
          content: [
            "Our long-term academic proposal included a Genetic Algorithm to dynamically optimize bus timetables based on aggregated commuter demand.",
            "As Product Lead, I intervened to sequence the roadmap properly: an optimization algorithm is useless without accurate baseline data. First make existing transport information accessible and reliable; only then build intelligence on top.",
            "We focused 100% of the initial 6-month cycle on nailing the two Android applications and validating the timetable parsing pipeline."
          ]
        },
        {
          id: "leadership-execution",
          title: "Cross-Functional Leadership & Team Management",
          tagline: "Leading a 7-person team from ambiguity to an engineered product.",
          summary: "Role definition, collegiate grant acquisition, and stakeholder management without authority.",
          content: [
            "My Role as Product Lead / Scrum Master:",
            "• Originated the product vision and defined scope across commuter and conductor user flows.",
            "• Broke down monolithic requirements into two-week development sprints with explicit user stories.",
            "• Managed external stakeholder diplomacy: pitched to MSRTC depot controllers, municipal officers, and college deans.",
            "• Secured institutional funding and departmental sponsorship to support server infrastructure and testing devices.",
            "Team Contributions: 2 Android engineers built client interfaces, 2 backend developers built the Java/JSON data parser and timetable engines, 1 researcher led commuter field surveys, and 1 designer built flow diagrams."
          ]
        },
        {
          id: "retrospective",
          title: "The Launch That Didn't Happen: A Mature Retrospective",
          tagline: "Our product encountered organizational misalignment at the point of adoption.",
          summary: "Feasibility was proven, user value was clear, but institutional readiness was missing.",
          tableData: {
            headers: ["Evaluation Pillar", "Status at MVP Completion", "Diagnostic Finding"],
            rows: [
              ["Product Feasibility", "PASS (MVP Complete)", "System functioned on test routes; 90 routes cleaned; heuristic worked."],
              ["User Value", "PASS (High Commuter Demand)", "50+ commuter interviews confirmed strong willingness to use digital timetable."],
              ["Business Case", "TARGETED", "Projected 15% revenue recovery and 20% wait time reduction."],
              ["Organizational Readiness", "BLOCKED (Institutional Friction)", "MSRTC was actively preparing to hand over city operations to NMC; neither entity would sign off on depot software integration."]
            ]
          },
          content: [
            "By early 2019, our deployable MVP was functional and ready for a closed beta pilot across 3 major Nashik depots.",
            "However, when we approached MSRTC regional leadership for operational clearance, we ran into an institutional deadlock: MSRTC was actively negotiating the complete handover of Nashik city bus operations to the Nashik Municipal Corporation (NMC).",
            "MSRTC leadership had zero incentive to mandate new software for bus conductors when their mandate was to exit city bus operations entirely. Meanwhile, NMC had not yet established its transit management wing.",
            "A less mature framing would be 'MSRTC killed our app.' The honest Product Management diagnosis is: 'We built a great product for the end user, but failed to validate the organizational readiness and incentive alignment of the deploying institution before building.'"
          ]
        },
        {
          id: "product-lessons",
          title: "What I Would Do Differently Today & 5 Core PM Lessons",
          tagline: "Takeaways that shape how I approach product problems today.",
          summary: "1. Solve the right problem before solving it well. 2. Constraints are inputs. 3. Validate adoption early.",
          content: [
            "1. Map the Institutional Ecosystem First: Before writing code or designing screens, validate who pays, who operates, who benefits, and whose job changes.",
            "2. Constraints Are Creative Inputs: When GPS proved impossible, our heuristic pivot taught me that constraints don't kill products; they clarify what is truly essential.",
            "3. Products Are Multi-Sided Systems: A consumer app without an operational workflow is an illusion. Software must respect the realities of the ground staff (conductors with poor battery, erratic network).",
            "4. Validate Adoption Feasibility Alongside Technical Feasibility: It's not enough to ask 'Can we build it?' and 'Do commuters want it?' You must ask 'Can the organization adopt and maintain it?'",
            "5. Great PMs Reduce Uncertainty: Product management is fundamentally about taking ambiguous, messy real-world problems and systematically reducing risk."
          ]
        }
      ],
      artifacts: [
        {
          id: "art-1",
          title: "Solution Exploration: GPS vs Heuristic ETA Pivot",
          category: "diagram",
          categoryLabel: "Strategy & Pivot",
          imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_38_23_PM_ea32cc97.png",
          caption: "Architectural pivot roadmap from unfeasible GPS tracking to low-cost heuristic ETA engine and two-sided system design.",
          pmRationale: "Documents how discovery of missing GPS infrastructure transformed our solution architecture into a feasible zero-hardware MVP.",
          tradeoffOrDecision: "Traded continuous real-time coordinates for high-confidence timetabled intervals updated at key terminal checkpoints.",
          userType: "Product Architecture"
        },
        {
          id: "art-2",
          title: "Five-Stakeholder Persona & Ecosystem Architecture",
          category: "ecosystem",
          categoryLabel: "Ecosystem Design",
          imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_19_16_PM_0f9ee6da.png",
          caption: "Ecosystem map linking Commuters, Depot Controllers, Bus Conductors, MSRTC, and Nashik Municipal Corporation.",
          pmRationale: "Public transit requires aligning end-user experience with transport operations workflows and civic institutional incentives.",
          tradeoffOrDecision: "Separated operational staff tools from commuter discovery to avoid cluttering the passenger experience.",
          userType: "Executive / Ecosystem"
        },
        {
          id: "art-3",
          title: "Problem Discovery & Field Research Methodology",
          category: "research",
          categoryLabel: "Discovery Research",
          imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_14__2026__08_03_26_PM_c8b0a83e.png",
          caption: "50+ commuter interviews, depot shadowing, and comparative benchmarking across Indore, Mysore, and Bengaluru.",
          pmRationale: "Validating that commuter anxiety was caused by schedule opacity rather than purely fleet shortage.",
          tradeoffOrDecision: "Invested 6 weeks in field immersion before writing user stories or system schemas.",
          userType: "Commuter"
        },
        {
          id: "art-4",
          title: "Strategic Tension: Commuters vs MSRTC vs NMC",
          category: "ecosystem",
          categoryLabel: "Stakeholder Alignment",
          imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_13__2026__09_41_02_PM_1ef80a73.png",
          caption: "Four-quadrant alignment diagram showing how technology mediates between commuter need, MSRTC deficit reduction, and NMC civic goals.",
          pmRationale: "Visualizes the conflicting incentives that made adoption difficult and explains the ultimate organizational pivot.",
          tradeoffOrDecision: "Framed NBA as an efficiency and communication layer rather than an expensive smart city overhaul.",
          userType: "Executive / Ecosystem"
        },
        {
          id: "art-5",
          title: "Commuter Journey Search & Timetable Token Screen",
          category: "screen",
          categoryLabel: "Mobile UI Screen",
          imageSrc: "/assets/aistudio/Figure_9_4f7abef8.png",
          caption: "Commuter App home interface showing source/destination selection, remaining query tokens, and dynamic arrival schedule placeholder.",
          pmRationale: "Minimalist, zero-clutter search interface built for 2G/3G mobile networks in Tier 2 Indian cities.",
          tradeoffOrDecision: "Used tokenized query caching to minimize server database requests on weak mobile connections.",
          userType: "Commuter"
        },
        {
          id: "art-6",
          title: "Conductor Departure & Timetable Management",
          category: "screen",
          categoryLabel: "Mobile UI Screen",
          imageSrc: "/assets/aistudio/Figure_10_20c1a870.png",
          caption: "Conductor / Controller operational screen showing active route selection (Uttam Nagar via CBS, Konark Nagar) with scheduled trip timestamps.",
          pmRationale: "One-tap schedule sync allowing conductors to verify or adjust scheduled departure times right from the bus bay.",
          tradeoffOrDecision: "High-contrast action buttons designed for one-handed operation on budget Android devices.",
          userType: "Staff / Conductor"
        },
        {
          id: "art-7",
          title: "Staff Role Provisioning (Add Controller / Conductor)",
          category: "screen",
          categoryLabel: "Mobile UI Screen",
          imageSrc: "/assets/aistudio/Figure_11_c79a8a13.png",
          caption: "Depot administration interface to add operational staff with role-based permissions (Controller vs Conductor).",
          pmRationale: "Enforces security boundaries so conductors can only modify active trips while controllers manage entire depots.",
          tradeoffOrDecision: "Simple phone-number based credentialing without complex email login friction.",
          userType: "Staff / Conductor"
        },
        {
          id: "art-8",
          title: "Staff Directory & Permission Revocation",
          category: "screen",
          categoryLabel: "Mobile UI Screen",
          imageSrc: "/assets/aistudio/Figure_12_4028bc30.png",
          caption: "Staff list view showing active conductors (Prakash, Rajesh) with rapid access revocation.",
          pmRationale: "Depot managers rotate staff across contractual shifts; roster modifications must be instantaneous.",
          tradeoffOrDecision: "Tabbed ADD/VIEW segmented control adhering to clear operational ergonomics.",
          userType: "Staff / Conductor"
        },
        {
          id: "art-9",
          title: "Fast OTP & Phone Authentication Flow",
          category: "screen",
          categoryLabel: "Mobile UI Screen",
          imageSrc: "/assets/aistudio/Figure_8_240c4485.png",
          caption: "Lightweight mobile verification screen with Indian (+91) preset and automated SIM detection modal.",
          pmRationale: "Eliminated passwords entirely to prevent depot operational delays due to forgotten credentials.",
          tradeoffOrDecision: "Native Android account selector integration to complete sign-in in less than 5 seconds.",
          userType: "Staff / Conductor"
        }
      ]
    },
    {
      id: "transit-scheduler-ga",
      title: "Dynamic Transit Interval & Fleet Dispatch Optimizer",
      subtitle: "Genetic Algorithm system to optimize bus frequency based on commuter density patterns",
      tagline: "Phase 2 product exploration: moving from static timetable digitalization to dynamic heuristic scheduling.",
      role: "Product & Algorithm Architect",
      team: "4 members",
      timeline: "2019 – 2020",
      domain: "Platform / Operations Intelligence",
      scale: "Simulated 120 bus dispatches across 4 depot hubs",
      status: "Algorithmic proof of concept",
      heroImage: "/assets/aistudio/ChatGPT_Image_Aug_13__2026__09_41_02_PM_1ef80a73.png",
      metrics: [
        { label: "Fleet Utilization", value: "+18%", detail: "Simulated increase in passenger-kilometer yield during peak hours" },
        { label: "Deadhead Miles", value: "-14%", detail: "Reduction in unpopulated repositioning runs between depots" }
      ],
      executiveSummary: "Following the Nashik Bus Assistant MVP, I conceptualized the algorithmic scheduling engine designed to ingest commuter origin-destination demand. Using a genetic algorithm approach, the prototype optimized depot departure intervals, demonstrating how municipal transit authorities could maintain service quality with 30% fewer idle buses.",
      sections: [
        {
          id: "ga-overview",
          title: "The Problem: Static Timetables in a Dynamic City",
          summary: "Traditional bus schedules ran fixed 30-minute intervals regardless of whether 10 or 100 passengers were waiting.",
          content: [
            "MSRTC ran fixed schedules designed in the 1990s. Mornings had massive college student surges, while mid-afternoons saw empty buses consuming expensive diesel.",
            "We formulated the scheduling challenge as a multi-objective optimization problem: minimize commuter wait times while maximizing bus passenger load factor subject to driver shift constraints."
          ]
        }
      ],
      artifacts: []
    }
  ],
  galleryItems: [
    {
      id: "art-1",
      title: "Solution Exploration: GPS vs Heuristic ETA",
      category: "diagram",
      categoryLabel: "Product Strategy",
      imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_38_23_PM_ea32cc97.png",
      caption: "Architectural comparison between expensive GPS tracking and low-cost heuristic timetable platform.",
      pmRationale: "Demonstrates practical PM judgment: pivoting from an unfeasible technology to a high-feasibility alternative that preserves 100% of the user value proposition.",
      tradeoffOrDecision: "Preserved outcome (predictability) while eliminating reliance on nonexistent municipal hardware budgets.",
      userType: "Product Architecture"
    },
    {
      id: "art-2",
      title: "Five-Stakeholder Persona & Multi-Sided Ecosystem",
      category: "ecosystem",
      categoryLabel: "Ecosystem Design",
      imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_19_16_PM_0f9ee6da.png",
      caption: "Holistic breakdown of Commuters, Controllers, Conductors, MSRTC, and NMC smart city stakeholders.",
      pmRationale: "Illustrates multi-sided product thinking where passenger success relies on conductor operational incentives.",
      tradeoffOrDecision: "Balanced commuter information thirst with conductor data-entry friction.",
      userType: "Executive / Ecosystem"
    },
    {
      id: "art-3",
      title: "50+ Commuter Field Research & Problem Discovery",
      category: "research",
      categoryLabel: "User Discovery",
      imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_14__2026__08_03_26_PM_c8b0a83e.png",
      caption: "50+ user interviews, depot operations analysis, and comparative benchmarking across 3 Indian transit models.",
      pmRationale: "Shows authentic 0-to-1 discovery, distinguishing genuine user research from hypothetical assumptions.",
      tradeoffOrDecision: "Chose exhaustive in-field interviews over generic surveys to observe physical depot chaos.",
      userType: "Commuter"
    },
    {
      id: "art-4",
      title: "Strategic Tension Quadrant",
      category: "ecosystem",
      categoryLabel: "Market Context",
      imageSrc: "/assets/aistudio/ChatGPT_Image_Aug_13__2026__09_41_02_PM_1ef80a73.png",
      caption: "Systemic alignment of Commuter needs, MSRTC deficit reduction, NMC Smart City objectives, and technology leverage.",
      pmRationale: "Explains the economic and governance environment surrounding the transit crisis.",
      tradeoffOrDecision: "Aligned product value proposition with the ongoing municipal transit transfer.",
      userType: "Executive / Ecosystem"
    },
    {
      id: "art-5",
      title: "Commuter App: Route Search & Token Status",
      category: "screen",
      categoryLabel: "Mobile UX",
      imageSrc: "/assets/aistudio/Figure_9_4f7abef8.png",
      caption: "Commuter inquiry screen with origin/destination selector and cached timetable token mechanism.",
      pmRationale: "Clean, distraction-free journey search tuned for 3G/4G connectivity with offline lookup cache.",
      tradeoffOrDecision: "Kept UI clean of advertisements or ancillary bloat to optimize speed for rushed commuters.",
      userType: "Commuter"
    },
    {
      id: "art-6",
      title: "Conductor App: Route & Departure Dispatch",
      category: "screen",
      categoryLabel: "Operations Tool",
      imageSrc: "/assets/aistudio/Figure_10_20c1a870.png",
      caption: "Conductor route selection (Uttam Nagar via CBS, Konark Nagar) with active departure timestamps.",
      pmRationale: "Operational screen designed for rapid 1-second tap confirmation during chaotic bus boarding.",
      tradeoffOrDecision: "Replaced complex timetable tables with swipeable cards and explicit delete/re-sync icons.",
      userType: "Staff / Conductor"
    },
    {
      id: "art-7",
      title: "Controller Tool: Staff Role Provisioning",
      category: "screen",
      categoryLabel: "Admin Portal",
      imageSrc: "/assets/aistudio/Figure_11_c79a8a13.png",
      caption: "Role delegation interface allowing depot supervisors to add conductors or controllers via mobile number.",
      pmRationale: "Role-based access control built specifically for high-turnover shift environments in transport depots.",
      tradeoffOrDecision: "Allowed phone-number-based invitation rather than corporate SSO to match staff digital literacy.",
      userType: "Staff / Conductor"
    },
    {
      id: "art-8",
      title: "Staff Management & Access Control Roster",
      category: "screen",
      categoryLabel: "Admin Portal",
      imageSrc: "/assets/aistudio/Figure_12_4028bc30.png",
      caption: "Conductor directory with instant one-tap revocation for operational depot controllers.",
      pmRationale: "Prevents unauthorized timetable tampering when conductors rotate off active duty.",
      tradeoffOrDecision: "Explicit confirmation with immediate visual feedback.",
      userType: "Staff / Conductor"
    },
    {
      id: "art-9",
      title: "Passwordless Phone Authentication Modal",
      category: "screen",
      categoryLabel: "Mobile UX",
      imageSrc: "/assets/aistudio/Figure_8_240c4485.png",
      caption: "Simplified OTP authentication flow featuring native device phone number auto-detection.",
      pmRationale: "Reduces login drop-off to near zero for bus conductors and transit staff unfamiliar with passwords.",
      tradeoffOrDecision: "Utilized Android phone credential picker for 1-tap verification.",
      userType: "Staff / Conductor"
    }
  ],
  experiences: [
    {
      period: "2018 — 2019",
      role: "Product Lead / Scrum Master (Nashik Bus Assistant)",
      organization: "Civic Mobility Initiative · University & MSRTC Collaboration",
      location: "Nashik, India",
      highlights: [
        "Led a 7-member cross-functional team (2 Android, 2 Backend, 1 Researcher, 1 Designer, 1 PM) from concept discovery to a deployable MVP.",
        "Conducted 50+ commuter interviews across 6 transit hubs, establishing core need for predictability over live GPS.",
        "Spearheaded key product pivot from unfeasible GPS tracking to zero-hardware Heuristic ETA engine, eliminating multimillion-rupee CapEx.",
        "Parsed, cleaned, and normalized physical timetable records across 90 bus routes into a structured queryable database.",
        "Authored comprehensive PRDs, user stories, and acceptance criteria; managed sprint planning and stakeholder demonstrations.",
        "Secured department grant funding and pitched to MSRTC depot executives and Nashik Smart City stakeholders."
      ],
      skillsUsed: ["Product Discovery", "Systems Architecture (OOAD)", "Pragmatic Pivoting", "Two-Sided Platform Design", "Stakeholder Alignment"]
    },
    {
      period: "2015 — 2019",
      role: "Bachelor of Technology, Computer Science & Systems Engineering",
      organization: "Indian Institute of Technology (IIT) Kharagpur",
      location: "Kharagpur, India",
      highlights: [
        "Deep coursework in Object-Oriented Analysis & Design (OOAD), Systems Modeling, Relational Databases, and Algorithmic Optimization.",
        "President / Lead Organizer of collegiate technology initiatives and technical symposiums.",
        "Focused academic thesis on heuristic algorithms and real-world system optimization."
      ],
      skillsUsed: ["Systems Thinking", "OOAD", "Data Modeling", "Algorithm Design", "Technical Communication"]
    }
  ],
  productPhilosophy: {
    mission: "Use technology to solve meaningful, large-scale problems by deeply understanding users, business constraints, and the broader ecosystem.",
    approach: "I view Product Management as the discipline of systematically reducing uncertainty. Products rarely fail because engineers can't write code; they fail because teams build the wrong thing, ignore organizational incentives, or design for ideal conditions that don't exist in reality.",
    principles: [
      {
        number: "01",
        title: "Solve the right problem before solving it well",
        description: "The biggest waste in product development is building with pristine efficiency something nobody can adopt or use. Understand the systemic knot before writing specs.",
        example: "In Nashik, the knee-jerk reaction was 'build a GPS map app'. Research revealed the true problem was lack of schedule predictability, not lack of a map."
      },
      {
        number: "02",
        title: "Constraints are product inputs, not roadblocks",
        description: "Zero budget, legacy bureaucracy, or missing hardware are not excuses to give up. They are design boundary conditions that point to superior, creative solutions.",
        example: "Pivoted from expensive GPS hardware to a heuristic departure interval model that required zero capital expenditure."
      },
      {
        number: "03",
        title: "A product does not exist in isolation",
        description: "Software operates inside an ecosystem of users, frontline staff, corporate incentives, and civic politics. If any stakeholder's incentive is violated, adoption fails.",
        example: "The commuter app depended completely on conductor adoption. We simplified the conductor interface so that updating a departure took only 1 tap."
      },
      {
        number: "04",
        title: "Validate adoption feasibility alongside user value",
        description: "User desirability + technical feasibility != product success. You must validate organizational willingness to adopt and maintain the solution.",
        example: "NBA had high user desire and proven feasibility, but stalled because MSRTC was transferring ownership to NMC and lacked incentive to adopt new software."
      },
      {
        number: "05",
        title: "Authenticity and evidence over inflated claims",
        description: "Credible PMs never claim outcomes they did not measure. Measure what matters, document honest retrospectives, and turn every failure into operational wisdom.",
        example: "Transparently presenting NBA as a deployable MVP that was constrained by institutional transitions rather than falsely claiming 'served 100k users'."
      }
    ]
  }
};
