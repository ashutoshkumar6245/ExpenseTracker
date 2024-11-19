import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' flex justify-between border-b-4 px-16  h-[3.125rem]'>
        <div className='text-3xl py-2'>
          <Link to="/" style={{textDecoration:"none"}}>Expense Tracker</Link> 
        </div>
        <div className='flex justify-between gap-10 py-4  content-center'>
            <div>
                Ashutosh Kumar
            </div>
            <div>
                 A
            </div>
        </div>
    </div>
  )
}

export default Header