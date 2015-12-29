import Model from 'ampersand-model'

export default Model.extend({
  url: 'https://api.github.com/user',

  initialize () {
    this.token = window.localStorage.token;



    this.on('change:token', this.onTokenChange);
  },

  onTokenChange () {
    window.localStorage.token = this.token;
  },


  ajaxConfig() {
    return{
      headers: {
        Authorization: 'token ' + this.token
      }
    }
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  session: {
    token: 'string'

  }
});