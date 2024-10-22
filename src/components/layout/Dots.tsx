import React from 'react'

const Dots = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-[url(/black-dot.png)] bg-[length:10px_10px]
    before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/80 before:to-white/80" />
  )
}

export default Dots