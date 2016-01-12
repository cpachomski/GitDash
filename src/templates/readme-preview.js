import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import base64 from 'base-64'


export default React.createClass({
  mixins: [ampersandMixin],


  render () {

    const {readme} = this.props;
    readme.content = base64.decode(readme.content);


    return (
      <div className="readme-content">
        <p> yo {readme.content}</p>
      </div>
    )

  }

});
