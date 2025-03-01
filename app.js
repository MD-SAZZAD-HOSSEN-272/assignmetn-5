
document.getElementById("change-bg-color").addEventListener("click", function() {
    document.getElementById("body").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215.).toString(16);
})



const blogQuestionBtn = getById("blog-question-btn");

let countFrom23Converted = getConvertedInnerTextById("count-from-23");
const countTo6Converted = getConvertedInnerTextById("count-to-6");

blogQuestionBtn.addEventListener("click", function() {
    window.location.href = "./blog.html"
})

const allBtns = document.querySelectorAll(".completed-btn");

let countBtn = 0;
for (let allBtn of allBtns) {
    allBtn.addEventListener("click", function(event) {
        countBtn++;
        getById("count-from-23").innerText = countFrom23Converted + countBtn;
        getById("count-to-6").innerText = countTo6Converted - countBtn;
        event.target.classList.add("disable")
        alert ("Your Work Successful")
    })
}




