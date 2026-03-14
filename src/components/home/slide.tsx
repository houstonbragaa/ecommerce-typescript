import StarIcon from '../../assets/Star.svg'

const Slide = () => {
  return (
    <div className="mb-34 flex h-[60px] w-full flex-col items-center justify-center gap-10 border-t border-b border-violet-500/20 bg-linear-to-r from-transparent via-violet-950/10 to-transparent shadow-[inset_0_0_40px_rgba(139,92,246,0.05)] sm:mb-18 sm:flex-row">
      <p>Líder de vendas pelo site</p>
      <img src={StarIcon} alt="star" />
      <p>1,000+ compras relaizadas no último mês</p>
      <img src={StarIcon} alt="star" />
      <p>98% de satifação do cliente</p>
    </div>
  )
}

export default Slide
