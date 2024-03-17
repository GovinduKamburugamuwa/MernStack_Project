const WorkouDetails = ({ workout }) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):{workout.loads}</strong></p>
            <p><strong>Reps :{workout.rep}</strong></p>
        </div>
    );
}

export default WorkouDetails;