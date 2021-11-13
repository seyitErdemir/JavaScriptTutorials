export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.logerService =loggerService
    }
    add(user) {
        this.users.push(user)
        this.logerService.log(user)
    }

    list() {
        return this.users

    }

    getById(id) {
        return this.users.find(u=>u.id===id)
    }


}