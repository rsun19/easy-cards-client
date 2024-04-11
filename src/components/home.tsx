import Navbar from './navbar'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='bg-teal-400 flex flex-col gap-10 justify-center items-center text-white' style={{ height: '95vh' }}>
        <div className='text-4xl'>
          Welcome to Easy Cards
        </div>
        <div className='text-xl'>
          Edit in real time, or make flashcards using generative AI tools!
        </div>
        <a href='/create' className='text-xl cursor-pointer bg-cyan-500 rounded-xl px-5 py-3 z-3'>
          Create a new set today!
        </a>
      </div>
    </>
  )
}

export default Home
