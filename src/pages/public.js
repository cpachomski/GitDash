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
          <h1>GitDash
            <svg height='5' width='390'>
              <line x1='0' y1='0' x2='390' y2='0' />
            </svg>
          </h1>

        </header>
        <div>
          <p>Maybe you'll finally finish that side project. Maybe you won't <br/></p>


          <a href='/login' className='login-button' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
            <svg height='60' width='300'>
              <rect className='shape' height='60' width='300'/>
              <span className='login-button-text'>
                 <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
              </span>
            </svg>
          </a>
        </div>
      </div>
    )
  }
});

