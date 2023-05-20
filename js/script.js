//Шапка в движении
$(document).ready(function () {
	$(".menu__icon").click(function () {
		$(".menu__body").toggleClass("active");
		$(".menu__icon").toggleClass("active");
		$("body").toggleClass("active");
	});
});