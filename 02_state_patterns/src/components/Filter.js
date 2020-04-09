import React, { Component } from 'react'
import './Filter.css'

class Filter extends Component {

  handleChange = event => {
    const value = event.target.value
    this.props.onChange(value)
  };

  shouldComponentUpdate(prevProps) {
    return prevProps.searchTerm !== this.props.searchTerm
  }

  render() {
    const { onClear, searchTerm, title } = this.props
    // console.log('** Filter ', title);
    
    return (
      <div className="Items-searchTerm">
        <label htmlFor={`filter${title}`}>Filter {title}</label>
        <input
          id={`filter${title}`}
          value={searchTerm}
          onChange={this.handleChange}
          placeholder={"Filter " + title}
        />
        <button onClick={onClear} type="button">Clear</button>
      </div>
    );
  }
}

export default Filter;
