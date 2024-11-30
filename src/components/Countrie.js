import CountrieItem from "./CountrieItem";

// The Countrie
function Countrie(props) {
    return (
        <>
            {props.myCountrie.map((countrie) => (
                <CountrieItem
                    mycountrie={countrie}
                    key={countrie._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

  export default Countrie;