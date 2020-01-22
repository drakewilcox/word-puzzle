$(document).ready(function()  {
  $("form.words").submit(function(event)  {
    var string = $("input#sentence").val();
    var letters = string.split('');
    // console.log(letters);
    for (var index = 0; index < letters.length; index +=1) {
      if (letters[index] === "a" || letters [index] === "e" || letters[index] === "i" || letters[index] === "o" || letters[index] === "u") {
        letters.splice(index, 1, "-" )
      }
    }
  
    $("p").text(letters.join(''));
    $("form.words").hide();

    event.preventDefault();

  });
});