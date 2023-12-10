import { useParams } from 'react-router-dom'
import { useState } from 'react'

import data from '../data.json'
import { Overview } from '../Responsive/Mobile/Overview'
import { Structure } from '../Responsive/Mobile/Structure'
import { Surface } from '../Responsive/Mobile/Surface'

export const Planet = () => {
  const { planet } = useParams()
  
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

  const currentPlanet = data.find((item) => item.name.toLowerCase == planet?.toLowerCase )
  
  return (
    <div className=' text-[#ffff] flex flex-col gap-4 items-center'>
      <div>
          <h1 className=' text-2xl' >THE PLANETS</h1>
      </div>

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
      
      <div className=' flex flex-col gap-2'>
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
