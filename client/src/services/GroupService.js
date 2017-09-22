import Api from './Api'

export default {
  getGroups () {
    return Api().get('groups')
  }
}
