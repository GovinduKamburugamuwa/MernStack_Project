import { useEffect, useState } from 'react'
import WorkouDetails from '../components/WorkoutDetails'

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
                    <WorkouDetails key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    );
}
 
export default Home;