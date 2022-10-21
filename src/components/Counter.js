
export function Counter(props) {

    return (
        <div>
            <h1>{props.state}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    )
}