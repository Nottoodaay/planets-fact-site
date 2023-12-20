import { PlanetInterface } from "../../dataInterface"

interface SurfaceProps{
  currentPlanet: PlanetInterface | undefined ,
  stateComponentChange: ( value: string )=> void
}

export const Surface = ({currentPlanet, stateComponentChange}:SurfaceProps) => {
  return (
    <div className=" mb-[70px] mt-[90px] flex flex-col items-center gap-[80px] 
    lg:flex-row lg:gap-[250px]">
    
    <div className=" relative flex justify-center">
      <img className=" w-[290px] h-[290px]" src={currentPlanet?.images.planet} alt="img" />
      <img src={currentPlanet?.images.geology} 
      className=" w-[160px] h-[200px] absolute top-[226px] md:top-[180px] " alt="img" />
    </div>

    <div className=" flex items-center gap-[70px] lg:flex-col">
        <div className="flex flex-col gap-3">
          <h2 className=" text-[48px] font-bold lg:text-[80px]">{currentPlanet?.name}</h2>
          <div className=" w-[340px] text-base lg:w-[350px]" >{currentPlanet?.geology.content}</div>
          
          <div className=" flex">
              <p>source:</p>
              <a href={currentPlanet?.geology.source} className=" font-bold" target="blank">Wikipedia</a>
            </div>
        </div>

      <div className=" flex flex-col gap-4 uppercase" >
        <div className=" w-[280px] h-[40px] lg:w-[350px] lg:h-[48px] 
        flex border items-center p-4 gap-4 cursor-pointer"
        onClick={()=>stateComponentChange('overview')}>
          <p className="font-bold">01</p>
          <h2 className="font-bold" >OVERVIEW</h2>
        </div>
        <div className=" w-[280px] h-[40px] lg:w-[350px] lg:h-[48px] 
        flex border items-center p-4 gap-4 cursor-pointer"
        onClick={()=>stateComponentChange('structure')}>
          <p className="font-bold">02</p>
          <h2 className="font-bold">Internal Structure</h2> 
        </div>
        <div style={{backgroundColor: currentPlanet?.color}} 
        className=" w-[280px] h-[40px] lg:w-[350px] lg:h-[48px]
        flex border items-center p-4 gap-4 cursor-pointer"
        onClick={()=>stateComponentChange('surface')}>
          <p className="font-bold">03</p>
          <h2 className="font-bold">Surface Geology</h2> 
        </div>
      </div>
    </div>
  </div>
  )
}
