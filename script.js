let button = document.querySelector(".clickbox");

button.addEventListener("click", function() {
    if (button.style.backgroundColor === "lightsteelblue") {
        button.style.backgroundColor = "yellow";
        button.style.margin = "40px";
    } else {
        button.style.backgroundColor = "lightsteelblue";
        button.style.margin = "20px";
    }
});
