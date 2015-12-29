import React from 'react'
import Linker from '../helpers/linker'

export default React.createClass({
  displayName: "public",

  render () {
    return(
      <div className='container'>
        <header role='banner'>
          <h1>Github Labeler</h1>
        </header>
        <div>
          <p>I don't finish these anyway so it doesn't event matter</p>
          <a href='/login' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
          </a>
        </div>
      </div>
    )
  }
});

