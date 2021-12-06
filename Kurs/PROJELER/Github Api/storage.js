class Storage {
    static getSearchUsersFromStorage() {
        //tüm kullanıcıları all
        let users;
        if (localStorage.getItem("searched") === null) {
            users = []
        }else{
            users=JSON.parse(localStorage.getItem("searched"))
        }
        return users
    }


    static addSearchUsersToStorage(username) {
        //kullanıcı ekle
        let users=this.getSearchUsersFromStorage()

        //indexof

        if (users.indexOf(username)===-1) {
            users.push(username)
        }
        localStorage.setItem("searched",JSON.stringify(users))


    }
    static clearAllSearchUsersFromStorage() {
            localStorage.removeItem("searched")
    }
}