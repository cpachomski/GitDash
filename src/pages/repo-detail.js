import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import LabelItem from '../components/label-item'
import ReadmePreview from '../components/readme-preview'
import TabMenu from '../components/tab-menu'
import TabContent from '../components/tab-content'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: "RepoDetail",

  propTypes: {
    repo: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      componentHeight: window.innerHeight - 100,
      currentTab: 1,
      tabsList: [
        {'id': 1, 'title': 'Readme', 'url': '/readme'},
        {'id': 2, 'title': 'Labels', 'url': '/labels'}
      ]
    }
  },

  changeTab (tab) {
    this.setState({ currentTab: tab.id });
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

    return (
      <div className='repo-detail' style={componentStyling} >
        <h1>{repo.full_name}</h1>
        <TabMenu
            currentTab={this.state.currentTab}
            tabList={this.state.tabsList}
            changeTab={this.changeTab}
        />
        <TabContent readme={readme} labels={labels} currentTab={this.state.currentTab} />
      </div>
    )
  }
});











