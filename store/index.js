import {observable, action} from 'mobx'

class Store {
    @observable authenticated = true

    @action changeAuthenticated () {
        this.authenticated = !this.authenticated
    }
}

const store = new Store()

export default store