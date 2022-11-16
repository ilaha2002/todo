
const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');
const deleteButton = document.querySelector('#delete-button');


addButton.addEventListener('click', () => {
  if(textInputField.value.trim().length =="0") {
    return;
  }


  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');
  // todoItemContainer.innerText = text-input-field.value;
  todosContainer.appendChild(todoItemContainer);
 

  const todoText = document.createElement('input');
  todoText.id = 'text-input-field';
  todoItemContainer.appendChild(todoText);


  todoText.addEventListener('dbclick', () => {
  todoText.classList.add('line-through');
   
  });

  const deleteButton = document.createElement('delete-button');
  deleteButton.id = 'delete-button';

  const deleteImage = document.createElement('img');
  deleteImage.src = 'delete.svg';
  deleteButton.appendChild(deleteImage);
  todoItemContainer.appendChild(deleteButton);

  deleteButton.addEventListener('click', (event) =>{
    console.log(event.target.parentElement.parentElement.querySelector("#text-input-field"));
    //const parent = deleteButton.parentElement;
    //parent.parentElement.removeChild(parent);
    event.target.parentElement.parentElement.remove();
  });
  


});