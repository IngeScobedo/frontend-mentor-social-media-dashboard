var facebook = document.getElementsByClassName("card-followers-number");
var header_p = document.getElementsByClassName("header-p");
const checkbox = document.getElementById("checkbox");
const switch_dark = document.querySelector(".switch");

var total = 0;
for (const followers of facebook) {
  total += parseInt(followers.outerText);
}
header_p[0].innerHTML = `Total Followers: ${new Intl.NumberFormat(
  "en-IN"
).format(total)}`;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
}
checkbox.addEventListener("change", function (event) {
  document.body.classList.toggle("is-dark-mode");
  
});

let num = 10;

if(num > 5){
    let num = 25;
}

num++;
