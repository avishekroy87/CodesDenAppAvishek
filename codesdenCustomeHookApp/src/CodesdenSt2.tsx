import {useState} from "react";


export const CodesdenSt2 = () => {
    const [userData, setUserData] = useState(
            [{
                id:1,
                name: "Codesden",
                age: 20,
            },
            {
                id:2,
                name: "Codesden2",
                age: 23,
            }]
    )

    function handleChange() {
        const newUserData = [...userData , {id:3,
            name: "Codesden4",
            age: 2444,}];

        setUserData(newUserData)
    }


    return (
        <div>
            <h2>Codesden St2</h2>
            {userData.map((user) => (
                <span key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.age}</p>
                </span>
            ))}
            <button onClick={handleChange}>Click to Change</button>
        </div>
    );
};