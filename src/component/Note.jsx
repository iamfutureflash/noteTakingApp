import React from 'react'

function Note(props) {
  return (
    <>
        <div className="note rounded-lg shadow-lg shadow-yellow-300 space-y-1  md:w-[20%] px-4 py-3 mx-4 my-2">
            <h1 className='text-2xl capitalize font-medium'>{props.title}</h1>
            <hr className='rounded-xl border-slate-900 border-2'/>
            <p className='text-lg font-normal'>{props.content}</p>
            <div className='text-end'>
            <button className='bg-yellow-300 text-sm px-4 py-2 rounded-lg mt-4'> ❌</button>
            </div>
        </div>
    </>
  )
}

export default Note