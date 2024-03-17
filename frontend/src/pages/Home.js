import { useEffect, useState } from 'react'

const Home = () => {

    const[workouts,setWorkouts] = useState(null)
 
useEffect(()=>
{
    const fetchWorks = async()=>
    {
        const response = await fetch('/api/workoutes/')
        const json = await response.json()
        
        if(response.ok)
        {
           setWorkouts(json)
        }
    }

    fetchWorks()
},[])

    return (  
        <div>
            <div className="workouts">
                {workouts&&workouts.map((workout)=>(
                    <p key={workout._id}>{workout.title}</p>
                ))}
            </div>
        </div>
    );
}
 
export default Home;