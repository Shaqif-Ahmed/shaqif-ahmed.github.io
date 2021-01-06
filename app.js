const list = document.getElementsByClassName("listbx");
for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
