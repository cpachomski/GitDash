import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import LabelCollection from './label-collection'
import Readme from './readme'


export default Model.extend(githubMixin, {
  url () {
    return 'https://api.github.com/repos/' + this.full_name;
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string',
    updated_at: 'string',
    watchers_count: 'number',
    forks_count: 'number'
  },

  derived: {
    appUrl: {
      deps: ['full_name'],
      fn () {
        return '/repo/' + this.full_name;
      }
    }
  },

  collections: {
    labels: LabelCollection
  },

  children: {
    readme: Readme
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.labels.fetch()
    this.readme.fetch()
  },

});
