import { Quote } from 'lucide-react'
import { LayoutContent } from '../../layout/layout'

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Atleta amador',
    text: 'Produtos de excelente qualidade e entrega super rápida. O whey da Pump Zone fez toda diferença nos meus treinos. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Ana Paula Silva',
    role: 'Nutricionista',
    text: 'Indico a Pump Zone para meus pacientes. A variedade e a procedência dos suplementos são impecáveis. Uma loja de confiança.',
    rating: 5,
  },
  {
    name: 'Rafael Oliveira',
    role: 'Maratonista',
    text: 'Melhor preço e atendimento que já encontrei. O suporte é atencioso e os produtos chegam sempre dentro do prazo. Nota 10!',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="mt-24 w-full">
      <LayoutContent className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-pump text-3xl font-bold text-white md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="max-w-2xl text-zinc-400">
            Veja a experiência de quem já faz parte da família Pump Zone
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-lg border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-sm transition-colors hover:border-violet-500/30"
            >
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
          ))}
        </div>
      </LayoutContent>
    </section>
  )
}

export default Testimonials
