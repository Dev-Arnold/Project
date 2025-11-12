import React from 'react'

const Pot = () => {
  return (
    <div className=' h-[200px] gap-1.5 grid grid-cols-4'>
        <section className=' bg-pink-500'></section>
        <section className=' bg-indigo-500 bg-[url(check.webp)] bg-cover bg-center flex justify-center items-center text-white text-3xl'>
            welcome to react
        </section>
        <section className=' bg-red-500 rounded-[10px]'></section>
        <section className=' bg-green-400'></section>
    </div>
  )
}

export default Pot