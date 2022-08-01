// jQuery instructions begin with string $

$("#circle").click(function() { // using string to select id and using click event to parse the following instruction
    alert("circle was clicked");
}); 

$(".square").click(function() {
    alert("square was clicked");
});

$("div").click(function() {
    alert("div was clicked");
});

$("#circle").click(function() {
    $("p").html("This text has changed");                     //SELECT THE HTML IN THE P CLASS
});