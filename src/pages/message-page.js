import React from 'react'


export default React.createClass({
  displayName: 'MessagePage',

  render () {
    const {title} = this.props

    return (
      <div className='loading-content'>
        <h1> {title}
          <svg height='5' width='390'>
              <line x1='0'  y1='0' x2='390' y2='0'/>
          </svg>
        </h1>
      </div>
    )
  }
})