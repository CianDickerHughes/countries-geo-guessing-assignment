import CountrieItem from "./CountrieItem";

// The Countrie
function Countrie(props) {
    return (
        <>
            {props.myCountrie.map((countrie) => ( // Send Countrie Data to CountrieItem.js
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