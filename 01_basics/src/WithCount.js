import React, { Component } from 'react';

const WithCount = WrappedComponent => class CounterContainer extends Component {
   static displayName = `WithCount:${WrappedComponent.name || WrappedComponent.displayName}`
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
        return ( <WrappedComponent onClick={this.handleCalculation} counter={this.state.counter} />);
    }
}

export default WithCount