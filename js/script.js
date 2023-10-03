var spantime = document.getElementById("time");

var storedTheme =
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  spantime.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
}

setInterval(time, 1000);
