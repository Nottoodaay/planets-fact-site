import { useState } from "react"

import { Overview } from "./Overview"
import { Structure } from "./Structure"
import { Surface } from "./Surface"

import { GiHamburgerMenu } from "react-icons/gi"
import { Sandwich } from "./Sandwich"
import { PlanetInterface } from "../../dataInterface"

interface MobilePlanetProps{
  currentPlanet: PlanetInterface | undefined
}

export const MobilePlanet = ({currentPlanet}: MobilePlanetProps) => {
  
    const [overview, setOverwiew] = useState<boolean>(true)
    const [structure, setStructure] = useState<boolean>(false)
    const [surface, setSurface] = useState<boolean>(false)
  
    const [sandwich, setSandwich] = useState<boolean>(false)
  
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
    <div className=' text-[#ffff] flex flex-col gap-4 items-center relative
    w-[100vw] h-[100%] md:hidden
    bg-[url("/assets/background-stars.svg")] bg-cover bg-[#070724]
    '>
      <div className=' flex w-[328px] mt-4 justify-between items-baseline' >
            <h1 className=' text-2xl' >THE PLANETS</h1>
            <GiHamburgerMenu size={'24px'} onClick={()=>setSandwich(!sandwich)} />
        </div>

        {
        sandwich ? 
            <Sandwich setToggle={setSandwich} toggle={sandwich} />
          : 
          null
        }

        <div className=' flex w-[100vw] h-[50px] 
        items-center justify-center
        gap-[44px] border-t border-b border-[#ffffff]'>
          <h2 onClick={() => stateComponentChange('overview')} >OVERVIEW</h2>
          <h2 onClick={() =>stateComponentChange('structure')} >STRUCTURE</h2>
          <h2  onClick={() =>stateComponentChange('surface')} >SURFACE</h2>
        </div>
      
        { 
          overview ? 
            <Overview currentPlanet={currentPlanet}/> 
          : 
          structure ? 
            <Structure currentPlanet={currentPlanet} /> 
          :
          surface ? 
            <Surface currentPlanet={currentPlanet} /> 
          : null
        }
        
        <div className=' flex flex-col gap-2 mb-[50px]'>
          <div className=' flex w-[327px] h-[50px] p-4 justify-between items-center 
          border border-[#ffffff]
          ' > 
            <h3 className=' text-[8px]' >ROTATION TIME</h3> 
            <div className=' text-xl uppercase' >{currentPlanet?.rotation}</div>
          </div>
          
          <div className=' flex w-[327px] h-[50px] p-4 justify-between items-center 
          border border-[#ffffff]
          ' > 
            <h3 className=' text-[8px]' >REVOLUTION TIME</h3> 
            <div className=' text-xl uppercase' >{currentPlanet?.revolution}</div>
          </div>

          <div className=' flex w-[327px] h-[50px] p-4 justify-between items-center 
          border border-[#ffffff]
          ' > 
            <h3 className=' text-[8px]' >RADIUS</h3> 
            <div className=' text-xl uppercase' >{currentPlanet?.radius}</div>
          </div>

          <div className=' flex w-[327px] h-[50px] p-4 justify-between items-center 
          border border-[#ffffff]
          ' > 
            <h3 className=' text-[8px]' >AVERAGE TEMP.</h3> 
            <div className=' text-xl uppercase' >{currentPlanet?.temperature}</div>
          </div>
        </div>
    </div>
  )
}
