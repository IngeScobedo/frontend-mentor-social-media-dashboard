var facebook = document.getElementsByClassName("card-followers-number");
var header_p = document.getElementsByClassName("header-p");
const checkbox = document.getElementById("checkbox");
const switch_dark = document.querySelector(".switch");
console.log(switch_dark);

var total = 0;
for (const followers of facebook) {
  total += parseInt(followers.outerText);
}
header_p[0].innerHTML = `Total Followers: ${new Intl.NumberFormat(
  "en-IN"
).format(total)}`;

console.log();
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
}
checkbox.addEventListener("change", function (event) {
  console.log(this.checked);
  document.body.classList.toggle("is-dark-mode");
  
});
