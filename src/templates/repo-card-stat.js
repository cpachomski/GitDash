import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
  mixins: [ampersandMixin],

  render () {
    return(
      <li className='repo-card-stat'>
        <span className='stat-name'>{this.props.name}</span>
        <span className='stat-val'>{this.props.value}</span>
      </li>
    )
  }
})