import React from 'react'
import EmptyTeam from './utilities/Teams/EmptyTeam'
import Team from './utilities/Teams/Team'

export default function Teams() {
  return (
    <>
    <div className="relative w-100 h-[100px] flex justify-center items-center wallpaperPokedex bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white text-center font-semibold relative">
          <p>Crea il tuo team ideale e scopri quali vantaggi e svantaggi ha!</p>
          </div>
        </div>

    <div className='w-full flex justify-center'>
      <div className='w-[1000px] h-[100%] mx-auto'>
        
        <p className='text-center font-semibold text-[40px] mt-10 mb-10'>I tuoi Team</p>

        <Team></Team>

        <EmptyTeam></EmptyTeam>

        <EmptyTeam></EmptyTeam>

        <EmptyTeam></EmptyTeam>

        <EmptyTeam></EmptyTeam>

      </div>
    </div>
    </>
  )
}
