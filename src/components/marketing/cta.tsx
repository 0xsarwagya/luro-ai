import Link from "next/link"
import Container from "../global/container"
import { Button } from "../ui/button"

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Ready to build your next big idea?
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6 mb-8">
            Join hundreds of startups and SMBs who trust Vestcodes to bring their digital products to life. Let's turn
            your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <Link href="#services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CTA
