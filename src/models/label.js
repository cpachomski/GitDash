import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import xhr from 'xhr'

export default Model.extend(githubMixin, {
  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },

  session: {
    editing:{
      type: 'boolean',
      default: false
    }
  },

  update (attributes) {
    const oldAtrributes = this.getAttributes({props: true, session: false})
    xhr({
      url: this.url(),
      json: attributes,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.human.token
      }
    }, (err, req, body) => {
      if (err){
        this.set(oldAttributes);
      }
    });
    this.set(attributes)
  }

});