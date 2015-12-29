import Model form 'ampersand-model'
import githubMixin from '../helpers/github-mixin'


export default Model.extend({
  props: {
    name: 'string',
    color: 'string'
  }

});