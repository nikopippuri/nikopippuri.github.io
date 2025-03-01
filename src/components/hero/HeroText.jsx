import React from 'react'

const HeroText = () => {
  return (
    <div>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-orange-400">
          Hello, I'm <span className="text-white">Niko Pippuri</span>
        </h1>

        <p className="text-lg lg:text-2xl mt-4 text-black">
  I am a passionate <span className="text-orange-400"><b>software developer</b></span> , who loves creating functional applications, and I'm always looking for new challenges.
</p>


    </div>
  )
}

export default HeroText