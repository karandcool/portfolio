//change color of navbar after scroll. add the sticky class in the navbar.
$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY >= 50){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
	});
	$(".menu_btn").click(function(){
		$('.navbar .menu').toggleClass('start');
	});
	
});


