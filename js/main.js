  (function($) {
      'use strict';
      jQuery(document).ready(function() {

        $('.portfolio-popup').magnificPopup({
      	  	type: 'image',
      	  		gallery: {
      	      		enabled: true
      	  		},
      	  	zoom: {
      	      	enabled: true,
      	      	duration: 300, // don't foget to change the duration also in CSS
      	      	opener: function(element) {
      	          return element.find('img');
      	      	}
      	  	}
      	});

      });
  })(jQuery);
