import { useNavigate } from "react-router-dom"

import data from '../../data.json'

interface SandwichProps{
    toggle: boolean,
    setToggle: (value: boolean) => void
}

export const Sandwich = ({toggle, setToggle}:SandwichProps) => {
    const navigate = useNavigate()
    
    const handleClick = (navigateTo : string) =>{
        navigate(`/planets/${navigateTo}`)
        setToggle(!toggle)
    }

  return (
    <div className=" absolute top-16 w-[100vw] h-[100vh] bg-[#070724]" >
        {
        data.map((planet)=>(
            <div key={planet.name} 
            className=" flex h-12 justify-between p-4 
            border-b-2 border-white items-center "
            onClick={()=>handleClick(planet.name)}>
                <div className=" flex items-center gap-3" >
                    <img className=" w-[20px] h-[20px]" src={planet.images.planet} alt="" />
                    <h2>{planet.name.toUpperCase()}</h2>
                </div>
                <div>{'>'}</div>
            </div>
        ))
        }
    </div>
  )
}
