import React from 'react'

const HeroBtn = ({ text, link }) => {
  return (
    
         <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 ">
          <a
            href={link} 
            className="bg-orange-400 text-white px-6 border-2 border-orange-800 py-3 rounded-full font-bold hover:bg-orange-500 hover:scale-110 transition-all"
          >
            {text}
          </a>

        </div>
        
  )
}

export default HeroBtn