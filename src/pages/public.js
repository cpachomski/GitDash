import React from 'react'
import Linker from '../helpers/linker'


export default React.createClass({
  displayName: "public",

  mouseOver () {
    document.body.setAttribute('class', 'hover-active');
  },

  mouseOut () {
    document.body.setAttribute('class', '');
  },

  render () {
    return(
      <div className='public-container'>
        <header role='banner'>
          <h1>Github Labeler</h1>
        </header>
        <div>
          <p>I don't finish these anyway so it doesn't event matter</p>
          <a href='/login' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
          </a>
        </div>
      </div>
    )
  }
});

