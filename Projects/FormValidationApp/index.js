console.log("This is the form validation project");

let names = document.getElementById("names");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let nameValidation = false;
let emailValidation = false;
let phoneValidation = false;

names.addEventListener("blur", () => {
    // console.log("Name event is fired");
    let reg = /^[a-zA-Z]([0-9A-Za-z]){3,15}$/;
    let str = names.value;
    // console.log(reg, str);
    if (reg.test(str)) {
        // console.log("Name is correct: ");
        names.classList.remove("is-invalid");
        nameValidation = true;
    }
    else {
        // console.log("Wrong name");
        names.classList.add("is-invalid");
        nameValidation = false;
    }
});

email.addEventListener("blur", () => {
    // console.log("email event is fired");
    let reg = /([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA_Z]){2,5}$/;
    let str = email.value;
    // console.log(str);
    if (reg.test(str)) {
        // console.log("Email is correct: ");
        email.classList.remove("is-invalid");
        emailValidation = true;
    }
    else {
        // console.log("Wrong email");
        email.classList.add("is-invalid")
        emailValidation = false;
    }
});

phone.addEventListener("blur", () => {
    // console.log("phone event is fired");
    let reg = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(reg, str);
    if (reg.test(str)) {
        // console.log("Phone number is correct: ");
        phone.classList.remove("is-invalid");
        phoneValidation = true;
    }
    else {
        // console.log("Wrong number");
        phone.classList.add("is-invalid");
        phoneValidation = false;
    }
});

let btnSubmit = document.getElementById("submit");
// let success = document.getElementById("success");
// let danger = document.getElementById("danger");
let alert = document.getElementById("alert");

btnSubmit.addEventListener("click", (e) => {
    // console.log("The button is clicked");
    e.preventDefault();

    if (nameValidation && emailValidation && phoneValidation) {
        // console.log(nameValidation, emailValidation, phoneValidation);
        // console.log("Form is correct");
        // danger.classList.remove("show");
        // success.classList.add("show");
        let html = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success!</strong> Your form has been successfully submitted.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
        alert.innerHTML = html;
    }
    else {
        // console.log(nameValidation, emailValidation, phoneValidation);
        // console.log("Your form is incorrect");
        // success.classList.remove("show");
        // danger.classList.add("show");
        let html = `<div id="danger" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Faliure!</strong> There is some error in your form, please check properly before submitting.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
        alert.innerHTML = html;

    }
});
