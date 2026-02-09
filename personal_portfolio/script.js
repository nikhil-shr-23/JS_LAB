const alertBtn = document.getElementById("alertBtn");

alertBtn.addEventListener("click", function () {
    alert("Thank you for visiting!");
});

const abtbtn = document.getElementById("aboutBtn");
const abtsec = document.getElementById("about");

abtbtn.addEventListener("click", function () {
    if (abtsec.style.display === "none") {
        abtsec.style.display = "block";
    } else {
        abtsec.style.display = "none";
    }
});

const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

contactBtn.addEventListener("click", function () {
    contactSection.scrollIntoView({ behavior: "smooth" });
});
