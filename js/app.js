(function($, document, window){
	$(document).ready(function(){
		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

  		$("[class^=year]").each((i, el) => {
  			var year = new Date().getFullYear();
  			el.innerHTML = year + (parseInt(el.className.replace("year", "")) || 0);
  		});

	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  	  	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  		ga('create', 'UA-47278397-5', 'auto');
  		ga('send', 'pageview');
	});
})(jQuery, document, window);
