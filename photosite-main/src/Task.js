export const Task = (props) => {
    return(
        <div>
        <h1 style = {{color: props.completed ? 'green' : 'black'}}>{props.currtask}</h1>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
        <button onClick={() => props.completeTask(props.id)}> Complete </button>
        </div>
    )  
}