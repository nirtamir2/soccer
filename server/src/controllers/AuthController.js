const User = require('./../models/user')
module.exports = {
  signUp: async (req, res, next) => {
    const user = await new User(req.body.value).save()
    res.status(200).json(user)
  },
  signIn: async (req, res) => {
    const { userName, password } = req.body.value
    const user = await User.findOne({ userName })
    if (!user || !await user.isValidPassword(password)) {
      return res.status(401).json({'auth': 'error'})
    }
    return res.status(200).json(user)
  }
}
