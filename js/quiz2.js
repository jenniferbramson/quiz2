// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next bullet point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('You clicked a link. Good for you!');
	});

  var children = $('.changeColors').children();

  for(var i=0; i < children.length; i++) {
    $(children[i]).css({"color": "red"});
  }

	console.log("This is a message for you!!!");
})(jQuery);


$('#press').click(function(e) {
  hide();
});

function hide() {
  $('.lonely').fadeOut("slow");
  $('h1').fadeOut("slow");
  $('button').fadeOut("slow");
  $('section').fadeOut("slow");
  $('nav').fadeOut("slow");
  $('img').fadeOut("slow");
  $('#customMessage').fadeIn("slow");
}

// I tried to make snow fall on top of the document, but failed and put this rainbow image instead.
$('#fun').click(function(e) {
  $('img').fadeIn("slow");
});

$('nav').hover(function(e) {
  $('.accordEle').slideDown();
}, function(e) {
  $('.accordEle').slideUp();
});