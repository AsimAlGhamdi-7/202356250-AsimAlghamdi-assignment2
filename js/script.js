// Dark mode feature
const themeButton = document.getElementById("themeButton");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }

});


// Contact form interaction
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const feedback = document.getElementById("formFeedback");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    feedback.textContent = "";

    let isValid = true;

    if (name.length < 2) {
        nameError.textContent = "Name must contain at least 2 characters.";
        isValid = false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        isValid = false;
    }

    if (isValid) {
        feedback.textContent =
            "Form validated successfully. This demo does not send messages.";


        feedback.className = "form-feedback success";
        setTimeout(function () {
            formFeedback.textContent = "";
        }, 4000);
        

        contactForm.reset();
    } else {
        feedback.textContent =
            "Please correct the errors above.";

        feedback.className = "form-feedback error";
    }
});

// Project Search and Filtering


const projectSearch =
document.getElementById("projectSearch");

const projectFilter =
document.getElementById("projectFilter");

const projectCards =
document.querySelectorAll(".project-card");

const noProjectsMessage =
document.getElementById("noProjectsMessage");


function filterProjects() {

const searchText =
    projectSearch.value.toLowerCase().trim();

const selectedCategory =
    projectFilter.value;

let visibleProjects = 0;


projectCards.forEach(function (card) {

    const title =
        card.getAttribute("data-title").toLowerCase();

    const category =
        card.getAttribute("data-category");


    const matchesSearch =
        title.includes(searchText);

    const matchesCategory =
        selectedCategory === "all" ||
        category === selectedCategory;


    if (matchesSearch && matchesCategory) {

        card.classList.remove("hidden");

        visibleProjects++;

    } else {

        card.classList.add("hidden");

    }

});


if (visibleProjects === 0) {

    noProjectsMessage.classList.remove("hidden");

} else {

    noProjectsMessage.classList.add("hidden");

}

}


projectSearch.addEventListener(
"input",
filterProjects
);


projectFilter.addEventListener(
"change",
filterProjects
);