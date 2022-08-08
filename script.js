// jQuery instructions begin with string $

// CLICK/HOVER

/*$("#circle").click(function() {                                                       // using string to select id and using click event to parse the following instruction
    alert("circle was clicked");
}); 

$(".square").click(function() {                                                         // ie. WHEN THE SQUARE IS CLICKED, ALERT THE MESSAGE "square was clicked"
    alert("square was clicked");
});

$("div").click(function() {
    alert("div was clicked");
});

$("#circle").click(function() {
    $("p").html("This text has changed");                                                // SELECT THE HTML IN THE P CLASS
});

$("#circle").click(function() {
    alert($("p").html());                                                               // .html CAN BE USED TO EITHER RETRIEVE OR CHANGE THE HTML CONTENT
});

$("#circle").hover(function() {
    alert($("p").html());                                                               // p REFERENCED HERE DOES NOT HAVE A CLASS ASSIGNED, AS IS THE ONLY ONE
})

$("#circle").hover(function() {                                                         // WHEN THE CIRCLE IS HOVERED OVER, PARSE THE FOLLOWING
    $("iframe").attr("src", "https://www.youtube.com/watch?v=BHACKCNDMW8") ;            // GET THE IFRAME ELEMENT AND CHANGE THE ATTRIBUTE FROM ITS ORIGINAL SOURCE TO THE FOLLOWING
})*/

// WEBSITE STYLING

/*$("#circle").click(function() {                                       // WHEN THE CIRCLE IS CLICKED, PARSE THE FOLLOWING.
    $("#circle").css("width", "400px");                                 // RESTYLE THE CIRCLE BY ALTERING ITS CSS
    $("#circle").css("background-color", "red");                        // ie. CHANGE THE BACKGROUND COLOR TO RED
    alert($("#circle").css("height"));                                  //PASSING THE PROPERTY PARAMETER, WITHOUT THE VALUE TO CHANGE IT TO, WILL JUST RETURN THE ORIGINAL VALUE. THIS TAKES PRECEDENCE OVER THE ABOVE TWO, WHICH ARE PARSED AFTER                 
});

$("#btn-body-width").click(function() {                                 //RETURNS THE WIDTH OF A PAGE AT ANY ONE TIME WHEN THE BUTTON IS CLICKED
    alert($("body").css("width"));
});

$("div").click(function() {                                             // MAKES THE ELEMENTS WITHIN THE DIV DISAPPEAR WHEN IT IS CLICKED
    $("div").css("display", "none");                                    // THIS IS MORE EFFICIENT THAN HAVING TO CREATE SEPARATE CLASSES FOR THE SQUARES. HOWEVER, THIS ALSO HIDES THE CIRCLE TOO.
});                          
    
$("div").click(function() {
    $(this).css("display", "none");                                     // ENSURES ONLY THE ELEMENT CLICKED WITHIN THE DIV IS HIDDEN VIA CSS,ie. "this IS THE ELEMENT THAT HAS BEEN CLICKED"
});

$("div").click(function() {
    alert("You clicked on a " + $(this).attr("id"));                    // AS THIS ONLY WORKS FOR ELEMENTS WITH AN ID, ELEMENTS WITH A CLASS WOULD REQUIRE AN IF STATEMENT - SEE BELOW
});
                                                                        
$("div").click(function() {
    if ($(this).attr("id") == "circle") {
        alert("You clicked on a circle");
    } else {
        alert("You clicked on a square")                                // this KEYWORD IS A JAVASCRIPT AND jQUERY ONE
    }
});*/
           
// FADING CONTENT

/*$("div").click(function() {
    $(this).fadeOut();                                                  // FADE OUT THE PARTICULAR DIV ELEMENT WHEN IT IS CLICKED
});

$("div").click(function(){                                              // PERFORMS SIMILAR TO THE CODE IN LINE 49
    $(this).hide();                                                     // FUNCTIONS ALWAYS REQUIRE PARENTHESIS, EVEN WITHOUT OPTIONS
});

$("div").click(function () {
    $(this).fadeOut("slow", function() {
        alert("FadeOut has finished");
    });
});

$("#fadeOutBtnTrigger").click(function() {                              // SELECTS THE BUTTON WITH THE ID fadeOutBtnTrigger. WHEN IT IS CLICKED, PARSE THE FOLLOWING
    $("p").fadeOut();                                                   // FADE OUT THE CONTENTS OF THE p TAG IE. PARAGRAPH. THIS MAKES IT ESSENTIALLY THE SAME AS SETTING ITS DISPLAY TO NONE VIA CSS
});*/

$("#fadeInBtnTrigger").click(function () {                              // TO FIRST FADE IN TEXT, IT MUST BE HIDDEN TO START WITH. CHECK STYLESHEET FOR THIS
    $(".fadeInText").fadeIn();
});