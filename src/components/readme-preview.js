import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import utf8 from 'utf8'
import base64 from 'base64-js'
import marked from 'marked'



export default React.createClass({
  mixins: [ampersandMixin],

  getInitialState () {
    return {
      duck: '',
      decodedReadme: '',
    }
  },

  render () {
    const {readme} = this.props
    // this.props.decodedReadme = new Buffer(this.props.readme.content, 'base64').toString('ascii');



    return (
      <section id='readme-tab'>
        <div className="readme-content">
            <h4> README </h4>
            <p> {new Buffer(readme.content + '', 'base64').toString('ascii')}
            </p>
        </div>
      </section>
    )

  }

});
