import React from 'react'

export default React.createClass({

  handleClick (e) {
    e.preventDefault();
    this.props.handleClick();
  },


  render () {
    return (
      <li className={this.props.isActive ? 'active' : null}>
        <a onClick={this.handleClick} href={this.props.url}>
          {this.props.title}
        </a>
      </li>
    )
  }

})