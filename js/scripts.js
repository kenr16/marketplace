$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var inputItems = ["name", "lastname", "address1", "address2", "city"];
    inputItems.forEach(function(entry) {
      var userInput = $("input#"+entry).val();
      $("."+entry).text(userInput);
    });



    // var name1Input = $("input#name").val();
    // var person2Input = $("input#lastName").val();
    // var animalInput = $("input#address1").val();
    // var exclamationInput = $("input#address2").val();
    // var cityInput = $("input#city").val();

    var groceryItems = ["grocery1", "grocery2", "grocery3"];
    var groceryArray = [];
    groceryItems.forEach(function(groceryItem) {
      var userInput = $("input#"+groceryItem).val();
      if (userInput !== "") {
        groceryArray.push(userInput);
      }
    });
    groceryArray.sort();
    var upperGroceryArray = [];
    groceryArray.forEach(function(grocer) {
      var inputPoint = grocer.toUpperCase();
      upperGroceryArray.push(inputPoint);
    });
    var increment = 0;
    groceryItems.forEach(function(groceryItem) {
      alert(upperGroceryArray[increment]);
      $(".site3").append("<li>"+upperGroceryArray[increment]+"</li>");
      increment++;
    });

    //$(".city").text(cityInput);




    var stateInput = $("#stateSelect").val();

    var flavorInput = $("input:radio[name=flavor]:checked").val();

    var dateInput = $("#date").val();

    // $(".name").text(name1Input);
    // $(".lastName").text(person2Input);
    // $(".address1").text(animalInput);
    // $(".address2").text(exclamationInput);
    // $(".city").text(cityInput);

    $(".state").text(stateInput);
    $(".flavor").text(flavorInput);
    $(".date").text(dateInput);

    $("#story").show();

    event.preventDefault();
  });

  $(".clickable1").click(function() {
    $(".show1").fadeIn(750);
    $(".show2").fadeOut(750);
    $(".show3").fadeOut(750);
  });

  $(".clickable2").click(function() {
    $(".show2").fadeIn(750);
    $(".show1").fadeOut(750);
    $(".show3").fadeOut(750);
  });

  $(".clickable3").click(function() {
    $(".show3").fadeIn(750);
    $(".show1").fadeOut(750);
    $(".show2").fadeOut(750);
  });
});
