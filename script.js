let state = true;
document.querySelector('button').addEventListener('click', function() {
    state = !state;
    document.querySelector('h1').innerText = state ? "On" : "Off";
});