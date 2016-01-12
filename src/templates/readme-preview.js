import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import base64 from 'base-64'
import utf8 from 'utf8'


export default React.createClass({
  mixins: [ampersandMixin],

  componentDidMount () {

  },

  render () {
    const {readme} = this.props

    return (
      <div className="readme-content">
        <p> yo {atob(readme.content)}</p>
      </div>
    )

  }

});
