import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
   constructor(props) {
      super(props)

      this.updated = false
      this.state = {
         value: this.props.item.value
      }
   }

   handleOnChange = (evt) => {
      this.setState({ value: evt.target.value })
      this.updated = true
   }

   handleRemove = () => this.props.onRemove(this.props.item.id)

   handleOnBlur = (evt) => {
      const { item, onUpdate, onRemove } = this.props;
      const value = evt.target.value.trim();

      if (this.updated) {
         if (!value.length) {
            onRemove(item.id)
         } else if (value !== item.value) {
            onUpdate(value, item.id)
         }
         this.updated = false
      }
   }

   render() {
      const { item, onRemove, onToggle } = this.props;
      return (
         <article className="Item">
            <label aria-label={item.value}>
               <input
                  type="checkbox"
                  checked={item.packed}
                  onChange={() => onToggle(item.id)}
                  id={item.id}
               />
            </label>
            <label className="Item-name" aria-label={item.value + 'check'}>
               <input
                  type="text"
                  autoComplete="off"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                  id={item.id}
               />
            </label>
            <button className="Item-remove" onClick={this.handleRemove}>
               Remove
            </button>
         </article>
      );
   }
}

export default Item;
