$("#draggable").draggable();
$("#vertical-only-draggable").draggable({axis: "y"});   // SETS AN OPTION FOR DRAGGABLE TO ONLY OCCUR ON THE y AXIS
$("#horizontal-only-draggable").draggable({axis: "x"});

$("#reset-btn").click(function () {
    $("#draggable").animate ({
        top: "0px",
        left: "0px"
    });
});
