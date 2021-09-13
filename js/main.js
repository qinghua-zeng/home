$(document).ready(function() {

    let showAllPattern = false;
    let showAllAccessory = false;
    let showAllWidth = false;

    //showAllPattern
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

    //showAllAccessory
    if (showAllAccessory == false) {
        $("#a01").hide();
        $("#a02").hide();

    } else {
        $("#a01").show();
        $("#a02").show();

    }


    //=========================================
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

    //=========================================
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


    //showAllWidth
    if (showAllWidth == false) {
        $("#w8090").hide();
        $("#w90100").hide();
        $("#w100110").hide();
        $("#w110120").hide();
        $("#w120130").hide();


    } else {
        $("#w8090").show();
        $("#w90100").show();
        $("#w100110").show();
        $("#w110120").show();
        $("#w120130").show();
    }

    //=========================================
    $("#widthMore").click(function() {
        if (showAllWidth == false) {
            $("#w8090").show();
            $("#w90100").show();
            $("#w100110").show();
            $("#w110120").show();
            $("#w120130").show();
            showAllWidth = true;
            $("#widthMoreText").text("Less");
        } else {
            $("#w8090").hide();
            $("#w90100").hide();
            $("#w100110").hide();
            $("#w110120").hide();
            $("#w120130").hide();
            showAllWidth = false;
            $("#widthMoreText").text("All");
        }
    });

});