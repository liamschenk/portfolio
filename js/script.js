var acc = document.getElementsByClassName("accordion-button");
var spantime = document.getElementById("time");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /*Toggle between adding and removing the "active" class*/
    this.classList.toggle("active");

    /*Toggle between hiding and showing the active content*/
    var content = this.nextElementSibling;
    content.classList.toggle("animated");
  });
}

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  spantime.textContent =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
}

setInterval(time, 1000);