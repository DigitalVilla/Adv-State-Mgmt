import React, { Component } from 'react';

export default function Counter(props) {
    return (
        <section className="Counter">
            <h1>Count: {props.counter || 0}</h1>
            <button onClick={props.onClick} className="full-width" data-id="inc">Increment</button>
            <button onClick={props.onClick} className="full-width" data-id="dec">Decrement</button>
            <button onClick={props.onClick} className="full-width" data-id="res">Reset</button>
        </section>
    );
}
