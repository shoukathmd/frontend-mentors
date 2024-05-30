console.log("test");
const submitButton = document.getElementById("button");

const thanksContainer = document.querySelector(".thanks-container");

const mainContainer = document.querySelector("section")
submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

const ratings =  document.querySelectorAll(".rating-para");
const finalRating = document.querySelector(".final-rating");
ratings.forEach(element => {
    element.addEventListener("click", () => {
        finalRating.innerHTML = element.innerHTML;
    })
});