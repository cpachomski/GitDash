import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'
import Linker from './helpers/linker'


export default Router.extend({

  renderPage ( page, opts = {layout: true, linker: true} ) {
    //add Layout wrapper
    if (opts.layout) {
      page = (
        <Layout>
         {page}
        </Layout>
      )
    }

    if (opts.linker){
      page = (
        <Linker>
          {page}
        </Linker>
      )
    }

    React.render(page, document.body);
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false});
  },

  repos () {
    this.renderPage(<ReposPage/>);
  }

  login() {
    window.location = 'https://github.com/login/oauth/authorize' + qs.stringify({
      client_id: ,
      redirect_uri: ,
      scope: 'user, repo',

    })
  }

});