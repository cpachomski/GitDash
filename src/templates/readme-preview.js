import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
  mixins: [ampersandMixin],


  render () {

    const {readme} = this.props;


    return (
      <div className="readme-content">
        <p> yo {readme}</p>
      </div>
    )

  }

});
