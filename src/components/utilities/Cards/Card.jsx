export default function Card() {
  return (
    <a href="#" className="block w-[230px] h-[300px] mx-auto">
      <div className='card w-[230px] h-[300px]'>
        <div className='topCard w-100 h-[200px] rounded-t-lg flex justify-center items-center'>
          <div className='bg-center bg-cover'>
            <img className="mx-auto w-[200px] pixelated" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" />
          </div>
        </div>
        <div className='bottomCard w-100 h-[100px] bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-b-lg flex justify-center items-center flex-col'>
          <p className='text-center text-[30px] font-semibold'>Bulbasaur</p>
          <p className='text-center font-semibold'>Erba/Veleno</p>
        </div>
      </div>
    </a>
  )
}