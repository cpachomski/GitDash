import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
  mixins: [ampersandMixin],

  displayName: "repos",

  propTypes: {
    repos: React.PropTypes.object.isRequired
  },

  render () {
    const {repos} = this.props

    if( !repos ){
      return (
        <div> loading </div>
      )
    }

    return(
      <div className='repos-listing'>
        <div className='repos-listing-content'>
          <h2>Repos</h2>

          <ul>
            {repos.map( (repo) => {
              return (
                <li key={repo.id}>
                  <span className="octicon octicon-repo"></span>
                  <a href={repo.appUrl}> {repo.full_name} </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
});

