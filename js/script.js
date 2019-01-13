var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-e-mail]");
var messagetext = popup.querySelector("[name=message-text]");
var form = popup.querySelector("form");



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!name.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Введите имя и фамилию");
    } else {
        if (!email.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
            console.log("Введите адрес вашей электронной почты");
        } else {
            if (!messagetext.value) {
                evt.preventDefault();
                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
                console.log("Введите текст письма");
            }
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});