import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [rep, setRep] = useState('')
    const [loads, setLoads] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = { title,rep,loads }
        const response = await fetch('/api/workoutes', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        } 
        if (response.ok) {
         setTitle('')
         setLoads('')
         setRep('')
         setError(null)
         console.log('New Workout added',json)
        }
    }

    return (

        <form className="create" onSubmit={handleSubmit}>
            <h1>Add a Workout</h1>
            <label >Title of Workout</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label >Load in(Kg)</label>
            <input
                type='number'
                onChange={(e) => setLoads(e.target.value)}
                value={loads}
            />
            <label >Repetition in(Number)</label>
            <input
                type='number'
                onChange={(e) => setRep(e.target.value)}
                value={rep}
            />

            <button>Submit Workout</button>
            {error && <div className="error">{error}</div>}
        </form>


    );
}

export default WorkoutForm;