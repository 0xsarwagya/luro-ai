"use client"

import Container from "../global/container"
import MagicCard from "../ui/magic-card"
import { Ripple } from "../ui/ripple"
import { SectionBadge } from "../ui/section-bade"
import { Code, Zap, Bot, Settings, Globe, Smartphone } from "lucide-react"

const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Our Services" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            From idea to product <br /> with speed and precision
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            We specialize in building fast, reliable, and scalable digital products using modern technologies and best
            practices.
          </p>
        </div>
      </Container>
      <div className="mt-16 w-full">
        <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
              <MagicCard particles={true} className="flex flex-col items-start size-full bg-primary/[0.08]">
                <div className="bento-card flex items-center justify-center min-h-72">
                  <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                    <Code className="w-20 h-20" />
                  </span>
                  <Ripple />
                </div>
              </MagicCard>
              <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-40 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-heading font-medium heading">MVP Development</h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Launch your startup idea in 4-6 weeks with our rapid MVP development process.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
              <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-52 relative flex items-center justify-center">
                    <Bot className="w-16 h-16 text-primary" />
                    <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading">AI & LLM Integrations</h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Build intelligent chatbots and AI-powered workflows using OpenAI, LangChain, and more.
                    </p>
                  </div>
                </div>
              </MagicCard>
              <div className="grid grid-rows gap-5 lg:gap-5">
                <MagicCard
                  particles={true}
                  className="flex flex-col items-start w-full row-span- row-start-[0.5] h-32 bg-primary/[0.08]"
                >
                  <div className="bento-card w-full relative items-center justify-center">
                    <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <p className="text-base text-muted-foreground text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#BAB3FF_0%,rgba(186,179,255,0)_90.69%)]">
                        We build scalable applications with modern tech stacks. From Next.js frontends to robust APIs,
                        our solutions are designed for growth. DevOps setup included for seamless deployment and
                        monitoring.
                      </p>
                    </div>
                    <div className="w-full h-16 relative flex items-center justify-center">
                      <Settings className="w-8 h-8 text-primary" />
                      <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                </MagicCard>
                <MagicCard
                  particles={true}
                  className="flex flex-col items-start w-full row-start-2 !h-max bg-primary/[0.08]"
                >
                  <div className="bento-card w-full gap-6 relative">
                    <div className="w-full h-48 relative flex items-center justify-center">
                      <Globe className="w-24 h-24 text-primary opacity-80" />
                    </div>
                    <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </MagicCard>
              </div>
              <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                <div className="bento-card w-full flex-row gap-6">
                  <div className="flex flex-col mb-auto">
                    <h4 className="text-xl font-heading font-medium heading">API Engineering</h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Build robust APIs and integrate with third-party services like Stripe, WhatsApp, and more.
                    </p>
                  </div>
                  <div className="w-full h-28 relative flex items-center justify-center">
                    <Settings className="w-12 h-12 text-primary" />
                    <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"></div>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[.40fr_1fr] w-full gap-5 lg:gap-5">
              <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full flex items-center justify-center">
                    <Settings className="w-16 h-16 text-primary" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading">DevOps & CI/CD Setup</h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Automated deployment pipelines and infrastructure setup for scalable applications.
                    </p>
                  </div>
                </div>
              </MagicCard>
              <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-primary" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading">Websites & Internal Tools</h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Custom websites and internal tools for Indian SMBs - cafes, restaurants, and service businesses.
                    </p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Services
