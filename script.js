let state = true;
document.querySelector("#example-1 button").addEventListener("click", function () {
    state = !statasdasde;
    if (state) {
      document.querySelector("#example-1 h1").innerText = state ? "On" : "Off";
    }
  });

let container = 0;

document.querySelector("#example-2 button").addEventListener("click", function () {
    container++;
    document.querySelector("#example-2 h1").innerText = container;
  });

 let container2 = "";

document.querySelector("#example-3 input").addEventListener("input", function () {
    container2 = this.value.trim();
    document.querySelector("#example-3 h1").innerText = "Your name is";
  });


