import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className='px-16 flex mt-10' >
        <h2 className=' border-r-2 border-black pr-4'><Link to={"/"} style={{textDecoration:"none"}} onClick={()=>localStorage.setItem("path","income")}>Income</Link></h2>
        <h2 className=' border-r-2 border-black px-4'><Link to={"expense"} onClick={()=>localStorage.setItem("path","expense")}>Expense</Link></h2>
        <h2 className='  px-4' ><Link to ={"/visualization"} onClick={()=>localStorage.setItem("path","visualization")}>Visualization</Link></h2>

    </div>
  )
}

export default Navigation