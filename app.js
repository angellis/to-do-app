
//what happens when submit is clicked
function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', () => {
      event.preventDefault();

      //get the newToDoText
      let title = newToDoText.value;

      //create a new li
      let newLi = document.createElement('li');

      //create a new input
      let checkbox = document.createElement('input');

      //set the input's type to checkbox
      checkbox.type = "checkbox";

      //create a button to delete an item
      let minusButton = document.createElement('button');
      minusButton.innerHTML = '<span>Delete<span>';

      //set the word title into the li
      newLi.textContent = title;

      //attach the checkbox to the li
      newLi.appendChild(checkbox);

      //attach a minus button to the li
      newLi.appendChild(minusButton);

      //attach the new li to the ul
      toDoList.appendChild(newLi);

      //remove text from the input fieldset
      newToDoText.value = '';

      //listening for delete button to be clicked
      minusButton.addEventListener('click', function() {
         newLi.parentNode.removeChild(newLi);
      })

      console.log(title);

   });
}


window.onload = function() {
   onReady();
}
