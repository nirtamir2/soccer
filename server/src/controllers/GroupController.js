const MockedGroups = require('./../mocks/MockedGroups')
module.exports = {
  getGroups (req, res) {
    res.send(MockedGroups.groups)
  }
}
