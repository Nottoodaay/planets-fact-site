import { useNavigate } from 'react-router-dom'
import data from '../../data.json'

export const Header = () => {

  const navigate = useNavigate()

  const handleClick = (navigateTo: string) =>{
    navigate(`/planets/${navigateTo}`)
  }
    
  return (
    <div className=' flex items-center flex-col border-b
    lg:flex-row lg:w-[100vw] lg:justify-between lg:p-[24px]' >
        <h1 className=' uppercase text-[28px] font-bold' >the Planets</h1>
        <div className=' flex gap-[33px]' >
            {data.map((planet)=>(
                <h2 
                onClick={()=>handleClick(planet.name)}
                className=' uppercase bold text-sm cursor-pointer lg:text-lg hover:border-b hover:border-[#2d68f0]' 
                key={planet.name} >{planet.name}</h2>
            ))}
        </div>
    </div>
  )
}
