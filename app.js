
//what happens when submit is clicked
function onReady() {
   let id = 0;
   let toDos = [];
   //accesses the HTML form
   const addToDoForm = document.getElementById('addToDoForm');
   //grab the new to do text by ID and add it to toDos array
   //object literal notation declares what each to do object should be
   const newToDoText = document.getElementById('newToDoText');

   function createNewToDo() {
      //prevents submission of empty todo items
      if (!newToDoText.value) { return; }

      toDos.push({
         title: newToDoText.value,
         complete: false,
         id: ++id
      });
      //remove text from the input fieldset
      newToDoText.value = '';

      //calls renderTheUI function
      //WHY IS THIS CALLED BEFORE FUNCTION IS DECLARED?
      renderTheUI();
   }

   function deleteToDo(id) {
      return toDos.filter(toDo => toDo.id !== id);
   }

   //this adds new li's to the ul
   function renderTheUI() {
      //access the ul in the HTML
      const toDoList = document.getElementById('toDoList');
      //sets newLi to an empty string
      toDoList.textContent = '';

      //.forEach is array method that applies function to each item in array
      //here, forEach makes each toDo an li in the ul
      toDos.forEach(function(toDo) {
         const newLi = document.createElement('li');
         const checkbox = document.createElement('input');
         //assigns the input type as "checkbox"
         checkbox.type = "checkbox";

         const deleteBtn = document.createElement('button')
         deleteBtn.innerHTML = '<span>Delete</span>';

         //add toDo title text to empty array item from line 4
         newLi.innerHTML = toDo.title;

         checkbox.addEventListener('click', function() {
            toDo.complete = checkbox.checked ? true : false;
            saveToDos;
         })

         //updates (adds these to) the DOM
         toDoList.appendChild(newLi);
         newLi.appendChild(checkbox);
         newLi.appendChild(deleteBtn);

         //removes the to-do from the toDos array by comparing the toDo.id with the id of each item in the to-do list
         deleteBtn.addEventListener('click', () => {
            toDos = deleteToDo(toDo.id);
            renderTheUI();
         })
      })
   }

   //this event listener will call the createNewToDo function
   addToDoForm.addEventListener('submit', event => {
      //prevents page from reloading
      event.preventDefault();
      //calls function
      createNewToDo();
   });

   renderTheUI();
}



window.onload = function() {
   onReady();
}
