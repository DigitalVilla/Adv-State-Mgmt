import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'

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

		if (value) {
			this.props.onSubmit({
				id: uniqueId(),
				packed: false,
				value
			})
			this.setState({ value: '' })
		}
	}

	render() {
		const { value } = this.state

		return (
			<form className="NewItem" onSubmit={this.handleSubmit}>
				<input
					className="NewItem-input"
					type="text"
					value={value}
					onChange={this.handleChange}
				/>
				<input className="NewItem-submit button" type="submit" />
			</form>
		)
	}
}

export default NewItem
