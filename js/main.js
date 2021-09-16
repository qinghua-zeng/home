$(document).ready(function() {

    let showAllPattern = false;
    let showAllAccessory = false;
    let showAllWidth = false;






    //1=========================================
    //showAllPattern
    if (showAllPattern == false) {
        $("#slsg").hide();
        $("#swsg").hide();
        $("#slhf").hide();
        $("#swhf").hide();
        $("#slof").hide();
        $("#swof").hide();
        $("#slsf").hide();
        $("#swsf").hide();
        $("#slcds").hide();
        $("#swcds").hide();
        $("#slds").hide();
        $("#swds").hide();
        $("#ptg").hide();
        $("#swcc").hide();
        $("#swis").hide();

    } else {
        // $("#p05").show();
        // $("#p06").show();
        // $("#p07").show();
        // $("#p08").show();
        // $("#p09").show();
    }

    $("#patternMore").click(function() {
        if (showAllPattern == false) {
            $("#slsg").show();
            $("#swsg").show();
            $("#slhf").show();
            $("#swhf").show();
            $("#slof").show();
            $("#swof").show();
            $("#slsf").show();
            $("#swsf").show();
            $("#slcds").show();
            $("#swcds").show();
            $("#slds").show();
            $("#swds").show();
            $("#ptg").show();
            $("#swcc").show();
            $("#swis").show();

            showAllPattern = true;
            $("#patternMoreText").text("Show Less");
        } else {
            $("#slsg").hide();
            $("#swsg").hide();
            $("#slhf").hide();
            $("#swhf").hide();
            $("#slof").hide();
            $("#swof").hide();
            $("#slsf").hide();
            $("#swsf").hide();
            $("#slcds").hide();
            $("#swcds").hide();
            $("#slds").hide();
            $("#swds").hide();
            $("#ptg").hide();
            $("#swcc").hide();
            $("#swis").hide();
            showAllPattern = false;
            $("#patternMoreText").text("Show All");
        }
    });

    //2=========================================
    //showAllAccessory
    if (showAllAccessory == false) {
        $("#a01").hide();
        $("#a02").hide();

    } else {
        $("#a01").show();
        $("#a02").show();

    }

    $("#accessoryMore").click(function() {
        if (showAllPattern == false) {
            $("#a01").show();
            $("#a02").show();
            showAllPattern = true;
            $("#accessoryMoreText").text("Show Less");
        } else {
            $("#a01").hide();
            $("#a02").hide();
            showAllPattern = false;
            $("#accessoryMoreText").text("Show All");
        }
    });


    //3 showAllWidth============================
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

    //=============
    $("#widthMore").click(function() {
        if (showAllWidth == false) {
            $("#w8090").show();
            $("#w90100").show();
            $("#w100110").show();
            $("#w110120").show();
            $("#w120130").show();
            showAllWidth = true;
            $("#widthMoreText").text("Show Less");
        } else {
            $("#w8090").hide();
            $("#w90100").hide();
            $("#w100110").hide();
            $("#w110120").hide();
            $("#w120130").hide();
            showAllWidth = false;
            $("#widthMoreText").text("Show All");
        }
    });

    //=============
    $("#searchButton").click(function() {
        var s1 = "https://www.getagate.co.nz/search?search_sale_keyword=";
        var s2 = $("#searchTerm").val();

        window.location.href = s1 + s2;
        //alert(s1 + s2);
    });

    $("#searchTerm").keypress(function(e) {
        if (e.which == 13) {
            var s1 = "https://www.getagate.co.nz/search?search_sale_keyword=";
            var s2 = $("#searchTerm").val();
            //window.location.href = s1 + s2;
            window.location.href = s1 + s2;
        }
    });

});