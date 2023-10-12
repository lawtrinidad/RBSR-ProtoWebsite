const submitBtn = document.querySelector("#send-help");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message-box");

const publicKey = "O6t8rZoy8RNhYcuIw";
const serviceID = "service_m4b7r2e";
const templateID = "template_befucjc";

emailjs.init(publicKey);

emailInput.addEventListener("input", () => {
    updateSubmitButtonDisplay();
});

messageInput.addEventListener("input", () => {
    updateSubmitButtonDisplay();
});

function updateSubmitButtonDisplay() {
    if (emailInput.value === "" || messageInput.value === "") {
        submitBtn.style.display = "none";
    } else {
        submitBtn.style.display = "";
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submitBtn.innerText = "Just A Moment...";
    const inputFields = {
        email: emailInput.value,
        message: messageInput.value,
    };

    emailjs
        .send(serviceID, templateID, inputFields)
        .then(
            () => {
                submitBtn.innerText = "Message Sent Successfully";
                emailInput.value = "";
                messageInput.value = "";
                updateSubmitButtonDisplay();
            },
            (error) => {
                console.log(error);
                submitBtn.innerText = "Something went wrong";
            }
        );
});

// Initial check for button display
updateSubmitButtonDisplay();



// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    loadFaqContent();
});

function loadFaqContent() {
    fetch('faq.txt')
        .then(response => response.text())
        .then(data => {
            const faqEntries = data.split('-');

            faqEntries.forEach((entry, index) => {
                const [question, answer] = entry.split('\n');
                const details = document.createElement('details');
                const summary = document.createElement('summary');
                const title = document.createElement('span');
                const content = document.createElement('div');

                title.className = 'faq-title';
                title.textContent = question.substring(question);
                content.className = 'faq-content';
                content.textContent = answer.substring(answer);

                summary.appendChild(title);
                details.appendChild(summary);
                details.appendChild(content);

                document.querySelector('.faq-container').appendChild(details);
            });
        });
}


