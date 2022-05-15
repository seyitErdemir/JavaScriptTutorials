const todos = [
  { title: 'todo 1', description: 'Deneme todo 1' },
  { title: 'todo 2', description: 'Deneme todo 2' },
  { title: 'todo 3', description: 'Deneme todo 3' }
]

let todoListEl = document.getElementById('todoList')

function todoList () {
  setTimeout(() => {
    let todoItems = ''
    todos.forEach(item => {
      todoItems += `
                <li>
                    <b>${item.title}</b>
                    <p>${item.description}</p>
                </li>
            `
    })
    todoListEl.innerHTML = todoItems
  }, 1000)
}

function newTodo (todo , callback) {
  setTimeout(() => {
    todos.push(todo)
    callback()
  }, 2000)
}

newTodo({ title: 'todo 4', description: 'Deneme todo 4' } , todoList)

// todoList()
