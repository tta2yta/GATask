let circles = document.querySelectorAll(".circle");
var light = 0,
  t;

function trafficLight() {
  t = setInterval(() => {
    changeLight();
  }, 3000);
}
function clearTime() {
  clearInterval(t);
  t = 0;
  light = 0;
  circles[0].classList.add("col1");
  circles[1].classList.remove("col2");
  circles[2].classList.remove("col3");
}

function changeLight() {
  circles[light].classList = "circle";
  light++;
  if (light > 2) light = 0;
  const selectLight = circles[light];
  selectLight.classList.add(selectLight.getAttribute("color"));
}
