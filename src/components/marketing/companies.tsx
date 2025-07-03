import Marquee from "../ui/marquee"

const Companies = () => {
  return (
    <div className="flex w-full py-20">
      <div className="flex flex-col items-center justify-center text-center w-full py-2">
        <h2 className="text-xl heading">Trusted by startups and powered by</h2>
        <div className="mt-16 w-full relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            <div className="flex gap-8 md:gap-12 items-center">
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">Next.js</div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">
                Supabase
              </div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">Vercel</div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">OpenAI</div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">Stripe</div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">Railway</div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">
                Tailwind
              </div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">
                PostgreSQL
              </div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">
                LangChain
              </div>
              <div className="w-24 h-8 flex items-center justify-center text-muted-foreground font-medium">
                Pinecone
              </div>
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  )
}

export default Companies
