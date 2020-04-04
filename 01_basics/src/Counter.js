import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        counter: 0
    }

    handleCalculation = (e) => {
        const calc = e.target.getAttribute("data-id");
        this.setState((prevState) => {
            let counter = prevState.counter
            switch (calc) {
                case 'inc':
                    counter += 1
                    break;
                case 'dec':
                    counter -= 1
                    break;
                case 'res':
                    counter = 0
                    break;
            }

            return { counter }
        })
    }

    render() {
        return (
            <section className="Counter">
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleCalculation} className="full-width" data-id="inc">Increment</button>
                <button onClick={this.handleCalculation} className="full-width" data-id="dec">Decrement</button>
                <button onClick={this.handleCalculation} className="full-width" data-id="res">Reset</button>
            </section>
        );
    }
}
