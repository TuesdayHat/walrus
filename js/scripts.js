$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $("#darkButton").click(function() {
    $("body").removeClass();
    $("body").addClass("darkMode");
    $("#darkButton").addClass("hide");
    $("#lightButton").removeClass();
  });

  $("#lightButton").click(function() {
    $("body").removeClass();
    $("body").addClass("lightMode");
    $("#lightButton").addClass("hide");
    $("#darkButton").removeClass();
  });

  $("p").click(function(){
    $("p").addClass("borders");
  });
});
