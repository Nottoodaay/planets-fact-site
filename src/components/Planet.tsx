import { useParams } from 'react-router-dom'

import data from '../data.json'
import { MobilePlanet } from '../Responsive/Mobile/MobilePlanet'
import { PlanetInterface } from '../dataInterface'
import { DesktopPlanet } from '../Responsive/Desktop/DesktopPlanet'

export const Planet = () => {
  const { planet } = useParams()
  const currentPlanet: PlanetInterface | undefined = data.find((item) => item.name.toLowerCase() === planet?.toLowerCase())

  
  return (
    <div className=''>
      <MobilePlanet currentPlanet={currentPlanet} />
      
      <DesktopPlanet currentPlanet={currentPlanet}  />
    </div>
  )
}
