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
          <h1>GitDash</h1>
        </header>
        <div>
          <p>Maybe you'll finally finish that side project. You probably won't</p>
          <a href='/login' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
          </a>
        </div>
      </div>
    )
  }
});

