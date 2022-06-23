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
  document.querySelector(".todo_list").innerHTML = " ";
  todos.forEach((todo) => {
    document.querySelector(
      ".todo_list"
    ).innerHTML += `<div class="shadow p-3 mb-5 bg-body rounded id="task style="display: flex; justify-content: space-between;">${todo} <button type="button" class="btn btn-danger" style="font-size: 10px;">DELETE</button></div>`;
  });
}

showTodos(todos);

// A FUNCTION TO UPDATE AN ITEM ON THE LIST -- UPDATE
// (FIRST HAVE TO FIND THE ITEM USING THE FIND() FUNCTION)

function updateTodo() {}
