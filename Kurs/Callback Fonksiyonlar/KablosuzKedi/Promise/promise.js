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
  }, 300)
}

function newTodo (todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo)

      const e = false

      if (!e) {
        resolve()
      } else {
        reject('hata var')
      }
    }, 2000)
  })
}

newTodo({
  title: 'todo 4',
  description: 'Deneme todo 4'
})
  .then(res => {
    todoList()
  })
  .catch(err => {
    console.log(err)
  })

// todoList()

//Promise All

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) =>
  setTimeout(resolve('ben 2. promisim'), 2000)
)

const p3 = 15124124
const p4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
  res.json()
)

Promise.all([p1, p2, p3, p4]).then(promises => {
  console.log('promises', promises)
})
