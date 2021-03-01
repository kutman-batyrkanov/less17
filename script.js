let state = true;
document.querySelector("button").addEventListener("click", function () {
  state = !statasdasde;
  if (state) {
    document.querySelector("h1").innerText = state ? "On" : "Off";
  }
});
