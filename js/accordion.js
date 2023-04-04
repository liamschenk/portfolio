var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /*Toggle between adding and removing the "active" class*/
    this.classList.toggle("active");

    /*Toggle between hiding and showing the active content*/
    var content = this.nextElementSibling;
    content.classList.toggle("animated")
  });
}