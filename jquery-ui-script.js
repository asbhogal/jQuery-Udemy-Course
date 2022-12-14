$("#draggable").draggable();
$("#vertical-only-draggable").draggable({
    axis: "y"                                       // SETS AN OPTION FOR DRAGGABLE TO ONLY OCCUR ON THE y AXIS
});   

$("#horizontal-only-draggable").draggable({
    axis: "x"                                       // SETS AN OPTION FOR DRAGGABLE TO ONLY OCCUR ON THE x AXIS
}); 

$("#reset-btn").click(function () {
    $("#draggable").animate ({
        top: "0px",
        left: "0px"
    });
    $("#vertical-only-draggable").animate ({
        top: "0px",
        left: "0px"
    });
    $("#horizontal-only-draggable").animate ({
        top: "0px",
        left: "0px"
    });
});

$("#contained-draggable").draggable({containment: "#container"});   // PERMITS THE DRAGGABLE REGION TO ONLY THE INSIDE OF THE CONTAINER

// NB. A p TAG WILL ONLY MOVE UP AND DOWN IRRESPECTIVE OF WHETHER axis y IS ADDED DUE TO THE P STRETCHING THE ENTIRE WIDTH OF ITS PARENT CONTAINER
// CHANGING THE p TAG TO A SPAN WILL RESOLVE THE ABOVE AND ALLOW FREE MOVEMENT ACROSS x AND y AXIS

$("#resizable-div").resizable();                // ENABLES THE DIV TO BE RESIZED FREELY ALONG THE x AND y AXIS
$("#grid-resizable-div").resizable({            // 'SNAPS' THE RESIZE TO 50px WIDTH ALONG THE x AND y AXIS
    grid: 50
});

$("#initial-resizer").resizable({
    alsoResize: "#also-resizes",
    resize: function(event, ui) {                       // THE CALLBACK FUNCTION WHICH PERFORMS THE FOLLOWING EVENT DURING THE RESIZE - CHECK THE WIDTH OF THE DIV AND IF IT IS BIGGER THAN 800 px, RETURN AN ALERT IN THE USER'S BROWSER
        if ($("#initial-resizer").width() > 800) {      // THE JS .width IS USED TO RETRIEVE THE VALUE, AS THE .css ONE WOULD ALSO RETURN THE px MEASUREMENT, WHICH IS NOT REQUIRED IN THIS CASE
            alert("bigger than 800px")                  // PARSED WHEN THE CONDITION ON LINE 38 IS FULFILLED
        }
    }
});

// IN ORDER TO PARSE THE ALERT, THE WIDTH MUST FIRST BE RETRIEVED BEFORE IT CAN BE COMPARED TO IN THE CONDITIONAL IF CHECK
// NB. THE ALERT DOESN'T STOP THE WIDTH RESIZING PAST 800, THIS STILL CONTINUES AND IS SEEN WHEN THE ALERT IS DISMISSED
// THE FUNCTION LOOKS FOR AOCCURS DURING THE RESIZING OF THE DIV AND PARSES THE FOLLOWING ON LINE 39 IF THE CONDITION STATED ON THE LINE ABOVE IS FULFILLED
// THIS IS AN EXAMPLE OF HOW TO LEVERAGE CALLBACK FUNCTIONS TO CHANGE THE FLOW, BEHAVIOUR OR CONTENT OF A PAGE TRIGGERED BY A PREVIOUS ACTION
 // ADDING $("also-resizes").resizable; WILL ALSO ALLOW THE DIV TO BE MANUALLY ADJUSTED DIRECTLY

 $("#small-box").draggable();                                   // SET THE DIV TO BE DRAGGED WITH THE .draggable PROPERTY
 $("#main-box").droppable({                                     // SET THE DIV TO HAVE THE OTHER DIV DROPPED INTO WITH THE .droppable PROPERTY
    drop: function() {                                          // WHEN THE DRAGGABLE DIV IS MOVED TO THE DROPPABLE DIV, PARSE THE FOLLOWING DROP FUNCTION
        $("#main-box").css("background-color", "red");          // CHANGE THE css PROPERTY OF background-color OF THE DROPPABLE DIV TO RED. MANY ACTIONS CAN BE PLACED HERE.
    }
 })

 // THE event AND ui PARAMETERS CAN BE PASSED TO THIS drop FUNCTION - SEE THE API DOCUMENTATION
 // PASSING THE event PARAMETER AND RUNNING A CONSOLE LOG ON IT WILL SHOW MANY PROPERTIES AND VALUES, INCL. toElement ie. THE ELEMENT IT WAS DRAGGED TO

 $("#accordion").accordion();

 $("#sortable-list").sortable();

