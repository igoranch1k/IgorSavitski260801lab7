$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
            }
    });
    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("more");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}