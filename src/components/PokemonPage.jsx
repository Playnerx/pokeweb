import iconLeftArrow from './assets/img/chevron-left-solid.png';
import iconRightArrow from './assets/img/chevron-right-solid.png';
import Card from './utilities/Cards/Card';
import StatsBar from './utilities/StatsBar';

export default function PokemonPage() {

    return (
        <>

            <div className='w-full h-[50px] flex justify-between mt-10 mb-10'>
                <a href="#" className='bg-[black] w-[45%] h-full flex justify-end items-center pr-[100px] block'>
                    <img className='w-[12px] mr-6' src={iconLeftArrow} alt="Left Arrow" />
                    <div>
                        <a className='font-semibold text-[20px] text-[gold] mr-5' href="#">N°0151</a>
                        <span className='font-semibold text-[20px] text-white'>Mew</span>
                    </div>
                </a>
                <a href="#" className='bg-[black] w-[45%] h-full flex justify-start items-center pl-[100px] block'>
                    <div>
                        <span className='font-semibold text-[20px] text-white'>Ivysaur</span>
                        <a className='font-semibold text-[20px] text-[gold] ml-5' href="#">N°0002</a>
                    </div>
                    <img className='w-[12px] ml-6' src={iconRightArrow} alt="Right Arrow" />
                </a>
            </div>

            <div className='w-full flex justify-center'>
                <div className='w-[1000px] h-[100%] mx-auto text-center'>

                    <div className='relative bg-[#B70909] w-[180px] rounded flex justify-center items-center mb-5'>
                        <a href='#' className='block px-3 py-2 text-white text-[16px] font-semibold'>Torna indietro</a>
                        <img className='absolute left-0 w-[12px] ml-4' src={iconLeftArrow} alt="Icon Random" />
                    </div>

                    <p className='text-[18px] text-[orange] font-semibold'>N°0001</p>
                    <p className='text-[50px] my-1 font-semibold'>Bulbasaur</p>
                    <p className='text-[18px] text-[orange] font-semibold mb-10'>Prima Generazione</p>


                    {/* CARD POKEMON */}

                    <div className='w-100 mx-auto mb-8'>
                        <div className='bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] border-b-[2px]  w-full h-[350px] rounded-t-[40px] flex justify-center items-center'>
                            <div>
                                <img className="mx-auto w-[650px] h-full max-w-none pixelated" src="https://github.com/PokeAPI/sprites/blob/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/1.png?raw=true" alt="Bulbasaur" />
                            </div>
                        </div>
                        <div className='w-full h-[100px] bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-b-[40px] flex justify-center items-center flex-col'>
                            <p className='text-center text-[16px] px-16 font-semibold'>Dopo la nascita, per un periodo di tempo cresce assorbento i nutrienti stipati nel bulbo sul dorso.</p>
                        </div>
                    </div>

                    {/* TIPO */}

                    <p className='text-center mb-4 text-[23px] font-semibold'>Tipo</p>
                    <div className='w-100 py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
                        <p className=''>Erba/Veleno</p>
                    </div>

                    {/* ABILITA */}

                    <p className='text-center mb-4 text-[23px] font-semibold'>Abilità</p>
                    <div className='w-100 py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8 space-x-60'>
                        <div className='flex flex-col'>
                            <p className='text-center mb-0 text-[18px] font-semibold'>Abilità base</p>
                            <p className='text-center'>Erbaiuto</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-center mb-0 text-[18px] font-semibold'>Abilità nascosta</p>
                            <p className='text-center'>Clorofilla</p>
                        </div>
                    </div>

                    {/* DATI */}

                    <p className='text-center mb-4 text-[23px] font-semibold'>Dati</p>
                    <div className='w-100 py-4 mx-auto bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
                        <div className='flex justify-center mb-6'>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[18px] font-semibold'>Altezza</p>
                                <p className='text-center'>0,7 m</p>
                            </div>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[18px] font-semibold'>Peso</p>
                                <p className='text-center'>6,9 kg</p>
                            </div>
                        </div>

                        <div className='flex justify-center mb-6'>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[18px] font-semibold'>Sesso</p>
                                <p className='text-center'>Maschio</p>
                                <p className='text-center'>Femmina</p>
                            </div>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[18px] font-semibold'>Gruppo Uova</p>
                                <p className='text-center'>Mostro</p>
                                <p className='text-center'>Erba</p>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div className='w-[50%]'>
                                <p className='text-center mb-0 text-[18px] font-semibold'>Categoria</p>
                                <p className='text-center'>Seme</p>
                            </div>
                            <div className='w-[50%]'>
                            </div>
                        </div>


                    </div>

                    {/* DEBOLEZZE */}

                    <p className='text-center mb-4 text-[23px] font-semibold'>Debolezze</p>
                    <div className='w-100 py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
                        <p className=''>Fuoco Ghiaccio Volante Psico</p>
                    </div>

                    {/* STATISTICHE */}

                    <p className='text-center mb-4 text-[23px] font-semibold'>Statistiche</p>
                    <div className='w-100 py-2 mx-auto items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
                        <div className='my-3 px-20 flex'>
                            <div className='bg-[#0CEB72] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>PS</p>
                            </div>
                            <StatsBar
                                bgcolor="#0CEB72"
                                progress="30"
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-20 flex'>
                            <div className='bg-[#EF8E35] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Attacco</p>
                            </div>
                            <StatsBar
                                bgcolor="#EF8E35"
                                progress="60"
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-20 flex'>
                            <div className='bg-[#ED7954] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Difesa</p>
                            </div>
                            <StatsBar
                                bgcolor="#ED7954"
                                progress="50"
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-20 flex'>
                            <div className='bg-[#1AC1CC] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Att. Sp.</p>
                            </div>
                            <StatsBar
                                bgcolor="#1AC1CC"
                                progress="85"
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-20 flex'>
                            <div className='bg-[#658FCE] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Dif. Sp.</p>
                            </div>
                            <StatsBar
                                bgcolor="#658FCE"
                                progress="95"
                                height={30}
                            />
                        </div>
                        <div className='my-3 px-20 flex'>
                            <div className='bg-[#D46CE5] w-[120px] h-[30px] flex justify-center items-center rounded-[5px] mr-1'>
                                <p className='text-white font-semibold'>Velocità</p>
                            </div>
                            <StatsBar
                                bgcolor="#D46CE5"
                                progress="190"
                                height={30}
                            />
                        </div>
                    </div>

                    {/* LINEA EVOLUTIVA */}

                    <div className='w-100 pb-10 mx-auto bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-16'>
                        <p className='py-5 text-[30px] font-semibold'>Linea Evolutiva</p>

                        <div className='flex justify-between px-20'>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}