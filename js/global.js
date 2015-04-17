$("#owl-demo").owlCarousel({

  autoPlay: 3000,

  items : 2,
  lazyLoad : true,

  itemsDesktop : [1199,3],
  itemsDesktopSmall : [979,3]

   	  // navigation : true, // Show next and prev buttons
      // slideSpeed : 300,
      // paginationSpeed : 400,
      // singleItem:true
 
      // // "singleItem:true" is a shortcut for:
      // // items : 1, 
      // // itemsDesktop : false,
      // // itemsDesktopSmall : false,
      // // itemsTablet: false,
      // // itemsMobile : false

});



$(document).foundation();

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(document).on('close.fndtn.alert-box', function(event) {
  console.info('An alert box has been closed!');
});


$("#slider").animatedScroll(
  {
    duration: 'slow', 
    easing: 'swing'
  }
);


