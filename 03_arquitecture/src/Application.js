import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';
import calculatePizzas from './lib/calculatePizzas';
//FLUX
import PizzaStore from './flux/PizzaStore'
import * as actions from './flux/actions'


class PizzaCalculator extends Component {
   state = PizzaStore.getState() 

   componentDidMount () {
      PizzaStore.on('change', this.updateState)
   }

   componentWillUnmount() {
      PizzaStore.off('change', this.updateState)
   }

   updateState = () => {
      this.setState(PizzaStore.getState())
   }

   updatePeopleCount = event => {
      const peopleCount = parseInt(event.target.value, 10);
      actions.updatePeopleCount(peopleCount)
   };

   updateSliceCount = event => {
      const sliceCount = parseInt(event.target.value, 10);
      actions.updateSliceCount(sliceCount)
   };

   resetCount = event => {
      actions.resetCount()
   };

   render() {
      const { peopleCount, sliceCount } = this.state;
      const pizzaCount = calculatePizzas(
         peopleCount,
         sliceCount,
      );

      return (
         <PizzaForm
            {...this.state}
            pizzaCount={pizzaCount}
            updatePeopleCount={this.updatePeopleCount}
            updateSliceCount={this.updateSliceCount}
            resetCount={this.resetCount}
         />
      );
   }
}

const PizzaForm = (props) => {
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
         <button className="full-width" onClick={props.resetCount}>Reset</button>
      </div>
   )
}

export default class Application extends Component {
   render() {
      return <PizzaCalculator />
   }
}