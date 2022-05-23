const toggleOn = document.getElementById("on");
const toggleOff = document.getElementById("off");
const background = document.querySelector("body");

let = toggleOff.classList.remove("hidden-off");

toggleOff.addEventListener("click", function () {
  console.log("click");
  toggle();
});

const toggle = function () {
  background.classList.toggle("white");
};
