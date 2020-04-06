import React, { Component } from 'react'
import './Filter.css'

class Filter extends Component {

  handleChange = event => {
    const value = event.target.value
    this.props.onChange(value)
  };

  render() {
    const { searchTerm, title } = this.props
    return (
      <div className="Items-searchTerm">
        <label htmlFor={`filter${title}`}>Filter {title}</label>
        <input
          id={`filter${title}`}
          value={searchTerm}
          onChange={this.handleChange}
          placeholder={"Filter " + title}
        />
      </div>
    );
  }
}

export default Filter;
