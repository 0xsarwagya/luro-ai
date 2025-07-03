"use client"
import { cn } from "@/functions"
import { CheckIcon } from "lucide-react"
import Link from "next/link"
import Container from "../global/container"
import { Button } from "../ui/button"
import NumberTicker from "../ui/number-ticker"
import { SectionBadge } from "../ui/section-bade"

const PACKAGES = [
  {
    id: "starter",
    title: "Starter Package",
    desc: "Perfect for early-stage startups and MVPs",
    price: 2999,
    buttonText: "Get Started",
    features: [
      "MVP Development (4-6 weeks)",
      "Modern tech stack (Next.js, Supabase)",
      "Responsive design",
      "Basic deployment setup",
      "2 weeks post-launch support",
      "Source code ownership",
    ],
  },
  {
    id: "growth",
    title: "Growth Package",
    desc: "For scaling startups and established SMBs",
    price: 5999,
    buttonText: "Scale Your Business",
    features: [
      "Full-stack web application",
      "AI/LLM integrations",
      "Third-party API integrations",
      "Advanced deployment & CI/CD",
      "4 weeks post-launch support",
      "Performance optimization",
      "SEO optimization",
      "Analytics setup",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Package",
    desc: "Custom solutions for complex requirements",
    price: 0,
    buttonText: "Contact Us",
    features: [
      "Custom development timeline",
      "Dedicated development team",
      "Advanced AI/ML integrations",
      "Multi-platform deployment",
      "Ongoing maintenance & support",
      "Priority support",
      "Custom integrations",
      "Scalable architecture",
    ],
  },
]

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <SectionBadge title="Our Packages" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Transparent pricing for every stage
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            From MVP to enterprise solutions. No hidden fees, clear deliverables.
          </p>
        </div>
      </Container>
      <div className="mt-8 w-full relative flex flex-col items-center justify-center">
        <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
        <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
            {PACKAGES.map((pkg, index) => (
              <Package key={index} index={index} {...pkg} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

const Package = ({
  id,
  title,
  desc,
  price,
  buttonText,
  features,
  index,
}: {
  id: string
  title: string
  desc: string
  price: number
  buttonText: string
  features: string[]
  index: number
}) => {
  return (
    <div key={index} className="w-full relative flex flex-col saturate-150 rounded-2xl">
      <div
        className={cn(
          "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
          id === "growth" ? "border-primary/80" : "border-border/60",
        )}
      >
        {id === "growth" && (
          <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
            <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex flex-col p-3 w-full">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm mt-2 text-muted-foreground break-words">{desc}</p>
        </div>
        <hr className="shrink-0 border-none w-full h-px bg-border" role="separator" />
        <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
          <div className="flex items-end gap-2">
            <div className="flex items-end gap-1 w-40">
              <span className="text-3xl md:text-4xl font-bold">
                {price === 0 ? "Custom" : `$${<NumberTicker value={price} />}`}
              </span>
              {price > 0 && <span className="text-lg text-muted-foreground font-medium">project</span>}
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon aria-hidden="true" className="w-5 h-5 text-primary" />
                <p className="text-sm md:text-base text-muted-foreground">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 mt- h-auto flex w-full items-center">
          <Button
            asChild
            variant={id === "growth" ? "default" : "tertiary"}
            className="w-full hover:scale-100 hover:translate-y-0 shadow-none"
          >
            <Link href="#contact">{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
