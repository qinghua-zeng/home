$(document).ready(function() {

    let showAllPattern = false;


    if (showAllPattern == false) {
        $("#p05").hide();
        $("#p06").hide();
        $("#p07").hide();
        $("#p08").hide();
        $("#p09").hide();
    } else {
        $("#p05").show();
        $("#p06").show();
        $("#p07").show();
        $("#p08").show();
        $("#p09").show();
    }




    $("#patternMore").click(function() {
        if (showAllPattern == false) {
            $("#p05").show();
            $("#p06").show();
            $("#p07").show();
            $("#p08").show();
            $("#p09").show();
            showAllPattern = true;
            $("#patternMoreText").text("Less");
        } else {
            $("#p05").hide();
            $("#p06").hide();
            $("#p07").hide();
            $("#p08").hide();
            $("#p09").hide();
            showAllPattern = false;
            $("#patternMoreText").text("More");
        }

    });

});