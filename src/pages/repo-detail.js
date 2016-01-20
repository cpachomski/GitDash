import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import LabelItem from '../components/label-item'
import ReadmePreview from '../components/readme-preview'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: "RepoDetail",

  propTypes: {
    repo: React.PropTypes.object.isRequired
  },

  onAddClick () {
    this.props.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, {at: 0})
  },

  getInitialState () {
    return {
      componentHeight: window.innerHeight - 100
    }
  },

  handleResize () {
    this.setState({
      componentHeight: window.innerHeight - 100
    })
  },

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  },

  render () {
    const {repo, labels, readme} = this.props
    let componentStyling = {
      height: '' + this.state.componentHeight
    }

    window.readme = readme;
    return (
      <div className='repo-detail' style={componentStyling} >
        <h1>{repo.full_name}</h1>
        <div id='tabs'>
          <nav>
            <ul>
              <li><span>Readme</span></li>
              <li><span>Labels</span></li>
            </ul>
          </nav>
        </div>
        <section id='readme-section'>
          <ReadmePreview readme={readme} />
        </section>
        <section id='labels-section'>
          <p>
            <button onClick={this.onAddClick} className="button">Add New</button>
          </p>
          <ul>
            { labels.map((label) => {
             return <LabelItem key={label.name} label={label}/>
           })}
          </ul>
        </section>
      </div>
    )
  }
});