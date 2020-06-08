function validateForm() {
  var x = document.forms["myForm"]["fshow"].value;
  if (x == "") {
    alert("Write the name of your favourite Netflix show!");
    return false;}
  }


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("title").style.color = "red";
  } else {
    document.getElementById("title").style.color = "white";
  }
  }
