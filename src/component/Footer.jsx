import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='text-center bg-yellow-400 sticky top-full '>
    <div className="copyright px-4 py-4">copyright @ &copy; {year}</div>
    </div>
  )
}

export default Footer