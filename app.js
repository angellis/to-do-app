
//what happens when submit is clicked
function onReady() {
   const toDos = [];
   //accesses the HTML form
   const addToDoForm = document.getElementById('addToDoForm');

   function createNewToDo() {
      //grab the new to do text by ID and add it to toDos array
      //object literal notation declares what each to do object should be
      const newToDoText = document.getElementById('newToDoText');
      //prevents submission of empty todo items
      if (!newToDoText.value) { return; }

      toDos.push({
         title: newToDoText.value,
         complete: false
      });
      //remove text from the input fieldset
      newToDoText.value = '';

      //calls renderTheUI function
      //WHY IS THIS CALLED BEFORE FUNCTION IS DECLARED?
      renderTheUI();
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

         //add toDo title text to empty array item from line 4
         newLi.textContent = toDo.title;

         //updates (adds these to) the DOM
         toDoList.appendChild(newLi);
         newLi.appendChild(checkbox);
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


   // let id = 0;
   // const toDos = [];
   // const addToDoForm = document.getElementById('addToDoForm');
   //
   // function createNewToDo() {
   //    const newToDoText = document.getElementById('newToDoText');
   //    //declares what we want each to-do object to be
   //    if (!newToDoText.value) { return; ``}
   //
   //    toDos.push({
   //       title: newToDoText.value,
   //       complete:false,
   //       id: ++id;
   //    })
   //    //clear the text input for the user
   //    newToDoText.value = '';
   //
   //    renderTheUI();
   // }
   //
   // function deleteToDo(id) {
   //    return toDos.filter(toDo => toDo.id !== id);
   // }
   //
   // function renderTheUI() {
   //    const toDoList = document.getElementById('toDoList');
   //
   //    toDoList.textContent = '';
   //
   //    toDos.forEach(function(toDo) {
   //       const newLi = document.createElement('li');
   //
   //       const checkbox = document.createElement('input');
   //       checkbox.type = "checkbox";
   //    //   checkbox.checked = toDo.complete;
   //
   //       //add a delete button
   //       const deleteButton = document.createElement('button');
   //       deleteButton.innerHTML = '<span>Delete<span>';
   //
   //       newLi.innerHTML = toDo.title;
   //
   //       toDoList.appendChild(newLi);
   //       newLi.appendChild(checkbox);
   //       newLi.appendChild(deleteButton);
   //
   //       deleteButton.addEventListener('click', () => {
   //          toDos = deleteToDo(toDo.id);
   //          renderTheUI();
   //
   //       })
   //    });
   // }
   //
   // addToDoForm.addEventListener('submit', event => {
   //    event.preventDefault();
   //    createNewToDo();
   //    newToDoText.value = '';
   //    renderTheUI();
   // });
   //
   // renderTheUI();

}


window.onload = function() {
   onReady();
}
