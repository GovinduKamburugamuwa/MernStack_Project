import { useEffect, useState } from 'react'
import WorkouDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

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
            <WorkoutForm/>
        </div>
    );
}
 
export default Home;