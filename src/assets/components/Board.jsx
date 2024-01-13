import { useState } from "react"

function Square({}){
    const [value,setvalue]=useState(null)
   const handleClick=()=>setvalue('X')
    return <button onClick={handleClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">{value}</button>
}

export default function Board(){
    return (
        <>
        <div className="flex">
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className="flex">
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className="flex">
            <Square/>
            <Square/>
            <Square/>
        </div>
        </>
    )
}