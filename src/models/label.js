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
    const oldAtrributes = this.attributes
    console.log(this.url());
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
        alert(err);
      }
    });
    this.set(attributes)
  }

});