import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import utf8 from 'utf8'
import base64 from 'base64-js'



export default React.createClass({
  mixins: [ampersandMixin],

  componentDidMount () {

  },

  render () {
    const {readme} = this.props
    // this.props.decodedReadme = new Buffer(this.props.readme.content, 'base64').toString('ascii');


    let duck = new Buffer(this.props.readme.content, 'base64').toString('ascii')

    console.log(duck)

    return (
      <div className="readme-content">
        <p> yo {duck}</p>
      </div>
    )

  }

});
