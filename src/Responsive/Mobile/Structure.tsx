import { PlanetInterface } from "../../dataInterface"

interface StructureProps{
  currentPlanet: PlanetInterface | undefined
}

export const Structure = ({currentPlanet}: StructureProps) => {
  return (
    <>
    <img src={currentPlanet?.images.internal} className=' w-[110px] h-[110px]' alt="img" />
      <h2 className=' text-[40px]'>{currentPlanet?.name}</h2>
      <div className='w-[327px]'>{currentPlanet?.structure.content}</div>

      <div className=" w-[200px]" >{currentPlanet?.structure.source}</div>

    </>
  )
}
