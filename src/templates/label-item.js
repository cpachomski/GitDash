import React from 'react'

export default React.createClass({
  render () {
    const {label} = this.props

    return (
      <li className='label-item'>
        {label.name}
      </li>
    )
  }
})