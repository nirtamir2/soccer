const HelloController = require('./controllers/HelloController')
module.exports = (app) => {
  app.get('/hello', HelloController.hello)
}
