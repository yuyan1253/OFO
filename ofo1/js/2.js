$(function(){
	$('.a2').mouseenter(function(){
		$(this).addClass('active');
		$('.sp1').animate({'width':'33px'})
	});
	  $('.a2').mouseleave(function(){
		$(this).removeClass('active');
		$('.sp1').animate({'width':0})
	});
	$('.a3').mouseenter(function(){
		$(this).addClass('active');
		$('.sp2').animate({'width':'65px'})
	});
	$('.a3').mouseleave(function(){
		$(this).removeClass('active');
		$('.sp2').animate({'width':0})
	});
	$('.a4').mouseenter(function(){
		$(this).addClass('active');
		$('.sp3').animate({'width':'50px'})
	})
	$('.a4').mouseleave(function(){
		$(this).removeClass('active');
		$('.sp3').animate({'width':0})
	});
	$('.a5').mouseenter(function(){
		$(this).addClass('active');
		$('.sp4').animate({'width':'65px'})
	})
	$('.a5').mouseleave(function(){
		$(this).removeClass('active');
		$('.sp4').animate({'width':0})
	});
	$('.a1').mouseenter(function(){
		$(this).addClass('active');
		$('.sp5').animate({'width':'65px'})
	})
	$('.a1').mouseleave(function(){
		$(this).removeClass('active');
		$('.sp5').animate({'width':0})
	});
})