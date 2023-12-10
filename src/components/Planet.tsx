import { useParams } from 'react-router-dom'
import { useState } from 'react'

import data from '../data.json'
import { Overview } from '../Responsive/Mobile/Overview'

export const Planet = () => {
  const { planet } = useParams()
  const [overview, setOverwiew] = useState<boolean>(true)

  const stateComponentChange = () =>{
    setOverwiew(!overview)
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
        <h2>OVERVIEW</h2>
        <h2 onClick={stateComponentChange} >STRUCTURE</h2>
        <h2>SURFACE</h2>
      </div>
    
      { overview ? 
        <Overview currentPlanet={currentPlanet}/> 
        : null}

    </div>
  )
}
