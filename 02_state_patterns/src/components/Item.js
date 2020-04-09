import React, { Component } from 'react';
import * as actions from '../flux/actions'
import './Item.css';

class Item extends Component {
   constructor(props) {
      super(props)

      this.updated = false
      this.state = {
         value: this.props.item.value
      }
   }

   shouldComponentUpdate(prevProps, prevState) {
      return prevState.value !== this.state.value ||
         prevProps.item.value !== this.props.item.value
   }

   handleOnChange = (evt) => {
      this.setState({ value: evt.target.value })
      this.updated = true
   }

   handleOnBlur = (evt) => {
      const { item } = this.props;
      const value = evt.target.value.trim();

      if (this.updated) {
         if (!value.length) {
            actions.removeItem(item)
         } else if (value !== item.value) {
            actions.updateItem(item, value)
         }
         this.updated = false
      }
   }

   handleCheck = () => actions.toggleItem(this.props.item)
   handleRemove = () => actions.removeItem(this.props.item)

   render() {
      const { item } = this.props;
      // console.log("SINGLE ITEM", item.value);
      
      return (
         <li className="Item">
            <label aria-label={item.value} className="Item-ckeck">
               <input
                  type="checkbox"
                  checked={item.packed}
                  onChange={this.handleCheck}
                  id={item.id}
               />
            </label>
            <label className="Item-name" aria-label={item.value + 'check'}>
               <input
                  type="text"
                  id={item.id}
                  autoComplete="off"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
               />
            </label>
            <button className="Item-remove" onClick={this.handleRemove}>
               Remove
            </button>
         </li>
      );
   }
}

export default Item;