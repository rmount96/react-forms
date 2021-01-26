import React, { useState } from 'react';

function WizardForm(props) {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('')
    const [house, setHouse] = useState('')
    return (
        <section>
            <h1>Wizard Form</h1>
            <form>
                <input value={name}
                /* Set the input value to state variable */
                onChange={(e) => {
                    console.log(e.target.value)
                    setName(e.target.value);
                }}

                />
                <br /> 
                <input value={occupation} 
                       onChange={(e) => {
                           console.log(e.target.value);
                           setOccupation(e.target.value)
                       }} 
                />
                <br /> 
                <input value={house} 
                       onChange={(e) => {
                           console.log(e.target.value);
                           setHouse(e.target.value)
                       }} 
                />
            </form>
        </section>
    );
}

export default WizardForm;