// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
function addButtonsToFruitItem(fruitItem) {
    // Ensure the fruit item has both buttons
    if (!fruitItem.querySelector('.delete-btn')) {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'x';
        fruitItem.appendChild(deleteButton);
    }

    if (!fruitItem.querySelector('.edit-btn')) {
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        fruitItem.appendChild(editButton);
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const addtofruit = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    // newLi.innerHTML=addtofruit.value + '<button class="delete-btn">x</button> <button class="edit-btn">Edit</button>';
    newLi.classList.add('fruit');
    newLi.innerHTML = addtofruit.value;
    fruits.appendChild(newLi);
    addButtonsToFruitItem(newLi);

})
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const fruittodelete = event.target.parentElement;
        fruits.removeChild(fruittodelete);
    };
})
document.querySelectorAll('.fruits .fruit').forEach(addButtonsToFruitItem);

