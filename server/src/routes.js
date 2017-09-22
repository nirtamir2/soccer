const GroupController = require('./controllers/GroupController')
module.exports = (app) => {
  app.get('/groups', GroupController.getGroups)
}
