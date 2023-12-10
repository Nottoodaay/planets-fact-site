import { Routes, Route, Navigate } from 'react-router-dom'
import { Planet } from '../components/Planet'


export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/planets/mercury" replace />} />
      <Route path='/planets/:planet' element={<Planet/>} />
    </Routes>
  )
}
