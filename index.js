const chatIcon = document.getElementById("chatIcon");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");

chatIcon.addEventListener("click", () => {
  chatbox.style.display = "flex";
});

closeChat.addEventListener("click", () => {
  chatbox.style.display = "none";
});

/* Support Actions */
function contactSupport() {
  window.location.href = "mailto:yourgmail@gmail.com?subject=Website Support";
}

function reportIssue() {
  window.location.href = "mailto:yourgmail@gmail.com?subject=Report Issue";
}

function openWhatsApp() {
  window.open("https://wa.me/919999999999", "_blank");
}