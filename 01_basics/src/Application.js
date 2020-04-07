import React, { Component } from 'react';

import Counter from './Counter';
// import WithCount from './WithCount';
import WithCountProps from './WithCountProps';
// import CounterContainer from './CounterContainer';



// const CounterHOC = WithCount(Counter)

export default class Application extends Component {
  render() {
    return (
      <main className="Application">
        {/* <CounterHOC /> */}
        {/* <CounterContainer /> */}
        <WithCountProps render={
          (counter, handleCalculation) => <Counter onClick={handleCalculation} counter={counter} />
        } />
      </main>
    );
  }
}
