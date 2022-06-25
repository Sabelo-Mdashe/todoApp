let todos = [];

// ADD ITEMS INTO THE LIST/ARRAY -- CREATE //

function addTodo() {
  const item = document.getElementById("input").value;
  todos.push(item);
  window.alert(`${item} has been successfully added to the Todo list`);
  document.getElementById("input").value = " ";
  showTodos(todos);
}
document.querySelector(".btnAddItem").addEventListener("click", addTodo);

// SORT THE TODO LIST AND SHOW LIST TO THE SCREEN -- READ //

function sortTodos() {}

// SHOW THE LIST ON THE SCREEN -- READ //

function showTodos(todos) {
  let createdDate = new Date().toDateString();
  document.querySelector(".todo_list").innerHTML = " ";
  todos.forEach((todo) => {
    document.querySelector(
      ".todo_list"
    ).innerHTML += `<div class="shadow p-3 mb-5 bg-body rounded" id="task" style="display: flex; justify-content: space-between;"><span>${todo}</span> <span>${createdDate}</span> <svg xmlns="http://www.w3.org/2000/svg" type="button" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" style="color: blue;" onclick="deleteTodo()" id="btnDelete" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg></div>`;
  });
}
showTodos(todos);

// THIS FUNCTION WILL DELETE A TODO ONCE THE TRASH CAN IS CLICKED

function deleteTodo() {}

// A FUNCTION TO UPDATE AN ITEM ON THE LIST -- UPDATE
// (FIRST HAVE TO FIND THE ITEM USING THE FIND() FUNCTION)

function updateTodo() {}
