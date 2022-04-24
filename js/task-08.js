const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Заповніть всі поля будь ласка");
    }
    const object = new Object();
    object.email = email.value;
    object.password = password.value;
    console.log(object);
    event.currentTarget.reset();
}
