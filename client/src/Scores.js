import React from 'react'

function Scores() {
    const [scoreData, setSD] = useState([])
    const [name, setName] = useState('Jack')
    useEffect(async () => {
        setSD(await fetch(`/hello/${name}`)
        .then(res => res.json()))
    },[])
    return (
        <div>Score:
            {scoreData.map(e => <DataItem score={e.score} name={e.name} key={e.id}/>)}
        </div>
    )
}

export default Scores
