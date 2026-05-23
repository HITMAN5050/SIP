export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Dr. Rajesh Patel",
    role: "Senior Consultant Cardiologist",
    company: "Apex Heart Institute",
    content: "Between hospital shifts and patient care, I had zero time to manage my earnings. Shreeji Wealth structured a custom portfolio that manages itself, letting me invest confidently while focusing completely on my practice.",
    rating: 5
  },
  {
    id: "2",
    name: "Sneha Iyer",
    role: "VP of Product",
    company: "Fintech Unicorn",
    content: "Being in fintech, I understand risk, but I lacked a long-term personal strategy. Shreeji Wealth's goal-based SIP and tax-saving structures helped me organize my equity holdings, ESOP liquidations, and mutual funds cleanly.",
    rating: 5
  },
  {
    id: "3",
    name: "Vikram Malhotra",
    role: "Co-Founder",
    company: "Nexus Automation",
    content: "We transitioned our business cash flows to treasury funds and set up my family wealth structure with Shreeji. Their focus on asset allocation rather than chase-the-hottest-fund hype is exactly what serious wealth planning needs.",
    rating: 5
  }
];
