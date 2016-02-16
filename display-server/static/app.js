var sizeMainPanels = function () {
	var displayTextHeight = $('.display-text').height();
	var windowHeight = $(window).height();

	$('.main').height(windowHeight - displayTextHeight);
};

var setDisplayText = function (msg) {
	$('.display-text').text(msg.text);
};

$(function () {

	$(window).on('resize', sizeMainPanels);
	sizeMainPanels();

	var socket = io();

	socket.on('display-text', setDisplayText);
});
