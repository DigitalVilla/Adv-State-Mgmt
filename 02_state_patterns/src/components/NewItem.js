import React, { Component } from 'react'
import './NewItem.css'

class NewItem extends Component {
	state = { value: '' }

	handleChange = (e) => {
		this.setState({
			value: e.target.value.trim()
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		const {value} = this.state;

		if (value.length) {
			this.props.onSubmit(value)
			this.setState({ value: '' })
		}
	}

	shouldComponentUpdate(prevProps, prevState) {
		return prevState.value !== this.state.value
	}

	render() {
		const { value } = this.state
		console.log("** NewItem");

		return (
			<form className="NewItem" onSubmit={this.handleSubmit}>
				<label className="sr-only" htmlFor="newItemInput">Enter new Item</label>
				<input
					id="newItemInput"
					className="NewItem-input"
					type="text"
					value={value}
					onChange={this.handleChange}
					placeholder="Enter New Item"
				/>
				<label className="sr-only" htmlFor="newItemSubmit">Add Item</label>
				<input id="newItemSubmit" className="NewItem-submit button" value="Add Item" type="submit" />
			</form>
		)
	}
}

export default NewItem