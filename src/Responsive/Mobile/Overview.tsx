
export const Overview = ({currentPlanet}: any) => {
  return (
    <>
        <img src={currentPlanet?.images.planet} className=' w-[110px] h-[110px]' alt="img" />
      <h2 className=' text-[40px]'>{currentPlanet?.name}</h2>
      <div className='w-[327px]'>{currentPlanet?.overview.content}</div>

      <div>{currentPlanet?.overview.source}</div>

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
    </>
  )
}
