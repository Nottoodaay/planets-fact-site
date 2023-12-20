import { useState } from "react"
import { PlanetInterface } from "../../dataInterface"
import { Header } from "./Header"
import { Overview } from "./Overview"
import { Structure } from "./Structure"
import { Surface } from "./Surface"

interface DesktopPlanetProps{
    currentPlanet: PlanetInterface | undefined
}

export const DesktopPlanet = ({currentPlanet}:DesktopPlanetProps) => {
  const [overview, setOverwiew] = useState<boolean>(true)
  const [structure, setStructure] = useState<boolean>(false)
  const [surface, setSurface] = useState<boolean>(false)

  const stateComponentChange = (stateName: string) =>{
    if(stateName === 'overview' ){
      setOverwiew(true)
      setStructure(false)
      setSurface(false)
    }
    if(stateName === 'structure'){
      setOverwiew(false)
      setStructure(true)
      setSurface(false)
    }
    if(stateName === 'surface'){
      setOverwiew(false)
      setStructure(false)
      setSurface(true)
    } 
  }

  return (
    <div className=' w-[100%] h-[100vh] pb-[70px] flex-col text-white items-center 
    bg-[url("/assets/background-stars.svg")] bg-cover bg-[#070724] hidden md:flex overflow-x-hidden' >
      
      <Header/>
      
      {
        overview ? <Overview currentPlanet={currentPlanet} stateComponentChange={stateComponentChange} /> 
        : structure ? <Structure currentPlanet={currentPlanet} stateComponentChange={stateComponentChange} />
        : surface ? <Surface currentPlanet={currentPlanet} stateComponentChange={stateComponentChange} /> 
        : null
      }

        <div className=" flex gap-3 lg:gap-[30px]">
          <div className=" w-[164px] h-[88px] border border-white flex flex-col p-4
            lg:w-[254px] lg:h-[128px] lg:gap-1" >
            <h2 className=" uppercase text-xs bold opacity-50 lg:text-base" >Rotation Time</h2>
            <div className=" uppercase text-xl lg:text-[30px]" >{currentPlanet?.rotation}</div>
          </div>

          <div className=" w-[164px] h-[88px] border border-white flex flex-col p-4
            lg:w-[254px] lg:h-[128px] lg:gap-1" >
            <h2 className=" uppercase text-xs bold opacity-50 lg:text-base" >Revolution Time</h2>
            <div className=" uppercase text-xl lg:text-[30px]" >{currentPlanet?.revolution}</div>
          </div>

          <div className=" w-[164px] h-[88px] border border-white flex flex-col p-4 
            lg:w-[254px] lg:h-[128px] lg:gap-1" >
            <h2 className=" uppercase text-xs bold opacity-50 lg:text-base" >radius</h2>
            <div className=" uppercase text-xl lg:text-[30px]" >{currentPlanet?.radius}</div>
          </div>

          <div className=" w-[164px] h-[88px] border border-white flex flex-col p-4 
           lg:w-[254px] lg:h-[128px] lg:gap-1" >
            <h2 className=" uppercase text-xs bold opacity-50 lg:text-base" >average tepm</h2>
            <div className=" uppercase text-xl lg:text-[30px]" >{currentPlanet?.temperature}</div>
          </div>
        </div>
    </div>
  )
}
