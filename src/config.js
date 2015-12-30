const config = {
  'localhost': {
    authUrl: 'https://thawing-plains-4936.herokuapp.com/authenticate'.
    clientId: 'c8648178b298b4cc1db0'

  },

  'trub.surge.sh': {
    authUrl: 'https://trub.herokuapp.com/authenticate'.
    clientId: '1560b89757565846fec7'
  },
}[location.hostname]

export default config;