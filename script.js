const burger = document.querySelector(".burger");
const aside = document.querySelector(".aside");

burger.addEventListener("click", () => {
  aside.classList.toggle("nav_active");
  burger.classList.toggle("open");
});

const mainItem1 = document.querySelector(".main-item1 a");
const subItem1 = document.querySelector(".sub1");

mainItem1.addEventListener("click",()=>{
    subItem1.classList.toggle("show");
});

const mainItem2 = document.querySelector(".main-item2 a");
const subItem2 = document.querySelector(".sub2");

mainItem2.addEventListener("click",()=>{
    subItem2.classList.toggle("show");
});
  

let time = 20;
function updateCounter() {
  if (time >= 0) {
    document.querySelector(".timer h2").innerHTML = `${time}`;
    time--;
  } else {
    document.querySelector(".timer h2").innerHTML = 20;
  }
}

const question = [
  {
    q: "What is your name?",
    qc: 1,
  },
  {
    q: "What is your father name?",
    qc: 2,
  },
  {
    q: "What is your mother name?",
    qc: 3,
  },
  {
    q: "What is your grandfather name?",
    qc: 4,
  },
  {
    q: "What is your grandmother name?",
    qc: 5,
  },
  {
    q: "What is the full form of KON?",
    qc: 6,
  },
  {
    q: "What is your name----?",
    qc: 90,
  },
];

var buttons = document.querySelector("table");
buttons.addEventListener("click", getQuestion, false);

function getQuestion(e) {
  if (e.target != e.currentTarget) {
    var id = e.target.id;
    for (let i = 0; i < question.length; i++) {
      var questionNumber = question[i].qc;
      if (id == questionNumber) {
        document.querySelector("h5").innerHTML = question[i].q;
        setInterval(updateCounter, 1000);
      }
    }
    document.getElementById(id).style.backgroundColor = "red";
    // e.target.style.backgroundColor = "red";
  }
  e.stopPropagation();
}

var rows = document.querySelector("tr");
rows.addEventListener("click", () => {
  rows.style.backgroundColor = "none";
});
