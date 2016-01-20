import React from 'react'
import ReadmeSection from './readme-preview'
import LabelItem from './label-item'

export default React.createClass({
  onAddClick () {
    this.props.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, {at: 0})
  },

  render () {


    return (
      <div className="content">

        {this.props.currentTab === 1 ?
          <section id='readme-section'>
            <ReadmeSection readme={this.props.readme} />
          </section>
        :null}

        {this.props.currentTab === 2 ?
          <section id='labels-section'>
            <p>
              <button onClick={this.onAddClick} className="button">Add New</button>
            </p>
            <ul>
              { this.props.labels.map((label) => {
               return <LabelItem key={label.name} label={label}/>
             })}
            </ul>
          </section>
        :null}
      </div>
    )
  }
});