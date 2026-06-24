export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: "TrendingUp" | "Layers" | "ShieldAlert" | "GraduationCap" | "Percent" | "Coins";
  benefits: string[];
  processSteps: string[];
  suitableFor: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "sip",
    title: "Systematic Investment Plan (SIP)",
    shortDesc: "Cultivate consistent savings and harness the compound interest effect through automated Systematic Investment Plans.",
    fullDesc: "A Systematic Investment Plan (SIP) simplifies wealth creation. By investing a fixed amount regularly in mutual funds, you ignore market hype, capture lower pricing cycles automatically through rupee cost averaging, and build long-term generational wealth. We also provide SWP (Systematic Withdrawal Plan) and STP (Systematic Transfer Plan) planning for optimal cash flow management.",
    iconName: "TrendingUp",
    benefits: [
      "Instills disciplined monthly savings habit",
      "Rupee cost averaging mitigates market volatility",
      "Power of compounding generates exponential long-term wealth",
      "Highly flexible - start, stop, or top-up at any time",
      "Goal-based investment matching specific life milestones"
    ],
    processSteps: [
      "Assess risk profile and define monthly investment budget",
      "Identify the best-performing mutual funds matching your goals",
      "Configure automated direct bank mandates for hassle-free investing",
      "Regular portfolio review and annual top-ups"
    ],
    suitableFor: [
      "Salaried professionals aiming for systematic savings",
      "First-time investors seeking lower-risk entry into equities",
      "Long-term goal builders (e.g. buying a home, retirement, children's future)"
    ]
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds & Portfolio Solutions",
    shortDesc: "Diversify your wealth across equity, debt, hybrid mutual funds, and custom PMS portfolios.",
    fullDesc: "Access professionally managed mutual fund portfolios tailored specifically to your financial objectives. Our selection process covers Equity PMS, Mutual Fund PMS (MARS), Fixed Deposits, Bonds of PSU Banks, Capital Gain Bonds, RBI Bonds, Loan against Mutual Funds, Direct Equity, and IPO investments.",
    iconName: "Layers",
    benefits: [
      "Instant diversification across equity and debt markets",
      "Professional fund managers tracking underlying assets",
      "Access to premium investment avenues (PMS, PSU/RBI Bonds)",
      "High liquidity - redeem funds whenever required",
      "Loan against Mutual Funds available to handle urgent liquidity needs"
    ],
    processSteps: [
      "Evaluate asset allocation needs based on time horizon",
      "Conduct quantitative and qualitative screening of mutual funds and PMS",
      "Execute lump-sum or staggered strategic allocations",
      "Periodic portfolio review & rebalancing to maintain target ratios"
    ],
    suitableFor: [
      "Investors looking to outperform traditional fixed deposits",
      "Individuals seeking exposure to corporate growth without picking stocks",
      "Families and businesses seeking balanced wealth expansion over 3 to 7+ years"
    ]
  },
  {
    id: "retirement",
    title: "Retirement Planning",
    shortDesc: "Secure your financial freedom and maintain your lifestyle during your post-work golden years.",
    fullDesc: "Build a robust retirement corpus designed to fight inflation and generate stable pension payouts. We analyze your current expenses, expected inflation, and life expectancy to create an inflation-proof retirement plan using SWP, STP, and NPS (National Pension System).",
    iconName: "ShieldAlert",
    benefits: [
      "Ensure inflation-proof post-retirement monthly cash flow",
      "Zero dependency on external family members or debt",
      "Protect your life savings from medical emergencies",
      "Tax-efficient withdrawal strategies in retirement"
    ],
    processSteps: [
      "Calculate your retirement corpus target using expected inflation",
      "Deploy tax-efficient equity-to-debt transition plans",
      "Establish secure annuity and monthly income plans (SWP)",
      "Continuously adjust allocations based on changing interest rates"
    ],
    suitableFor: [
      "Working professionals in their 30s and 40s starting early",
      "Individuals close to retirement seeking safe corpus transition",
      "Business owners planning to exit their business securely"
    ]
  },
  {
    id: "child-education",
    title: "Child Education Planning",
    shortDesc: "Invest early to ensure your children can pursue their dreams at top global institutions.",
    fullDesc: "Higher education costs are rising at double the inflation rate. Our specialized child education portfolios utilize diversified compounding assets to match college fee cycles, both in India and abroad, ensuring that their future is fully secured.",
    iconName: "GraduationCap",
    benefits: [
      "Build a dedicated fund insulated from general household expenses",
      "Counter foreign exchange fluctuations for global degrees",
      "Peace of mind knowing educational milestones are fully funded",
      "Insurance-backed investment clauses to safeguard kids' future"
    ],
    processSteps: [
      "Estimate future cost of undergraduate and postgraduate courses",
      "Select high-growth equity assets for early stages (under age 12)",
      "Systematically move funds to debt instruments as the college admission date nears",
      "Timely disbursements during admission cycles"
    ],
    suitableFor: [
      "Parents of young kids planning for premium education milestones",
      "Families aiming to fund international education budgets",
      "Grandparents looking to gift wealth for grandchildren's careers"
    ]
  },
  {
    id: "tax-saving",
    title: "Tax Saving Strategies & Financial Services",
    shortDesc: "Maximize legal tax deductions while building wealth through goal-based financial planning.",
    fullDesc: "Optimize your tax liabilities using Equity Linked Savings Schemes (ELSS), NPS, and other tax-efficient investment products. We help you design goal-based financial planning, tax saving strategies, risk assessments, and offer financial consultations with full online service support.",
    iconName: "Percent",
    benefits: [
      "Lowest lock-in period (3 years for ELSS) compared to PPF/FD",
      "Dual benefit of equity returns + income tax deductions",
      "Tax-efficient wealth accumulation and withdrawals",
      "Professional risk assessment and regular investment reviews",
      "Dedicated online investment & service support"
    ],
    processSteps: [
      "Analyze tax brackets under new vs old tax regimes",
      "Identify gaps in current Section 80C/80D/80CCD investments",
      "Allocate to top-performing ELSS and National Pension Schemes",
      "Automate tax-season investments to avoid last-minute liquidity crunches"
    ],
    suitableFor: [
      "Salaried individuals seeking to lower TDS deductions",
      "Taxpayers who haven't fully utilized their Section 80C limits",
      "High-income earners wanting to save taxes through NPS additions"
    ]
  },
  {
    id: "insurance",
    title: "Insurance Solutions",
    shortDesc: "Protect your family's financial stability and valuable assets from unforeseen life and health events.",
    fullDesc: "Insurance is the foundation of financial planning and wealth protection. We help you select and manage Life Insurance, Health Insurance (Family Health Plans, Mediclaim Policies), Term Insurance, Motor Insurance, Home Insurance, Travel Insurance, Commercial & Business Insurance, and Personal Accident Insurance.",
    iconName: "Coins",
    benefits: [
      "Safeguard yourself, your family, and assets against unforeseen risks",
      "Protects wealth portfolios from being liquidated due to medical crises",
      "High sum assured at nominal premium prices via pure term insurance",
      "Tax exemptions on premiums under Sec 80C & 80D",
      "Complete commercial & business insurance for business owners"
    ],
    processSteps: [
      "Perform thorough insurance need assessment and risk assessment",
      "Compare claim settlement ratios and features across top insurers",
      "Structure ideal health, life, and asset protection policies",
      "Assist during annual claims, updates, and policy renewals"
    ],
    suitableFor: [
      "Breadwinners with dependent parents, spouse, or children",
      "Individuals with active home loans or commercial business liabilities",
      "Families seeking robust health covers beyond standard employer policies"
    ]
  }
];
