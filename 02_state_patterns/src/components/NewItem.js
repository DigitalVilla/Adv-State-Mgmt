import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'

import './NewItem.css'

class NewItem extends Component {
	state = { value: '' }

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()

		this.props.onSubmit({
			value: this.state.value,
			id: uniqueId(),
			packed: false
		})
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
