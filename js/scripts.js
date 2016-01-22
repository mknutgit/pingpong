//---Business Logic----///

var count = function(number) {
  var item = [];
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      item.push('pingpong');
    }
    else if (i % 5 === 0) {
      item.push('pong');
    }
    else if (i % 3 === 0) {
      item.push('ping');
    }
    else {
      item.push(i);
    }
  }
return item;
};

//--- User Interface Logic -----//

$(document).ready(function(event) {
    $("form#pingpong").submit(function(event){

      var number = $("input#number").val();
      var result = count(number);
      result.forEach(function(entry) {
              $(".result").append("<li>" + entry + "</li>");
            });
  $("#result").show();
  var form = document.getElementById("pingpong");
  form.reset();
  event.preventDefault();

});
});
