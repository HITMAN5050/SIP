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
    title: "SIP Planning",
    shortDesc: "Cultivate consistent savings and harness the compound interest effect through automated Systematic Investment Plans.",
    fullDesc: "Systematic Investment Plans (SIP) allow you to invest a fixed amount regularly in mutual funds. It helps average out purchasing costs (rupee cost averaging) and instills financial discipline without having to time the market.",
    iconName: "TrendingUp",
    benefits: [
      "Instills disciplined monthly savings habit",
      "Rupee cost averaging mitigates market volatility",
      "Power of compounding generates exponential long-term wealth",
      "Highly flexible - start, stop or top-up at any time"
    ],
    processSteps: [
      "Assess risk profile and define monthly budget",
      "Identify the best-performing mutual funds matching your goals",
      "Configure automated direct bank mandates for hassle-free investing",
      "Regular portfolio review and annual top-ups"
    ],
    suitableFor: [
      "Salaried professionals aiming for systematic savings",
      "First-time investors seeking lower-risk entry into equities",
      "Long-term goal builders (e.g. buying a home, starting a business)"
    ]
  },
  {
    id: "mutual-funds",
    title: "Mutual Fund Advisory",
    shortDesc: "Diversify your wealth across curated asset classes guided by our research and market risk models.",
    fullDesc: "Access professionally managed equity, debt, and hybrid mutual fund portfolios tailored specifically to your financial objectives. Our scientific selection process filters funds based on risk-adjusted ratios, manager pedigree, and consistency.",
    iconName: "Layers",
    benefits: [
      "Instant diversification across equity and debt markets",
      "Professional fund managers tracking underlying assets",
      "High liquidity - redeem funds whenever required",
      "Strict regulatory oversight by SEBI ensuring compliance"
    ],
    processSteps: [
      "Evaluate asset allocation needs based on time horizon",
      "Conduct quantitative and qualitative screening of mutual funds",
      "Execute lump-sum or staggered strategic allocations",
      "Periodic rebalancing to maintain target asset ratios"
    ],
    suitableFor: [
      "Investors looking to outperform traditional fixed deposits",
      "Individuals wanting exposure to corporate growth without picking stocks",
      "Families seeking balanced wealth expansion over 3 to 7+ years"
    ]
  },
  {
    id: "retirement",
    title: "Retirement Planning",
    shortDesc: "Secure your financial freedom and maintain your lifestyle during your post-work golden years.",
    fullDesc: "Build a robust retirement corpus designed to fight inflation and generate stable pension payouts. We analyze your current expenses, expected inflation, and life expectancy to create an bulletproof retirement map.",
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
    fullDesc: "Higher education costs are rising at double the inflation rate. Our specialized child education portfolios utilize diversified compounding assets to match college fee cycles, both in India and abroad.",
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
      "Families aiming to fund international education budgets in USD/GBP",
      "Grandparents looking to gift wealth for grandchildren's careers"
    ]
  },
  {
    id: "tax-saving",
    title: "Tax Saving Investments",
    shortDesc: "Maximize legal tax deductions under Section 80C and beyond while building wealth.",
    fullDesc: "Optimize your tax liabilities using Equity Linked Savings Schemes (ELSS), NPS, and other tax-efficient investment products. We help you select routes that offer both immediate tax deductions and wealth creation potential.",
    iconName: "Percent",
    benefits: [
      "Lowest lock-in period (3 years for ELSS) compared to PPF/FD",
      "Dual benefit of equity returns + income tax deductions",
      "Substantially higher historical returns than traditional tax schemes",
      "Tax-exempt or highly subsidized withdrawals"
    ],
    processSteps: [
      "Analyze tax brackets under new vs old tax regimes",
      "Identify gaps in current 80C/80D/80CCD investments",
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
    title: "Insurance Guidance",
    shortDesc: "Protect your family's financial stability from unforeseen life and health events.",
    fullDesc: "Insurance is the foundation of financial planning. We help you choose low-cost, pure-protection term insurance policies and comprehensive family-floater health insurance plans, keeping investment and protection strictly separated.",
    iconName: "Coins",
    benefits: [
      "Separates protection from investment for maximum cost efficiency",
      "High sum assured at nominal premium prices",
      "Protects wealth portfolios from being liquidated due to medical crises",
      "Tax exemptions on premiums under Sec 80C & 80D"
    ],
    processSteps: [
      "Calculate human life value (HLV) to determine required term cover",
      "Compare claim settlement ratios and features across top insurers",
      "Select critical illness and top-up health insurance packages",
      "Assist during annual claims, updates, and policy renewals"
    ],
    suitableFor: [
      "Breadwinners with dependent parents, spouse, or children",
      "Individuals with active home loans or liabilities",
      "Families seeking robust health covers beyond standard employer policies"
    ]
  }
];
