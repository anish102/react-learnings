import { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(22);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Luffy");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const setEmploymnent = () => {
        setIsEmployed(!isEmployed);
    }
    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={setEmploymnent}>Employed</button>
    </div>)
}

export default MyComponent;