interface LightConfig {
  top: string
  className: string
}

const PURPLE_LIGHTS: LightConfig[] = [
  {
    top: '15vh',
    className: '-left-40 h-[350px] w-[350px] bg-violet-600/14',
  },
  {
    top: '35vh',
    className: '-right-40 h-[300px] w-[300px] bg-purple-600/10',
  },
  {
    top: '55vh',
    className: 'left-1/2 h-[280px] w-[450px] -translate-x-1/2 bg-fuchsia-500/7',
  },
  {
    top: '75vh',
    className: 'right-[5%] h-[220px] w-[220px] bg-violet-500/10',
  },
  {
    top: '65vh',
    className: 'left-[8%] h-[180px] w-[180px] bg-purple-400/7',
  },
  {
    top: '120vh',
    className: '-left-32 h-[250px] w-[250px] bg-violet-700/11',
  },
  {
    top: '180vh',
    className: '-right-32 h-[200px] w-[200px] bg-purple-500/17',
  },
  {
    top: '240vh',
    className: 'left-[20%] h-[220px] w-[220px] bg-violet-400/4',
  },
  {
    top: '300vh',
    className: 'right-[25%] h-[190px] w-[190px] bg-purple-600/7',
  },
]

const PurpleLights = () => {
  return (
    <>
      {PURPLE_LIGHTS.map((light, index) => (
        <div
          key={index}
          className={`purple-light-orb fixed ${light.className}`}
          style={{ top: light.top }}
          aria-hidden
        />
      ))}
    </>
  )
}

export default PurpleLights
