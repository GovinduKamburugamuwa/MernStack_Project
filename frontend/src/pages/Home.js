import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch('/api/workoutes/')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorks()
    }, [])

    return (
        <div className="home">
            <div className="workouts-container">
                <h2>Your Workouts</h2>
                <div className="workouts">
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
                </div>
            </div>
            <div className="form-container">
                <WorkoutForm />
            </div>
        </div>
    );
}

export default Home;