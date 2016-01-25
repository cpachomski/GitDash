import React from 'react'
import LabelItem from './label-item'
import label_section from '../styles/labels-section.styl'


export default React.createClass({

	onAddClick () {
	    this.props.labels.add({
	      name: '',
	      color: '',
	      editing: true,
	      saved: false
	    }, {at: 0})
	},

	render() {

		return (
			<section id='labels-section'>
				<h3>Edit Labels </h3>
	            <ul>
	              { this.props.labels.map((label) => {
	               	return <LabelItem key={label.name} label={label} />
	              })}
	        	</ul>
	            <button onClick={this.onAddClick} className="button">Add New</button>
	        </section>
		)
	}
});	