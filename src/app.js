import Router from './router'
import styles from './styles/main.styl'
import app from 'ampersand-app'

window.app = app;

window.app = {
  init () {
    this.router = new Router();
    this.router.history.start();
  }
}


window.app.init();