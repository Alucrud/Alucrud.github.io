$(".collapsible").attr('data-before','') //Add chevron pointing right for collapsible items

$(".collapsible").click(function () {
	if ($(this).next("ul").is(":visible")) {
		$(this).next("ul").toggle();
		$(this).attr('data-before',''); //Toggle to chevron pointing right
	} else {
		$(this).next("ul").toggle();
		$(this).attr('data-before',''); //Toggle to chevron pointing down
	}
});