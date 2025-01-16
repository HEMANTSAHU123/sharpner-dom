// Write your code below:

function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const userdetails = {
        username:name,
        email: email,
        phone: phone
    }
    let users_serialised = JSON.stringify(userdetails)
    localStorage.setItem("User Details", users_serialised);

}
module.exports = handleFormSubmit;