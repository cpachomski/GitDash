import React from 'react'
import ReadmeSection from './readme-section'
import LabelSetion from './label-section'


export default React.createClass({
 

  render () {


    return (
      <div className="content">

        {this.props.currentTab === 1 ?
          <ReadmeSection readme={this.props.readme} />
        :null}

        {this.props.currentTab === 2 ?
          <LabelSetion labels={this.props.labels} />
        :null}
      </div>
    )
  }
});