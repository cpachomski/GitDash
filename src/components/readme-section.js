import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import utf8 from 'utf8'
import base64 from 'base64-js'
import marked from 'marked'
import readme_section from '../styles/readme-section.styl'



export default React.createClass({
  mixins: [ampersandMixin],

  getInitalState () {
    const {readme} = this.props
    return {readme}
  },

  createMarkup(contentString) {
    return {__html: contentString };
  },

  render () {

    let readmeContent = new Buffer(readme.content + '', 'base64').toString('ascii');

    let convertedReadmeContent = marked(readmeContent);


    return (
      <section id='readme-section'>
        <div className='readme-content'>
          <div className="markup-readme">
              <h3> Edit README </h3>
              <p> {readmeContent}
              </p>
          </div>
          <div className="html-readme" dangerouslySetInnerHTML={this.createMarkup(convertedReadmeContent)} >
          </div>
        </div>
      </section>
    )
  }

});
