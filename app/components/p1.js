import React from 'react'

function P1() {
  return (
    <div className='bg-red-600 '>
      {/* first page */}
      <div className="relative w-full h-screen">

        <div className="flex h-screen items-center relative">
            <img className="mx-auto absolute top-48 inset-0 object-cover opacity-50" src={"1.png"} alt="background"></img>
            <img src={"s.svg"} className="absolute h-16  "></img>
        </div>

      </div>
    </div>
  )
}

export default P1
