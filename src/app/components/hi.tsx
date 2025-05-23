'use client';
import { useState } from "react"

type Prop={
    name:string
    onClick:(message:string)=>void
}
export default function Hi({name,onClick}:Prop){
    const [friend,setFriend]=useState('george')
    return (
        <div>

        <h1>hello {name}</h1>
        <div>say hi to <input type="text" value={friend} onChange={e=>setFriend(e.target.value)}/></div>
        <button onClick={()=>onClick(friend)}>Click</button>
        </div>
    )
}