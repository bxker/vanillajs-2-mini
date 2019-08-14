// let addTodo = document.querySelector('form').addEventListener("submit", function(event){
//     event.preventDefault();

//     let input = document.getElementById('item');
//     let inputText = input.value;
//     let element = document.createElement('li');
//     element.innerText = inputText;
//     input.addEventListener('click', completeTodo)
    

//     let deleteButton = document.createElement('button');
//     deleteButton.innerText = 'x';
//     deleteButton.addEventListener('click', removeTodo)
//     element.append(deleteButton);

//     let listItem = document.querySelector('ul')
//     listItem.appendChild(element);
    
// })

// function removeTodo(event){
//     event.target.parentNode.remove();
// }

// function completeTodo(event){
//     let checkBox = event.target.getAttribute("aria-checked");
//     if (checkBox === "true"){
//         event.target.setAttribute("aria-checked", "false");
//     }else{
//         event.target.setAttribute("aria-checked", "true");
//     }
// }

document.querySelector("form").addEventListener("submit", addTodo);

function addTodo(event) {
  event.preventDefault();
  const item = document.createElement("li");
  item.innerText = document.getElementById("item").value;
  item.addEventListener("click", completeTodo);

  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", removeTodo);
  item.append(button);

  const list = document.querySelector("ul");
  list.appendChild(item);
}

function removeTodo(event) {
  event.target.parentNode.remove();
}

function completeTodo(event) {
  const value = event.target.getAttribute("aria-checked");
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
}
