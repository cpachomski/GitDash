import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import app from 'ampersand-app'
import classNames from 'classnames';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: "layout",

  propTypes: {
    human: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired,
  },

  getInitialState () {
    return{
      lastScrollTop: 0,
      scrollingUp: false,
      scrollingDown: false,
    }
  },


  render () {
    const {human} = this.props;

    var logoAnimationClass = classNames({
      'scrolling-up': this.state.scrollingUp,
      'scrolling-down': this.state.scrollingDown
    });


    return(
      <div>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li className={logoAnimationClass}>
              <span>
                GitDash
                <svg>
                  <line x1='0' x2='100%' />
                </svg>
              </span>
            </li>
            <li className='pull-right'>
              <a href='/logout'>Logout</a>
              <svg>
                <line x1='0' x2='100%' />
              </svg>
            </li>
            <li className='pull-right'>
              <a href='/repos'>Repos</a>
              <svg>
                <line x1='0' x2='100%' />
              </svg>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <div className='account-card'>
            { human.login }
            </div>
          {this.props.children}
        </div>
      </div>)
  }
});