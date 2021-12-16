export class UI {
    constructor() {
        this.employeeList = document.getElementById("employees")
        this.updateButton = document.getElementById("update")
        this.nameInput = document.getElementById("name")
        this.salaryInput = document.getElementById("salary")
        this.departmentInput = document.getElementById("department")
    }

    addAllEmployeeToUI(employees) {

        let result = ""
        employees.forEach(employee => {
            result += ` <tr>
                                            
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`
        })
        this.employeeList.innerHTML = result
    }

    clearInputs() {
        this.nameInput.value = ""
        this.departmentInput.value = ""
        this.salaryInput.value = ""
    }

    addEmployeeToUI(employee) {
        this.employeeList.innerHTML += ` <tr>
                                            
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>`
    }


    deleteEmployeeFromUI(element){
        element.remove()
    }

    toogleUpdateButton(target){
        if(this.updateButton.style.display==="none"){
            this.updateButton.style.display="block"
            this.addEmployeeInfoToInputs(target)
        }else{
            this.updateButton.style.display="none"
            this.clearInputs()
        }
    }
    addEmployeeInfoToInputs(target){

        const children = target.children
        this.nameInput.value=children[0].textContent
        this.departmentInput.value  =children[1].textContent
        this.salaryInput.value=children[2].textContent

    }
    updateEmployeeOnUI(employee,parent){
        parent.innerHTML=` <tr>
                                            
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>`

    this.clearInputs()
    }
}