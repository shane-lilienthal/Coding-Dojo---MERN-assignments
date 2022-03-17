import { useState } from "react";

const Person = (props) => {

    const [currentAge, setCurrentAge ] = useState(props.age);

    const handler = () => {
        setCurrentAge(currentAge + 1);
    }

    return (
        <div>
            <h2>Name: {props.lastName}, {props.firstName}</h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={() => handler()}>Birthday Button!</button>
            <hr />
        </div>
    );
};

export default Person;