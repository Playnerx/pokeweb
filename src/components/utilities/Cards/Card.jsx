export default function Card() {
  return (
    <a href="#">
        <div className='card w-[230px] h-[300px] mx-auto'>
            <div className='topCard w-100 h-[200px] rounded-t-lg flex justify-center items-center'>
              <div className='bg-center bg-cover'>
                <img className="mx-auto w-[330px] h-full max-w-none" src="https://github.com/PokeAPI/sprites/blob/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/1.png?raw=true" />
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
