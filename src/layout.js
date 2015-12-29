import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import app from 'ampersand-app'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: "layout",

  render () {
    const {human} = this.props;

    return(
      <div>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Labelr</li>
            <li><a href='/repos'>Repos</a></li>
            <li className='pull-right'><a href='/logout'>Logout</a> { human.login }</li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
});