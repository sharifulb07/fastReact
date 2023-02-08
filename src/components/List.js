import React from "react";

function List(props){
    const numbers=props.numbers;
    const numberList=numbers.map(number=><li key={number.toString()}>{number}</li>);
    return(
        <div>
            <ul>{numberList}</ul>
        </div>
    )
}

export default List;