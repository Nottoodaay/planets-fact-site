
export const Surface = ({currentPlanet}: any) => {
  return (
    <>
      <div className=" flex flex-col items-center relative" >
        <img src={currentPlanet?.images.planet} className=' w-[110px] h-[110px]' alt="img" />
        <img src={currentPlanet?.images.geology} className=' w-[60px] h-[60px] absolute top-[90px] ' alt="alt" />
     </div>  
      
      <h2 className=' text-[40px]'>{currentPlanet?.name}</h2>
      <div className='w-[327px]'>{currentPlanet?.geology.content}</div>

      <div>{currentPlanet?.geology.source}</div>
    </>
  )
}
