// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const obj = {
        username: name,
        email: email,
        phone: phone

    }
   
    let userserialised = JSON.stringify(obj);
    localStorage.setItem(email, userserialised);
    display(obj);
}
function display(obj) {
    const ul = document.querySelector('ul');
    const creatnewli = document.createElement('li');
    creatnewli.textContent = obj.username + obj.email + obj.phone;
    ul.appendChild(creatnewli);
}
module.exports = handleFormSubmit;