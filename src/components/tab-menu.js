import React from 'react'
import Tab from './tab'

export default React.createClass({

  handleClick (tab) {
    this.props.changeTab(tab);
  },

  render () {
    return (
      <div id='tabs'>
        <nav>
          <ul>
            { this.props.tabList.map( function(tab){
                return(
                  <Tab handleClick={this.handleClick.bind(this, tab)}
                       key={tab.id}
                       url={tab.url}
                       title={tab.title}
                       isActive={this.props.currentTab === tab.id} />
                 )
              }.bind(this))
            }
          </ul>
        </nav>
      </div>
    )
  }
})

