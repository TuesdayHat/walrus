$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $("button#darkButton").click(function() {
    $("body").removeClass();
    $("body").addClass("darkMode");
  });

  $("button#lightButton").click(function() {
    $("body").removeClass();
    $("body").addClass("lightMode");
  });
});
