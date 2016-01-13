import Router from './router'
import styles from './styles/main.styl'
import public_styles from './styles/public.styl'
import repos_listing_styles from './styles/repos-listing.styl'
import repo_detail_styles from './styles/repo-detail.styl'
import icons from 'octicons/octicons/octicons.css'
import app from 'ampersand-app'
import Human from './models/human'

window.app = app;

app.extend({
  init () {
    this.human = new Human();
    this.human.fetchInitialData();
    this.router = new Router();
    this.router.history.start();
  }
})


app.init();