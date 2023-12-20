import { useNavigate } from 'react-router-dom'
import data from '../../data.json'
import { useState } from 'react'

export const Header = () => {
  const [currentPlanet, setCurrentPlanet] = useState<string>('Mercury')

  const navigate = useNavigate()

  const handleClick = (navigateTo: string) =>{
    navigate(`/planets/${navigateTo}`)
    setCurrentPlanet(navigateTo)
  }
    
  return (
    <div className=' flex items-center flex-col border-b
    lg:flex-row lg:w-[100vw] lg:justify-between lg:p-[24px] lg:h-[65px]' >
        <h1 className=' uppercase text-[28px] font-bold' >the Planets</h1>
        
        <div className=' flex gap-[33px]' >
        
      {data.map((planet) => {
          const planetStyle = {
            borderTop: currentPlanet === planet.name ? `4px solid ${planet.color}` : 'none',
          };
      return (
        <div
          onClick={() => handleClick(planet.name)}
          style={planetStyle}
          className="uppercase bold text-sm cursor-pointer lg:text-lg h-16 flex items-center"
          key={planet.name}
        >
          {planet.name}
        </div>
      );
    })}
        </div>
    </div>
  )
}
