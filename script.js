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
});

$("#fadeInBtnTrigger").click(function () {                              // TO FIRST FADE IN TEXT, IT MUST BE HIDDEN TO START WITH. CHECK STYLESHEET FOR THIS
    $(".fadeInText").fadeIn();
});*/

 // CREATING A BUTTON THAT WHEN CLICKED, EITHER FADE-INS THE RESPECTIVE p CONTENT IF IT ISN'T PRESENT, OR FADES IT OUT IF IT IS

            // METHOD ONE - FUNCTIONS AND CSS

            /*$("#toggle").click(function() {                                                   // BECAUSE JAVASCRIPT NEEDS TO KNOW FIRSTLY WHETHER THE CONTENT IS THERE TO BEGIN WITH, A CONDITIONAL IF STATEMENT MUST BE USED - LEVERAGING THE CSS DISPLAY PROPERTY WILL HELP WITH THIS CHECK
                if ($("#toggle-text").css("display") == "none") {                               // IF THE CSS DISPLAY PROPERTY OF THE p ID ELEMENT IS EQUAL TO NONE...
                    $("#toggle-text").fadeIn();                                                 // ...FADE THE ELEMENT IN
                } else {                                                                        // OTHERWISE ...
                    $("#toggle-text").fadeOut();                                                // ... FADE IT OUT - IF THE CSS DISPLAY PROPERTY IS NOT EQUAL TO NONE
                }                                                                               
            }); */ 

            // METHOD TWO - USING A VARIABLE, WHICH KEEPS TRACK OF THE STATE OF THE PARAGRAPH TEXT ELEMENT ON THE PAGE AND PARSING INSTRUCTIONS AS A RESULT

            /*var textDisplaying = true;                                                          // CREATE A BOOLEAN VARIABLE AND ASSIGN IT THE VALUE OF TRUE, SINCE BY DEFAULT THE CONTENT WILL DISPLAY ON PAGE LOAD
            
            $("#toggle").click(function() {                                                     // WHEN THE TOGGLE BUTTON IS CLICKED, PERFORM THE FOLLOWING CONDITIONAL CHECK...
                if (textDisplaying) {                                                           // IF THE VARIABLE IS TRUE, PARSE THE FOLLOWING... NB. - CHECKING THE DEFAULT VALUE OF THIS VARIABLE AGAINST TRUE DOESN'T REQUIRE THE == COMPARISON, AS BY DEFAULT IT IS TRUE. THIS IS THEREFORE OPTIONAL
                    $("#toggle-text").fadeOut(function() {                                      // FADE OUT THE TOGGLE TEXT ELEMENT CONTENT AND PERFORM THE FOLLOWING CALLBACK:
                        textDisplaying = false;                                                 // SET THE BOOLEAN VARIABLE TO FALSE. THIS IS TO ENSURE THE CHECK THEN PARSES TO THE 'ELSE' WHEN THE BUTTON TOGGLE IS TRIGGERED AGAIN
                    });
                } else {
                    $("#toggle-text").fadeIn(function() {                                       // IF THE BOOLEAN VARIABLE IS SET TO FALSE, FADE IN THE CONTENTS OF THE TOGGLE TEXT ELEMENT, AND PERFORM THE FOLLOWING CALLBACK:
                        textDisplaying = true;                                                  // CHANGE THE BOOLEAN VARIABLE BACK TO TRUE. THIS IS TO ENSURE THE CHECK THEN RETURNS BACK TO THE START, OTHERWISE THE CONDITIONS WON'T BE MET AND THE FADE-IN AND FADE-OUT WON'T PERFORM PROPERLY
                    });
                }                                                                                
            });*/

            // ALTHOUGH METHOD ONE IS GENERALLY NEATER, THERE ARE SITUATIONS WHERE THE INFORMATION CANNOT BE RETRIEVED FROM A CSS PROPERTY, MAKING METHOD TWO HERE IDEAL

            // FADING CONTENT IS A SPECIFIC EXAMPLE OF THE GENERAL ANIMATING CONTENT - SEE BELOW

$("#circle").click(function () {
    $(this).animate({width:"400px"});           // CSS DECLARATIONS NEED TO BE PASSED AS ARRAYS USING {} AS THERE WILL LIKELY BE MULTIPLE
})
