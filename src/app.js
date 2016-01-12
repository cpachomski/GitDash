import Router from './router'
import styles from './styles/main.styl'
import publicstyles from './styles/public.styl'
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