import React from 'react'
import RepoCardStat from '../templates/repo-card-stat'
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
                  <div className='slides-up'>
                      <a href={repo.appUrl}> {repo.full_name.split('/').pop()} </a>
                      <svg width="100" height="10px" >
                        <line x1='0' y1='0' x2='100%'  y2='0' className="card-header-underline" />
                      </svg>
                      <ul className='repo-card-stats'>
                        <RepoCardStat name='Commits' value='32' />
                        <RepoCardStat name='Collaborators' value='2' />
                        <RepoCardStat name='Open on Github' value='2' />
                      </ul>
                  </div>
                  <span className="octicon octicon-repo"></span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
});

