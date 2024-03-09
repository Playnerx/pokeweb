import React from 'react'
import Card from './utilities/Cards/Card'

export default function TeamPage() {
    return (
        <>
            <p className='text-center mb-4 text-[23px] font-semibold'>Nome Team</p>
            <div className='w-100 py-2 mx-auto flex justify-center items-center bg-white shadow-[0_5px_10px_rgba(0,0,0,.25)] rounded-[12px] mb-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
              {Array(6).fill(null).map((el, index) => (
                <div className="w-full px-2 mb-10" key={index}>
                  <Card></Card>
                </div>
              ))}
            </div>
            </div>
        </>
    )
}
