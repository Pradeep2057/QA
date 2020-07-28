const burger = document.querySelector(".burger ");
const aside = document.querySelector(".aside");
const openNav = document.querySelector(".openNav");
const closeNav = document.querySelector(".close");

openNav.addEventListener("click", () => {
  aside.classList.toggle("nav_active");
  burger.classList.toggle("open");
  openNav.style.display ="none";
  closeNav.style.display ="initial";
});

closeNav.addEventListener("click", () => {
  aside.classList.toggle("nav_active");
  burger.classList.toggle("open");
  closeNav.style.display ="none";
  openNav.style.display ="initial";
});

const mainItem1 = document.querySelector(".main-item1 a");
const subItem1 = document.querySelector(".sub1");

mainItem1.addEventListener("click", () => {
  subItem1.classList.toggle("show");
});

const mainItem2 = document.querySelector(".main-item2 a");
const subItem2 = document.querySelector(".sub2");

mainItem2.addEventListener("click", () => {
  subItem2.classList.toggle("show");
});

let count=0;
const time=20;
const counter = document.querySelector(".timer h2");
function updateCounter(){
  if(count< time){
    count++;
    counter.innerHTML=count;
  }
  else{
    clearInterval(TIMER);
    counter.innerHTML="0";
    count=0;
  }
}

const navLinks = document.querySelectorAll(".nav li");
navLinks.forEach(link=>{
  link.addEventListener("click",function(){
 document.querySelector(".nav>.active").classList.remove("active");
 link.classList.add("active");

  })
})


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
    qc: 16,
  },
];

var buttons = document.querySelector("div.optionlist");
buttons.addEventListener("click", getQuestion, true);

function getQuestion(e) {
  if (e.target != e.currentTarget) {
    var id = e.target.id;
    for (let i = 0; i < question.length; i++) {
      var questionNumber = question[i].qc;
      if (id == questionNumber) {
        document.querySelector("h5").innerHTML = question[i].q;
        TIMER=setInterval(updateCounter,1000);
      }
    }
    document.getElementById(id).style.backgroundColor = "red";
    document.getElementById(id).style.color = "white";
    document.getElementById(id).setAttribute("disabled", "");
  }
  e.stopPropagation();
}

var rows = document.querySelector("tr");
rows.addEventListener("click", () => {
  rows.style.backgroundColor = "none";
});

/*================================*/
/*-------Categories---------------*/
/*================================*/
const filterContainer = document.querySelector(".row"),
  filterBtns = filterContainer.children,
  totalFilterBtns = filterBtns.length,
  categoryItems = document.querySelectorAll(".option"),
  totalCategoryItems = categoryItems.length;

for (let i = 0; i < totalFilterBtns; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer
      .querySelector(".activesection")
      .classList.remove("activesection");
    this.classList.add("activesection");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalCategoryItems; k++) {
      if (filterValue === categoryItems[k].getAttribute("data-category")) {
        categoryItems[k].classList.remove("hide");
        categoryItems[k].classList.add("show");
      } else {
        categoryItems[k].classList.remove("show");
        categoryItems[k].classList.add("hide");
      }
    }
  });
}
