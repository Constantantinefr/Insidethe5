import React, {useState, useEffect} from 'react'

function Score() {
    const [scoreData, setSD] = useState({})
    const [name, setName] = useState('Jack')
    useEffect(async() => {
        setSD(await fetch(`/hello/${name}`))
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Score
    const [scoreData, setSD]