
export const Structure = ({currentPlanet}: any) => {
  return (
    <>
    <img src={currentPlanet?.images.internal} className=' w-[110px] h-[110px]' alt="img" />
      <h2 className=' text-[40px]'>{currentPlanet?.name}</h2>
      <div className='w-[327px]'>{currentPlanet?.structure.content}</div>

      <div>{currentPlanet?.structure.source}</div>

    </>
  )
}
