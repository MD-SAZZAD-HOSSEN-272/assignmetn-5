
document.getElementById("change-bg-color").addEventListener("click", function() {
    document.getElementById("body").style.backgroundColor = `#${Math.floor(Math.random() * 16777214).toString(16)}`;
})



const blogQuestionBtn = getById("blog-question-btn");

let countFrom23Converted = getConvertedInnerTextById("count-from-23");
const countTo6Converted = getConvertedInnerTextById("count-to-6");

blogQuestionBtn.addEventListener("click", function() {
    window.location.href = "./blog.html"
})

const timeDay = document.getElementById("time-day")
const timeDayP = document.createElement("p");
timeDayP.innerText = new Date().toLocaleDateString("en-BD",{weekday: "short"});
timeDay.appendChild(timeDayP)

const timeDate = document.getElementById("time-date");
const timeDateP = document.createElement("p");
timeDateP.innerText = new Date().toLocaleDateString("en-BD", {month: "short", day: "numeric", year: "numeric"}).replaceAll(",", " ");
timeDate.appendChild(timeDateP)

const allBtns = document.querySelectorAll(".completed-btn");
const addHistory = document.getElementById("activity-container")

let countBtn = 0;
for (let allBtn of allBtns) {
    allBtn.addEventListener("click", function(event) {
        countBtn++;
        getById("count-from-23").innerText = countFrom23Converted + countBtn;
        const countForAlert = getById("count-to-6").innerText = countTo6Converted - countBtn;
        event.target.setAttribute("disabled", true)
        event.target.style.opacity = "0.2"
        event.target.style.cursor = "default"
        alert ("Board updated successfully")
       
        setTimeout(() => {
            if(countForAlert === 0) {
                alert ("Congratulation you have completed all task")
            }
        }, 200);

        const historyContent = event.target.parentElement.parentElement.querySelector("h2").innerText;
        

        const addHistory = document.getElementById("activity-container")
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="mt-4 mx-5 main-bg-color p-3 rounded-xl text-[#000000a9]">
                <h3>You have completed the task ${historyContent} at ${new Date().toLocaleTimeString()}</h3>
            </div>
        `
        addHistory.appendChild(div)
    })
}

document.getElementById("clear-btn").addEventListener("click", function() {
    addHistory.innerHTML = "";
})





