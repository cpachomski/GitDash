import React from 'react'

export default React.createClass({

  handleClick (e) {
    e.preventDefault();
    this.props.handleClick();
  },


  render () {
    return (
      <li className={this.props.isActive ? 'active' : null}>
        <a onClick={this.handleClick}>
          {this.props.title}
        </a>
      </li>
    )
  }

})