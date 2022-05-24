const toggleOn = document.getElementById("on");
const toggleOff = document.getElementById("off");
const background = document.querySelector("body");

let = toggleOff.classList.remove("hidden-off");

//Click handler//
toggleOff.addEventListener("click", function () {
  console.log("click");
  toggleOnBtn(), toggle(), toggleOffBtn();
});

toggleOn.addEventListener("click", function () {
  console.log("click");
  toggleOnBtn(), toggle(), toggleOffBtn();
});

//Toggle bacground to black//
const toggle = function () {
  background.classList.toggle("white");
};

//Toggle switch button to be visible//
const toggleOnBtn = function () {
  toggleOn.classList.toggle("hidden-on");
};

const toggleOffBtn = function () {
  toggleOff.classList.toggle("hidden-off");
};
