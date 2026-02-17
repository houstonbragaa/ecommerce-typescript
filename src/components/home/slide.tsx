import StarIcon from '../../assets/Star.svg'

const Slide = () => {
  return (
    <div className="mb-18 flex h-[60px] w-full items-center justify-center gap-10 border-t border-b border-zinc-400/10">
      <p>Líder de vendas pelo site</p>
      <img src={StarIcon} alt="star" />
      <p>1,000+ compras relaizadas no último mês</p>
      <img src={StarIcon} alt="star" />
      <p>98% de satifação do cliente</p>
    </div>
  )
}

export default Slide
