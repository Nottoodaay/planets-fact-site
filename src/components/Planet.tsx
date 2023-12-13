import { useParams } from 'react-router-dom'

import data from '../data.json'
import { MobilePlanet } from '../Responsive/Mobile/MobilePlanet'

export const Planet = () => {
  const { planet } = useParams()
  const currentPlanet = data.find((item) => item.name.toLowerCase() === planet?.toLowerCase())

  
  return (
    <div>
      <MobilePlanet currentPlanet={currentPlanet} />
    </div>
  )
}
