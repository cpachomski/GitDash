import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
  mixins: [ampersandMixin],


  render () {
    const {readme} = this.props;

    return (
      <p> {readme.content} </p>
    )

  }





});
