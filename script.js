const textInputField = document.querySelector
('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click', () => {
  if(textInputField.value.trim().length == '')

    return;
  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');

  todosContainer.appendChild(todoItemContainer);

  // const todoText = document.createElement('p');
  todoText.id = 'text-input-field';
  todoText.innerText = textInputField.value;
  todoItemContainer.appendChild(todoText);

  todoText.addEventListener('dbclick', () => {
    todoText.classList.add('line-through');
    // editButton.setAttribute("disabled", "disabled")
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


















// const element = document.querySelector('.main-border');
// const button = document.querySelector('.addbutton');
// const firstInput = document.querySelector('input');

// button.addEventListener('click', deleteValue);

// firstInput.addEventListener('keyup', (event) => {
//     if(event.target.keyCode = '13'){
//       element.disabled = true;
//     }
// });




// const button = document.querySelectorAll('button[data-target]');

// for (const button) {
//   // выбираем селектор, соответствующий текстовому полю
//   const target = button.dataset.target;
//   // если такой селектор определён...
//   if (target) {
//     // находим текстовое поле для этой кнопки
//     const textarea = document.querySelector(target);
    
//     // если поле нашлось
//     if (textarea) {
//       // вешаем на кнопку обработчик события "клик"
//       button.addEventListener('click', event => {
//         // по клику меняем значение свойства "выключно" на противоположное
//         textarea.disabled = !textarea.disabled;
        
//         textarea.focus();
//       });
//     }
//   }
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// img=document.getElementById('addbuttonid')
// img.onclick = function() {
//   input_placetowrite = document.getElementById("placetowriteiid")
//   placetowrite = input_placetowrite.value
// }