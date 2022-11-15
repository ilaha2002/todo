const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

// addButton.forEach((element,i) => {
//   element.addEventListener('click', () => {
//     inputs[i].value=''
//   });

// });

// inputs.forEach(element => {
//   addEventListener('click',()=> {
//     if(keycode = 'enter')
//   });
// });

addButton.addEventListener('click', () => {
  if(textInputField.value.trim().length == '')

    return;
  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');

  todosContainer.appendChild(todoItemContainer);



  const todoText = document.createElement('p');
  todoText.id = 'text-input-field';
  todoText.innerText = textInputField.value;
  todoItemContainer.appendChild(todoText);

  todoText.addEventListener('dbclick', () => {
    todoText.classList.add('line-through');
   
  });

  const deleteButton = document.createElement('button');
  deleteButton.id = 'delete-button';

  const deleteImage = document.createElement('img');
  deleteImage.src = 'delete.svg';
  deleteButton.appendChild(deleteImage);
  todoItemContainer.appendChild(deleteButton);

  deleteButton.addEventListener('click', () =>{
    const parent = deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
  });

  textInputField.value = "";

});