import { Quote } from 'lucide-react'

import TESTIMONIALS from '../../consts/testimonials-items'
import { CarouselItem, MobileCarousel } from '../../helpers/mobile-carousel'
import { LayoutContent } from '../../layout/layout'

const Testimonials = () => {
  return (
    <section className="mt-32 w-full">
      <LayoutContent className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-pump text-3xl font-bold text-white md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="max-w-2xl text-zinc-400">
            Veja a experiência de quem já faz parte da família Pump Zone
          </p>
        </div>

        <MobileCarousel
          desktopLayout="grid"
          desktopGridCols="md:grid-cols-2 lg:grid-cols-3"
          centerPaddingClass="max-md:pl-[10vw] max-md:pr-[10vw]"
        >
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              minWidth="max-md:min-w-[80vw] max-md:max-w-[80vw]"
            >
              <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-sm transition-colors hover:border-violet-500/30">
                <Quote className="h-10 w-10 shrink-0 text-violet-400/60" />
                <p className="flex-1 text-zinc-300">{testimonial.text}</p>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div>
                  <p className="font-pump font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </MobileCarousel>
      </LayoutContent>
    </section>
  )
}

export default Testimonials
