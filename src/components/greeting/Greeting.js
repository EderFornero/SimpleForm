import React, { useState } from 'react'

function Greeting() {

    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleOnChange = (e) => {
        setName(e.target.value);
    };

    const handleOnSubmit = () => {
        setFullName(name);
    };

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="container">
                    <h1 style={{textAlign: 'center'}}>
                        Welcome !!!
                        {fullName.length > 0 ? (<p style={{color: 'yellow'}}> {fullName} nice to meet you 💛</p>) : null}
                    </h1>
                    <input style={{display: 'block'}} type="text" className="input" placeholder="Enter your name" onChange={handleOnChange} value={name} />
                    <button className="btn" onClick={handleOnSubmit}>Success</button>
                </div>
            </div>
        </>
    )
}

export default Greeting;