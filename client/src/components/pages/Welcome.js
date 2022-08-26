import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import jwt from 'jsonwebtoken'

const Welcome = () => {
    const history = useHistory()
    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')


    async function populateQuote(){
        const req = await fetch('http://localhost:5001/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })

        const data = await req.json()
        if(data.status === 'ok'){
            setQuote(data.quote)
        } else {
            alert(data.error)
        }

    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if(!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            } else {
                populateQuote()
            }
        }

    },)

    async function updateQuote(event){
        event.preventDefault()
        const req = await fetch('http://localhost:5001/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
               quote: tempQuote,
            })
        })

        const data = await req.json()
        if(data.status === 'ok'){
            setTempQuote('')
            setQuote(data.quote)
        } else {
            alert(data.error)
        }
    }

    return (
    <div>
        <h1>{quote || "No quote found"}</h1>
        <form onSubmit={updateQuote}>
            <input 
                type="text"
                placeholder="Leave your review!" 
                value={tempQuote} 
                onChange={(e => setTempQuote(e.target.value))}
             />
             <input type="submit" value='Leave a Review' />
        </form>
    </div>
    )
}

export default Welcome