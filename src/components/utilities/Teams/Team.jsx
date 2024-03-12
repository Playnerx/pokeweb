import MiniCard from "../Cards/MiniCard";

export default function Team() {
    return (
        <div className='homeTeam'>
            <div className='teamContainer mb-16'>
                <a href='#'>
                    <div className='lg:max-w-[600px] sm:max-w-[400px] max-w-[300px] bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[20px] mx-auto'>
                        <div className='p-4'>
                            <p className='text-[20px] font-semibold mb-4 text-center'>Nome Team</p>
                            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:px-10 lg:px-10'>
                                {Array(6).fill(null).map((el, index) => (
                                    <div className="w-full sm:w-auto" key={index}>
                                        <MiniCard></MiniCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}