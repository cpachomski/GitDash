const config = {
  'localhost': {
    authUrl: 'https://thawing-plains-4936.herokuapp.com/authenticate',
    clientId: 'c8648178b298b4cc1db0'

  },

  'gitdash.surge.sh': {
    authUrl: 'https://cppgitdash.herokuapp.com/authenticate',
    clientId: 'be934f802c4f3e23ad8c'
  }
}[window.location.hostname]


export default config;