//---Business Logic----///

var count = function(number) {
  var item = [];
  for (var i = 1; i <= number; i++) {
        item.push(i);
  }
return item;
};

//--- User Interface Logic -----//

$(document).ready(function(event) {
    $("form#pingpong").submit(function(event){

      var number = $("input#number").val();
      var result = count(number);

  $(".result").text(result);
  $("#result").show();
  event.preventDefault();

});
});