export const Task = (props) => {
    return (<div key={props.id}>
        <h1>{props.name}</h1>
        <h2>{props.id}</h2>
        <button onClick={() => props.removeTask(props)}>x</button>
        <button>v</button>
    </div>)

}