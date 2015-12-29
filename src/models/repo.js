import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'


export default Model.extend({
  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  },

  derived: {
    appUrl: {
      deps: ['full_name'],
      fn () {
        return '/repo/' + this.full_name;
      }
    }
  }
})
