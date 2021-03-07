var facebook = document.getElementsByClassName("card-followers-number");
var header_p = document.getElementsByClassName("header-p");
console.log(header_p);
var total = 0;
for (const followers of facebook) {
    total += parseInt(followers.outerText)
}
header_p[0].innerHTML = `Total Followers: ${total}`;
console.log(total);