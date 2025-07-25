import Container from "../global/container"
import Marquee from "../ui/marquee"
import { SectionBadge } from "../ui/section-bade"
import Image from "next/image"

const REVIEWS = [
  {
    img: "/placeholder.svg?height=32&width=32",
    name: "Priya Sharma",
    username: "@priyasharma",
    review:
      "Vestcodes built our cafe's ordering system in just 4 weeks. The WhatsApp integration has increased our orders by 40%!",
  },
  {
    img: "/placeholder.svg?height=32&width=32",
    name: "Alex Johnson",
    username: "@alexjohnson",
    review:
      "Their AI chatbot integration transformed our customer support. Response time reduced from hours to seconds.",
  },
  {
    img: "/placeholder.svg?height=32&width=32",
    name: "Rahul Patel",
    username: "@rahulpatel",
    review:
      "From idea to MVP in 6 weeks. The team understood our vision and delivered exactly what we needed to launch.",
  },
  {
    img: "/placeholder.svg?height=32&width=32",
    name: "Sarah Chen",
    username: "@sarahchen",
    review:
      "Professional, fast, and reliable. Our startup's web app is now serving 1000+ users daily thanks to their scalable architecture.",
  },
  {
    img: "/placeholder.svg?height=32&width=32",
    name: "Amit Kumar",
    username: "@amitkumar",
    review:
      "The API integrations they built saved us months of development time. Stripe, WhatsApp, everything works seamlessly.",
  },
  {
    img: "/placeholder.svg?height=32&width=32",
    name: "Emily Rodriguez",
    username: "@emilyrodriguez",
    review:
      "Competitive pricing with global quality. Our EU startup got enterprise-level development at startup-friendly rates.",
  },
]

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2)
const secondRow = REVIEWS.slice(REVIEWS.length / 2)

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <SectionBadge title="Client Success Stories" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Trusted by startups worldwide
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            From Indian SMBs to global startups, we've helped businesses transform their ideas into successful digital
            products.
          </p>
        </div>
      </Container>
      <Container>
        <div className="mt-16 w-full relative overflow-hidden">
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:30s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            <div className="absolute hidden lg:block top-1/4 left-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
            <div className="absolute hidden lg:block top-1/4 right-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const ReviewCard = ({
  img,
  name,
  username,
  review,
}: {
  img: string
  name: string
  username: string
  review: string
}) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-foreground/5 bg-neutral-50/[.05] hover:bg-foreground/10 p-4 transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img || "/placeholder.svg"} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">{name}</figcaption>
          <p className="text-xs font-medium text-foreground/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review}</blockquote>
    </figure>
  )
}

export default Reviews
