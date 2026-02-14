
let isLogin = true;

function openAuth(){
  document.getElementById("authModal").style.display="flex";
}

function closeAuth(){
  document.getElementById("authModal").style.display="none";
}

function toggleAuth(){
  isLogin = !isLogin;
  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Sign Up";
}

function handleAuth(){
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;

  if(isLogin){
    if(localStorage.getItem(email) === password){
      alert("Login Successful!");
      localStorage.setItem("isLoggedIn","true");
      closeAuth();
    }else{
      alert("Invalid Credentials");
    }
  }else{
    localStorage.setItem(email,password);
    alert("Account Created! Now Login.");
    toggleAuth();
  }
}

// Protect Contact Page
if(!localStorage.getItem("isLoggedIn")){
  alert("Please Login First");
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    if(!localStorage.getItem("isLoggedIn")){
      alert("Login Required!");
      return;
    }

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const fullMessage = `
New Client Inquiry:

Name: ${name}
Address: ${address}
Phone: ${phone}
Service: ${service}
Message: ${message}
    `;

    window.location.href = `mailto:youremail@gmail.com?subject=New Client Inquiry&body=${encodeURIComponent(fullMessage)}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(fullMessage)}`, "_blank");

    alert("Thank you! We will contact you soon.");
    this.reset();
});

