import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import stockIcon from "../assets/products/shopping-cart.png";
import automationIcon from "../assets/products/operation.png";
import resumeIcon from "../assets/products/portfolio.png";
import socialIcon from "../assets/products/social-media.png";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

export const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    period: "monthly",
    tag: "best seller",
    tagType: "Best Seller",
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
    icon: writingIcon,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "one-time",
    tag: "popular",
    tagType: "Popular",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
    icon: designIcon,
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "monthly",
    tag: "new",
    tagType: "New",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    icon: stockIcon,
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    period: "monthly",
    tag: "popular",
    tagType: "Popular",
    features: ["50+ automations", "API access", "Custom workflows"],
    icon: automationIcon,
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters that land interviews.",
    price: 15,
    period: "one-time",
    tag: "new",
    tagType: "New",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
    icon: resumeIcon,
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "monthly",
    tag: "best seller",
    tagType: "Best Seller",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    icon: socialIcon,
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    buttonText: "Get Started Free",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    highlight: false,
  },
  {
    id: 2,
    name: "Pro",
    description: "Best for professionals",
    price: 29,
    buttonText: "Start Pro Trial",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    highlight: true,
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For teams and businesses",
    price: 99,
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    highlight: false,
  },
];

export const stepCards = [
  {
    id: "01",
    title: "Create Account",
    text: "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    id: "02",
    title: "Choose Products",
    text: "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon,
  },
  {
    id: "03",
    title: "Start Creating",
    text: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];
