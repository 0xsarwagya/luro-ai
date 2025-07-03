import Link from "next/link"
import Container from "../global/container"
import Icons from "../global/icons"
import Wrapper from "../global/wrapper"
import { Button } from "../ui/button"
import { Particles } from "../ui/particles"

const FOOTER_LINKS = [
  {
    title: "Services",
    links: [
      { name: "MVP Development", href: "#services" },
      { name: "AI Integrations", href: "#services" },
      { name: "API Engineering", href: "#services" },
      { name: "DevOps Setup", href: "#services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Startups", href: "#" },
      { name: "SMBs", href: "#" },
      { name: "Restaurants", href: "#" },
      { name: "E-commerce", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "#" },
      { name: "Tech Stack", href: "#" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#" },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="w-full py-10 relative">
      <Container>
        <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
          <Particles className="absolute inset-0 w-full -z-10" quantity={40} ease={10} color="#d4d4d8" refresh />
          <div className="flex flex-col items-start max-w-48">
            <div className="flex items-center gap-2">
              <Icons.icon className="w-5 h-5" />
              <span className="text-xl font-medium">Vestcodes</span>
            </div>
            <p className="text-base max-w mt-4">Vested in your vision. Built to scale.</p>
            <Button className="mt-8">
              <Link href="#contact">Start Your Project</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
            {FOOTER_LINKS?.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h4 className="text-sm font-medium">{section.title}</h4>
                <ul className="space-y-4 w-full">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all w-full"
                    >
                      <Link href={link.href} className="w-full">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper className="pt-10 flex items-center justify-between relative">
          <p className="text-sm text-secondary-foreground">
            &copy; {new Date().getFullYear()} Vestcodes. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="p-1">
              <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="#" className="p-1">
              <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="#" className="p-1">
              <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
          </div>
        </Wrapper>
      </Container>
    </footer>
  )
}

export default Footer
