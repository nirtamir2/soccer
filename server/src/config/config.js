module.exports = {
  PORT: process.env.PORT || 8081,
  NODE_ENV: process.env.NODE_ENV || 'test',
  DB_CONNECTION_PROD: process.env.NODE_ENV || 'mongodb://application:12345678@ds145275.mlab.com:45275/soccer',
  DB_CONNECTION_TEST: process.env.NODE_ENV || 'mongodb://application:12345678@ds159845.mlab.com:59845/soccer-test'
}
