$(window).on('load',function(){
  // WOW
  wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      })
  $('body').removeClass('uipl-loading');
  setTimeout(function(){
    $('.perloader').addClass('uipl-loaded');
      setTimeout(function(){
      $('.perloader').fadeOut('slow');
      $('.seo-box').addClass('active');
      setTimeout(function(){
        wow.init();
        $('.seo-box ul li').each(function(){
          $(this).addClass('fadeInLeft');
        });
        //Scroll arrow appear
        setTimeout(function(){
          $('#scroll-down').addClass('visible-elem');
        },2000);
      },1500);
    },1200);
  },100);
  
});
$(function(){

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 

  
  
  

  // Parallax Movement			
	var $parallaxContainer = $(".parallax-container");
	var $parallaxItems = $parallaxContainer.find(".parallax");
	var fixer = 0.0008;
	$(document).on("mousemove", function(event){					
		var pageX =  event.pageX - ($parallaxContainer.width() * 0.5);
		var pageY =  event.pageY - ($parallaxContainer.height() * 0.5);
		
		$parallaxItems.each(function(){
			var item 	= $(this);
			var speedX	= item.data("speed-x");
			var speedY	= item.data("speed-y");
			
			TweenLite.to(item, 0.5, {
				x: (item.position().left + pageX * speedX )*fixer,    //calculate the new X based on mouse position * speed 
				y: (item.position().top + pageY * speedY)*fixer
			});
		});
	});






  $( '.inputfile' ).each( function(){
    var $input   = $( this ),
      $label   = $input.next('label'),
      labelVal = $label.html();

    $input.on( 'change', function(e){
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });


});

function homePagePilling(){
  $('#uipl-main').pagepiling({
    navigation: false,
    scrollingSpeed: 100,
    normalScrollElementTouchThreshold: 10,
    touchSensitivity: 10,
    sectionsColor: ['#184486', '#fec955', '#3bb6a3', '#cf6847', '#181818', '#f4f4f4', '#ffffff'],
    //verticalCentered: true,
    onLeave: function(index, nextIndex, direction){
      $('.stat-boxes .stat-box').removeClass('opened dwn');
      $('#scroll-down').removeClass('visible-elem');
      if(index == 6){
        $('body').removeClass('visible-footer');
      }
      if(index == 7){
        $('body').removeClass('visible-footer');
        $('.uipl-projects').css({"transform": "translate3d(0px, 0px, 0px)"});
      }
    },
    afterLoad: function(anchorLink, index){
      setTimeout(function(){
        $('#scroll-down').addClass('visible-elem');
      },2000);
      //using index
      if(index == 2){
        setTimeout(function(){
          $('.stat-boxes .stat-box').addClass('opened');
          setTimeout(function(){
            $('.stat-boxes .stat-box:nth-child(even)').addClass('dwn');
          },500);
        },300);
      }
      if(index == 7){
        $('body').addClass('visible-footer');
        $('.uipl-projects').css({"transform": "translate3d(0px, -200px, 0px)"});
      }

      //using anchorLink
      if(anchorLink == 'secondPage'){
        //alert("Section 2 ended loading");
      }
    }
  });
}

function contactPagePilling(){
  $('#uipl-contact').pagepiling({
    navigation: false,
    scrollingSpeed: 100,
    sectionsColor: ['#000', '#f4f4f4']
  });
}

function portfolioPagePilling(){
  $('#uipl-portfolio').pagepiling({
    navigation: false,
    scrollingSpeed: 100,
    sectionsColor: ['#000', '#f4f4f4', '#ffffff'],
    onLeave: function(index, nextIndex, direction){
      if(index == 2){
        $('body').removeClass('visible-footer');
      }
      if(index == 3){
        $('body').removeClass('visible-footer');
        $('.uipl-portfolio').css({"transform": "translate3d(0px, 0px, 0px)"});
      }
    },
    afterLoad: function(anchorLink, index){
      if(index == 3){
        $('body').addClass('visible-footer');
        $('.uipl-portfolio').css({"transform": "translate3d(0px, -200px, 0px)"});
      }
    }
  });
}

function servicePagePilling(){
  $('#uipl-service').pagepiling({
    navigation: false,
    scrollingSpeed: 100,
    sectionsColor: ['#000', '#ffffff', '#3bb6a3', '#f4f4f4', '#ffffff'],
    onLeave: function(index, nextIndex, direction){
      if(index == 4){
        $('body').removeClass('visible-footer');
      }
      if(index == 5){
        $('body').removeClass('visible-footer');
        $('.uipl-projects').css({"transform": "translate3d(0px, 0px, 0px)"});
      }
    },
    afterLoad: function(anchorLink, index){
      if(index == 5){
        $('body').addClass('visible-footer');
        $('.uipl-projects').css({"transform": "translate3d(0px, -200px, 0px)"});
      }
    }
  });
}


function isTouchDevice() {
  return true == ("ontouchstart" in window && screen.width <= 1024 || window.DocumentTouch && document instanceof DocumentTouch);
}
if (isTouchDevice() === true) {
  $('body').addClass('is-touch');
} else {
  $('body').addClass('no-touch');
}



$(document).on('click', '.toggle-nav', function(e){
  e.preventDefault();
  $('body').toggleClass('visible-nav');
  $(this).toggleClass('close-nav');
  $(this).find('.nav-title').text(function(i, text){
      return text === "Close" ? "Menu" : "Close";
  });
  setTimeout(function(){
    $('.footer-social-icons').toggleClass('force-right');
  },1000);
});
$(document).on('click', '.nav-overlay', function(){
  $('body').removeClass('visible-nav');
  $('.toggle-nav').toggleClass('close-nav');
  $('.toggle-nav').find('.nav-title').text(function(i, text){
      return text === "Close" ? "Menu" : "Close";
  });
});


