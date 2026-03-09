import { Mail, MapPin, Phone } from 'lucide-react'

import Houston from '../../assets/houston.png'
import Logo from '../../assets/logo.png'
import { LayoutContent } from '../../layout/layout'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 w-full bg-zinc-950/90 py-16 backdrop-blur-sm">
      <LayoutContent className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <h3 className="font-pump text-2xl font-bold text-white">
              PUMP ZONE
            </h3>
            <img src={Logo} alt="logo" className="w-12" />
          </div>
          <p className="max-w-xs text-sm text-zinc-400">
            Seu corpo no próximo nível. Suplementos e produtos de qualidade para
            você alcançar seus objetivos.
          </p>
        </div>

        <div>
          <h4 className="font-pump mb-4 text-sm font-semibold text-white/90">
            Links rápidos
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/explore"
                className="text-zinc-400 transition-colors hover:text-violet-400"
              >
                Explorar produtos
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-zinc-400 transition-colors hover:text-violet-400"
              >
                Entrar
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="text-zinc-400 transition-colors hover:text-violet-400"
              >
                Cadastrar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-pump mb-4 text-sm font-semibold text-white/90">
            Contato
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-zinc-400">
              <Mail className="h-4 w-4 shrink-0 text-violet-400" />
              <span>contato@pumpzone.com.br</span>
            </li>
            <li className="flex items-center gap-2 text-zinc-400">
              <Phone className="h-4 w-4 shrink-0 text-violet-400" />
              <span>(11) 99999-9999</span>
            </li>
            <li className="flex items-center gap-2 text-zinc-400">
              <MapPin className="h-4 w-4 shrink-0 text-violet-400" />
              <span>São Paulo, SP</span>
            </li>
          </ul>
        </div>
      </LayoutContent>

      <LayoutContent className="mt-12 flex flex-col items-center justify-center gap-1 border-t border-white/10 pt-12 sm:flex-row sm:gap-2">
        <span className="text-sm text-zinc-500">
          © {currentYear} Pump Zone. Feito por
        </span>

        <img src={Houston} className="w-24" alt="houston icon" />
      </LayoutContent>
    </footer>
  )
}

export default Footer
