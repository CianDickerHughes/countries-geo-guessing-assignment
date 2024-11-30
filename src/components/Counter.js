import CounterItem from "./CounterItem";

// The Movies
function Counter(props) {
    return (
        <>
            {props.myCounters.map((counter) => (
                <CounterItem
                    mycounter={counter}
                    key={counter._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

  export default Counter;