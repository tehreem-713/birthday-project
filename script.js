const passwordPage = document.getElementById("password-page");
const questionPage = document.getElementById("question-page");
const birthdayPage = document.getElementById("birthday-page");
const personalPage = document.getElementById("personal-page");

function showPage(page) {
    document.querySelectorAll(".page").forEach(function(section) {
        section.classList.remove("active");
    });

    page.classList.add("active");
}

const digitBoxes = document.querySelectorAll(".digit-box");
const keys = document.querySelectorAll(".key");
const passwordError = document.getElementById("password-error");

const correctPassword = "1211";
let enteredPassword = "";

function updatePasswordDisplay() {
    digitBoxes.forEach(function(box, index) {
        box.textContent = enteredPassword[index] || "";
    });
}

keys.forEach(function(key) {
    key.addEventListener("click", function() {
        const value = key.textContent.trim();

        if (value === "Clear") {
            enteredPassword = "";
        } 
        else if (value === "⌫") {
            enteredPassword = enteredPassword.slice(0, -1);
        } 
        else if (enteredPassword.length < 4) {
            enteredPassword += value;
        }

        updatePasswordDisplay();

        if (enteredPassword.length === 4) {
    checkPassword();
       }
    });
});

function checkPassword() {
    if (enteredPassword === correctPassword) {
        passwordError.textContent = "";
        showPage(questionPage);
    } else {
        passwordError.textContent = "Oops! Try again!";
        enteredPassword = "";
        updatePasswordDisplay();
    }
}

const yesButton = document.getElementById("yes-btn");

yesButton.addEventListener("click", function() {
    showPage(birthdayPage);
});

const noButton = document.getElementById("no-btn");

const noMessages = [
    "Are you sure?",
    "Really??",
    "Come on!",
    "Just say YES!"
];

let noClickCount = 0;

noButton.addEventListener("click", function() {
    noButton.textContent = noMessages[noClickCount % noMessages.length];
    noClickCount++;
});

const messageNext = document.getElementById("message-next");

messageNext.addEventListener("click", function() {
    showPage(personalPage);
});
