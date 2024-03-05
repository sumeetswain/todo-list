const form = document.querySelector("#form");
const input = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
let todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    const todo = createTodo(input.value);
    todos.push(todo);
    console.log(todos);

    const toggle = document.createElement("input");
    toggle.setAttribute("type", "checkbox");
    toggle.classList.add("form-check-input");
    toggle.addEventListener("click", () => toggleTodo(todo.id));

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.setAttribute("id", todo.id);
    li.appendChild(toggle);

    const btn = document.createElement("button");
    const textSpan = document.createElement("span"); // Create a span for the text
    textSpan.classList.add("todo");
    btn.classList.add("btn-close");
    btn.addEventListener("click", () => deleteTodo(todo.id));

    textSpan.textContent = todo.todo; // Set the text content of the span
    li.appendChild(textSpan); // Append the span to the li
    li.appendChild(btn);
    todoList.appendChild(li);
    input.value = "";
  }
});

const createTodo = (text) => {
  return {
    id: "id" + self.crypto.randomUUID(),
    todo: text,
    completed: false,
  };
};
const toggleTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id == id) {
      return { ...todo, completed: !todo.completed };
    } else return todo;
  });
  console.log(todos);
};
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id != id);
  let todo = document.querySelector(`#${id}`);
  todo.remove();
};
