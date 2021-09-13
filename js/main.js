$(document).ready(function() {

    let showAllPattern = false;
    let showAllAccessory = false;


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

    if (showAllAccessory == false) {
        $("#a01").hide();
        $("#a02").hide();

    } else {
        $("#a01").show();
        $("#a02").show();

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
            $("#patternMoreText").text("All Patterns");
        }
    });

    $("#accessoryMore").click(function() {
        if (showAllPattern == false) {
            $("#a01").show();
            $("#a02").show();
            showAllPattern = true;
            $("#accessoryMoreText").text("Less");
        } else {
            $("#a01").hide();
            $("#a02").hide();
            showAllPattern = false;
            $("#accessoryMoreText").text("All");
        }
    });

});