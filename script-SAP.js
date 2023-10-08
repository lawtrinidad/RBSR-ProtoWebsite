

const appointmentForm = document.querySelector("#appointment-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
const messageInput = document.querySelector("#message");

const publicKey = "O6t8rZoy8RNhYcuIw";
const serviceID = "service_m4b7r2e";
const templateID ="template_befucjc";

emailjs.init(publicKey);

appointmentForm.addEventListener("submit", e => {
    e.preventDefault();
    submitBtn.innerText = "Just A Moment...";
    const inputFields = {
        name: nameInput.value,
        number: numberInput.value,
        email: emailInput.value,
        date: dateInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerText = "Message Sent Successfully";

        nameInput.value="";
        numberInput.value="";
        emailInput.value="";
        dateInput.value="";
        messageInput.value="";
    }, (error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong";
    });
});
