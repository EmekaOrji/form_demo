var inputs = document.querySelectorAll(".animated_input");
var inputsAnimate = document.querySelectorAll(".input_wrapper");
for (let i = 0; i < inputs.length; i++) {
  const e = inputs[i];
  const f = inputsAnimate[i];
  e.addEventListener("focus", function () {
    f.classList.add("input_animate");
  });
  e.addEventListener("blur", function () {
    f.classList.remove("input_animate");
  });
}