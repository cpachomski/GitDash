require('babel/register')
var getConfig = require('hjs-webpack')
var React = require('react')
var PublicPage = require('./src/pages/public')

module.exports = getConfig({
	in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html (context) {
    const publicPage = React.renderToString(React.createElement(PublicPage))
    return {
      'index.html': context.defaultTemplate({html: publicPage}),
      '200.html': context.defaultTemplate()
    }
  }
})
