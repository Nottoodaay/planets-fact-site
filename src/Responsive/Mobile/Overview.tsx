import { PlanetInterface } from "../../dataInterface"

interface OverviewProps{
  currentPlanet: PlanetInterface | undefined
}

export const Overview = ({currentPlanet}:OverviewProps) => {
  return (
    <>
      <img src={currentPlanet?.images.planet} className=' w-[110px] h-[110px]' alt="img" />
      <h2 className=' text-[40px]'>{currentPlanet?.name}</h2>
      <div className='w-[327px]'>{currentPlanet?.overview.content}</div>

      <div>{currentPlanet?.overview.source}</div>

    </>
  )
}
