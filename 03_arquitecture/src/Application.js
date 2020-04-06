import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';
import calculatePizzas from './lib/calculatePizzas';

const initialState = {
   peopleCount: 10,
   sliceCount: 2,
};
export default class Application extends Component {
   state = { ...initialState };

   updatePeopleCount = event => {
      const peopleCount = parseInt(event.target.value, 10);
      this.setState({ peopleCount });
   };

   updateSliceCount = event => {
      const sliceCount = parseInt(event.target.value, 10);
      this.setState({ sliceCount });
   };

   onReset = event => {
      this.setState({ ...initialState });
   };

   render() {
      const { peopleCount, sliceCount } = this.state;
      const pizzaCount = calculatePizzas(
         peopleCount,
         sliceCount,
      );

      return (
         <PizzaForm
            pizzaCount={pizzaCount}
            peopleCount={peopleCount}
            sliceCount={sliceCount}
            updatePeopleCount={this.updatePeopleCount}
            updateSliceCount={this.updateSliceCount}
            onReset={this.onReset}
         />
      );
   }
}

function PizzaForm(props) {
   return (
      <div className="Application">
         <Title />
         <Input
            label="Number of Guests"
            type="number"
            min={0}
            value={props.peopleCount}
            onChange={props.updatePeopleCount}
         />
         <Input
            label="Slices Per Person"
            type="number"
            min={0}
            value={props.sliceCount}
            onChange={props.updateSliceCount}
         />
         <Result amount={props.pizzaCount} />
         <button className="full-width" onClick={props.onReset}>
            Reset
    </button>
      </div>
   )
}