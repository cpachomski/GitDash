import Collection from 'ampersand-rest-collection'
import Repo from './repo'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend( githubMixin, {
  intialize () {
    setInterval( () =>{
      this.fetch();
      console.log('yolo');
    }, 500);
  },

  url: 'https://api.github.com/user/repos',
  model: Repo,

});