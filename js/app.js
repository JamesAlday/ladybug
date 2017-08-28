(function($, document, window){
	$(document).ready(function(){
		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

    	$(document).snow({ SnowImage: "images/floatingfrog.gif", Quantity: 20 });

    	// Countdown Timer
    	var to = new Date();
    	var daysToAdd = 5;

		if (window.location.hash) {
			daysToAdd = parseInt(window.location.hash.split('#')[1].split(':'));
		}

    	var from = new Date();
    	from.setDate(to.getDate() + daysToAdd);
    	from.setHours(20);
    	from.setMinutes(0);

    	var dif = Math.floor((from.getTime() - to.getTime())/1000);

		var clock = $('.countdown').FlipClock(dif,{
			clockFace: 'DailyCounter',
			countdown: true,
		});

	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  	  	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  		ga('create', 'UA-47278397-5', 'auto');
  		ga('send', 'pageview');
	});
})(jQuery, document, window);