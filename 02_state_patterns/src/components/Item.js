import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    const { item, onRemove, onCheckOff } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onCheckOff(item.id)}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
