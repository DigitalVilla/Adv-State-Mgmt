// Intentionally left blank.
import React, { Component } from 'react';
import Counter from './Counter'

export default class CounterContainer extends Component {
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
        return ( <Counter onClick={this.handleCalculation} counter={this.state.counter} />);
    }
}