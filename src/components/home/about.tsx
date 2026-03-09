import kellyImage from '../../assets/kelly-sikkema-ixYNwpnRsGU-unsplash.jpg'
import scottImage from '../../assets/scott-webb-5IsdIqwwNP4-unsplash.jpg'
import { LayoutContent } from '../../layout/layout'

const About = () => {
  return (
    <section className="mt-32 w-full">
      <LayoutContent className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-pump text-3xl font-bold text-white md:text-4xl">
            Sobre a Pump Zone
          </h2>
          <p className="max-w-2xl text-zinc-400">
            Conheça nossa história e o que nos move a oferecer o melhor em
            suplementos e produtos para o seu desempenho.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="relative h-[280px] w-full overflow-hidden rounded-lg">
              <img
                src={kellyImage}
                alt="Ambiente da loja Pump Zone"
                className="h-full w-full object-cover object-center opacity-90"
              />
            </div>
            <div>
              <h3 className="font-pump mb-3 text-xl font-semibold text-white">
                Qualidade e compromisso
              </h3>
              <p className="text-zinc-400">
                Na Pump Zone, selecionamos rigorosamente cada produto para
                garantir que você receba apenas suplementos de alta qualidade.
                Nossa missão é levar seu corpo ao próximo nível com produtos
                confiáveis e resultados reais.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative h-[280px] w-full overflow-hidden rounded-lg">
              <img
                src={scottImage}
                alt="Produtos e suplementos"
                className="h-full w-full object-cover object-center opacity-90"
              />
            </div>
            <div>
              <h3 className="font-pump mb-3 text-xl font-semibold text-white">
                Variedade para cada objetivo
              </h3>
              <p className="text-zinc-400">
                De whey protein a vitaminas e creatina, oferecemos uma linha
                completa para atletas e pessoas que buscam uma vida mais
                saudável. Cada produto é escolhido pensando na sua evolução e no
                seu bem-estar.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-violet-500/20 bg-zinc-950/50 p-8 text-center shadow-[0_0_60px_-15px_rgba(139,92,246,0.2)] backdrop-blur-sm">
          <p className="text-lg text-zinc-300">
            Seu corpo no próximo nível, essa é a nossa promessa. Junte-se à
            família Pump Zone e descubra a diferença que a qualidade pode fazer
            na sua rotina.
          </p>
        </div>
      </LayoutContent>
    </section>
  )
}

export default About
