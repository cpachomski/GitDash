import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import xhr from 'xhr'

export default Model.extend(githubMixin, {
  idAttribute: 'url',

  url () {
    return this.parent.url() + '/readme';
  },

  props: {
    size: 'number',
    content: 'string',
    sha: 'string'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },


  isNew () {
    return !this.saved
  },

  update (attributes) {
    const oldAttributes = this.getAttributes({props: true, session: false})
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
  }

});