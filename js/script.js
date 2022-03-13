$(document).ready(function () {
    
    $("#whatDesign").click(function () {
        $(".pDesign").toggle();
        $("#whatDesign").toggle();
       
    });
    $(".pDesign").click(function () {
        $("#whatDesign").toggle();
        $(".pDesign").toggle()
    });

    $("#whatDevelopment").click(function () {
		$(".pDevelopment").toggle();
		$("#whatDevelopment").toggle();
	});
	$(".pDevelopment").click(function () {
		$("#whatDevelopment").toggle();
		$(".pDevelopment").toggle();
    });
    
    $("#whatManagement").click(function () {
		$(".pManagement").toggle();
		$("#whatManagement").toggle();
	});
	$(".pManagement").click(function () {
		$("#whatManagement").toggle();
		$(".pManagement").toggle();
    });
    $("button").click(function () {
        alert($("#name").val() + " we have received your message. Thank you for reaching out to us.")
    })










})