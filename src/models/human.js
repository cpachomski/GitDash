import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import RepoCollection from './repo-collection'

export default Model.extend( githubMixin, {
  url: 'https://api.github.com/user',

  initialize () {
    this.token = window.localStorage.token;
    this.on('change:token', this.onTokenChange);
  },

  onTokenChange () {
    window.localStorage.token = this.token;
    this.fetchInitialData();
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch();
      this.repos.fetch();
    }
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  collections: {
    repos: RepoCollection
  },

  session: {
    token: 'string'

  }
});