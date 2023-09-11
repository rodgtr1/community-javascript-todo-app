// ENTER CODE BELOW
// Set todos in localStorage
function setTodos(key, todos) {
  localStorage.setItem(key, JSON.stringify(todos)); 
}

// Get todos from localStorage
function getTodos(key) {
  const todos = JSON.parse(localStorage.getItem(key));
  return todos;
} 

// Delete todos from localStorage
function deleteTodos(key) {
  localStorage.removeItem(key);
}

// Set todos
const todos = [{title: 'Todo 1', desc: 'Description 1', completed: false}]; 
setTodos('todos', todos);

// Get todos
const storedTodos = getTodos('todos');

// Delete todos 
deleteTodos('todos');