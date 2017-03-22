$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name1Input = $("input#name").val();
    var person2Input = $("input#lastName").val();
    var animalInput = $("input#address1").val();
    var exclamationInput = $("input#address2").val();
    var verbInput = $("input#city").val();

    var stateInput = $("#stateSelect").val();

    var flavorInput = $("input:radio[name=flavor]:checked").val();

    var dateInput = $("#date").val();

    $(".name").text(name1Input);
    $(".lastName").text(person2Input);
    $(".address1").text(animalInput);
    $(".address2").text(exclamationInput);
    $(".city").text(verbInput);

    $(".state").text(stateInput);
    $(".flavor").text(flavorInput);
    $(".date").text(dateInput);

    $("#story").show();

    event.preventDefault();
  });

  $(".clickable1").click(function() {
    $(".show1").fadeToggle(750);
    $(".show2").fadeOut(750);
    $(".show3").fadeOut(750);
  });

  $(".clickable2").click(function() {
    $(".show2").fadeToggle(750);
    $(".show1").fadeOut(750);
    $(".show3").fadeOut(750);
  });

  $(".clickable3").click(function() {
    $(".show3").fadeToggle(750);
    $(".show1").fadeOut(750);
    $(".show2").fadeOut(750);
  });
});
