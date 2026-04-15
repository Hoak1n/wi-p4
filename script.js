const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav");
const feedbackForm = document.getElementById("feedback-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userMessage = document.getElementById("user-message");
const emailError = document.getElementById("email-error");
const commentsContainer = document.getElementById("comments-container");
const submitBtn = document.getElementById("submit-btn");

// toggle menu
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// input validation
userEmail.addEventListener("input", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userEmail.value.length > 0 && !emailPattern.test(userEmail.value)) {
    emailError.style.display = "block";
    userEmail.style.borderColor = "red";
  } else {
    emailError.style.display = "none";
    userEmail.style.borderColor = "#ddd";
  }
});

// submit form
feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    userName.value.trim() === "" ||
    userEmail.value.trim() === "" ||
    userMessage.value.trim() === ""
  ) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  // create new comment element
  const newComment = document.createElement("div");
  newComment.classList.add("comment-card");
  const date = new Date().toLocaleString();

  newComment.innerHTML = `

        <strong>${userName.value}</strong> <small style="color: #888;">${date}</small>

        <p style="margin-top: 5px;">${userMessage.value}</p>

    `;

  submitBtn.style.backgroundColor = "green";
  submitBtn.innerText = "Успішно додано!";

  setTimeout(() => {
    submitBtn.style.backgroundColor = "#333";
    submitBtn.innerText = "Відправити";
  }, 2000);

  // add new comment to container
  commentsContainer.prepend(newComment);

  // reset form
  feedbackForm.reset();
  alert("Дякуємо! Ваш відгук додано.");
});

// click
document.querySelector(".logo").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Ви клікнули по логотипу! Повернення на головну сторінку.");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
