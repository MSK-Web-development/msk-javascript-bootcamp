import React from 'react';

const Debouncer = (props) => {
    let timeoutID;

    const handleDebounce = (seconds) => {
        clearTimeout(timeoutID);

        timeoutID = setTimeout(() => {
            alert(`Debounced after ${seconds} second(s)`)
        }, seconds * 1000)
    }

    return (<div>
        <div>
            <button onClick={() => { handleDebounce(1) }}>Debounce after 1 second</button>
        </div>
        <div>
            <button onClick={() => { handleDebounce(2) }} >Debounce after 2 second</button>
        </div>
        <div>
            <button onClick={() => { handleDebounce(3) }} >Debounce after 3 second</button>
        </div>
        <div>
            <button onClick={() => { handleDebounce(5) }} >Debounce after 5 second</button>
        </div>
        <div>
            <button onClick={() => { handleDebounce(10) }} >Debounce after 10 second</button>
        </div>

    </div>);
}

export default Debouncer;

