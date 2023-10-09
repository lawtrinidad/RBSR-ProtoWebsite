/**JS for sending email*/
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
        date: selectedDate ? selectedDate.toDateString() : '', // Use selectedDate
        message: messageInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerText = "Message Sent Successfully";

        nameInput.value="";
        numberInput.value="";
        emailInput.value="";
        
        messageInput.value="";
    }, (error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong";
    });
});

/**JS for calendar */
const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span"),
  bottomButton = document.querySelector("#btn"),
  backButton = document.querySelector("#back-button");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let selectedDay = null;
let selectedDate = null; // Define a global variable to store the selected date

bottomButton.addEventListener("click", () => {
  const calendarwrapper = document.querySelector(".wrapper");
  const formContainer = document.querySelector(".form-container");

  if (calendarwrapper.style.display === "none") {
    calendarwrapper.style.display = "block";
    formContainer.style.display = "none";
  } else {
    calendarwrapper.style.display = "none";
    formContainer.style.display = "block";

    // Use the selectedDate variable where needed in your form logic
    console.log("Selected Date:", selectedDate);
  }
});

backButton.addEventListener("click", () => {
  const calendarwrapper = document.querySelector(".wrapper");
  const formContainer = document.querySelector(".form-container");

  if (calendarwrapper.style.display === "none") {
    calendarwrapper.style.display = "block";
    formContainer.style.display = "none";
  } else {
    calendarwrapper.style.display = "none";
    formContainer.style.display = "block";
  }
});

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;

  const days = document.querySelectorAll(".days li");
  days.forEach((day) => {
    day.addEventListener("click", () => {
      // Remove the "clicked" class from the previously selected day
      if (selectedDay) {
        selectedDay.classList.remove("clicked");
      }

      // Add the "clicked" class to the newly selected day
      day.classList.add("clicked");

      // Set the selected day to the newly selected day
      selectedDay = day;

      // Store the selected date in the global variable
      selectedDate = new Date(currYear, currMonth, parseInt(day.textContent));

      // Show the button when a day is clicked
      bottomButton.style.display = "block";
    });
  });
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
