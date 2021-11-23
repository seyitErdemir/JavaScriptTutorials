import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.logerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }

                    break;
                case "employee":

                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }

    }

    //formik - yup
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasEErrors = false
        for (const field of requiredFields) {

            if (!user[field]) {
                hasEErrors = true
                this.errors.push(new DataError(`validation problem . ${field} is required `, user))
            }

        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasEErrors = true
            this.errors.push(new DataError(`validation problem . ${user.age} is  not a number `, user))
        }
        return hasEErrors
    }


    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasEErrors = false
        for (const field of requiredFields) {

            if (!user[field]) {
                hasEErrors = true
                this.errors.push(new DataError(`validation problem . ${field} is required `, user))
            }

        }
        return hasEErrors
    }



    add(user) {
        switch (user.type) {
            case "customers":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("this user can not be added. Wrong user type", user))
                break;
        }
        this.logerService.log(user)
    }

    listCustomers() {
        return this.customers

    }

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted(){
       return this.customers.sort((customer1,customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            }else if(customer1.firstName === customer2.firstName){
                return 0;
            }else{
                return -1;
            }
        })
    }


}