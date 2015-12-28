import Router from './router'
import styles from './styles/main.styl'
import app from 'ampersand-app'
import Human from './models/human'

window.app = app;

window.app = {
  init () {
    this.human = new Human();
    this.router = new Router();
    this.router.history.start();
  }
}


window.app.init();