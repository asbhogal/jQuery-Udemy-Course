$("#draggable").draggable();
$("#vertical-only-draggable").draggable({axis: "y"});   // SETS AN OPTION FOR DRAGGABLE TO ONLY OCCUR ON THE y AXIS
$("#horizontal-only-draggable").draggable({axis: "x"}); // SETS AN OPTION FOR DRAGGABLE TO ONLY OCCUR ON THE x AXIS

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