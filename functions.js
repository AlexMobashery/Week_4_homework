$(document).ready(function(){
console.log('amIreal?')

//expand
	var hiddenParagraph = $('#show-this-on-click');
	function show () {
		$(hiddenParagraph).slideDown().show();
		$(".readless").removeClass('hide');
		$(".readmore").addClass('hide');
	}
	//$(".readmore").click(function(event){
	//event.preventDefault();

	$(".readmore a").on("click", function(event){
		console.log(this, arguments)
		event.preventDefault()
		show()
		console.log("amIreal")
	})

	//$(".readmore").click(show);
	//});


	//expand learn more
	//function show () {
	var hiddenLearnmore = $('#learnmoretext');
	function show2 () {
		$(hiddenLearnmore).slideDown().show();
		$(".learnmore").removeClass('hide2');
		$(".learnmore").addClass('hide2');
	}
	$(".learnmore").click(show2);
	
		//$(hiddenLearnmore).slideDown().show();

	//shrink paragraph
	function hide (){
	//	$('#show-this-on-click').addClass('hide');
		var hiddenParagraph = $('#show-this-on-click');
		$(hiddenParagraph).hide().slideUp();
		
		$(".readless").addClass('hide');
		$(".readmore").removeClass('hide');}

		$(".readless").click(function(event){
		event.preventDefault();
	})
	$(".readless").click(hide);
	//shrink learn more
	//function hide () {
		//var hiddenLearnmore = $('#learnmoretext');
		//$(hiddenLearnmore).slideUp();

		//$(".learnmore").addClass('hide2');
		//$(".learnmore").removeClass('hide2');}
	
});

	