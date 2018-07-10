module.exports = function(app) {
  app.get('/crap', (req, resp) => (resp.send('CRAP!')))
}
