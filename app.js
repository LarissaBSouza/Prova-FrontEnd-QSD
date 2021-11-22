let iptEmail = document.getElementById("email")

iptEmail.onblur = function() {
    var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    let msgEmail = document.querySelector(".msg-email");
    let msgEmailOK = document.querySelector(".msg-email.ok");
    if (emailRegex.test(iptEmail.value)) {
        msgEmail.style.display = "none";
        msgEmail.style.display = "block";
    } else {
        msg-email.style.display = "block";
    }
   
}