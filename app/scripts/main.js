// variables
var $header_top = $('.header-top');
var $nav = $('nav');

$(document).ready(function() {
  console.log('Ready');

  // toggle menu
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });

  // rope and curtains
  $('#rope').draggable({
    revert: true
  });

  $('.pullrope').draggable ({
      drag: function(event, ui)
      {
    $('#rope').hide('slow');
      console.log('drag works');
      $('.curtainL').css('width', '0%');
      $('.curtainL').css('transition', '2s');
      $('.curtainR').css('width', '0%');
      $('.curtainR').css('transition', '2s');
      $('.wrapper').delay(7500).fadeOut();
    }
  });

  $('button').click(function() {
    console.log('works?');
    $('.paper-dolls img').fadeOut();
    setTimeout(function() {
      $('.costumes img').fadeIn();
      $('.paper-dolls img').fadeIn();
    }, 3000);
    $('.curtainL').css('width', '50%');
    $('.curtainL').css('transition', '2s');
    $('.curtainR').css('width', '50%');
    $('.curtainR').css('transition', '2s');
    setTimeout(function() {
      $('.curtainL').css('width', '0%');
      $('.curtainL').css('transition', '2s');
      $('.curtainR').css('width', '0%');
      $('.curtainR').css('transition', '2s');
    }, 3000);


  });




  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 5) {
        $('#fp-nav').hide();
        console.log('is hid');
      }
    },

    onLeave: function(index, nextIndex, direction) {
      if (index == 5) {
        $('#fp-nav').show();
        console.log('is shown');
      }
    },

    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex, direction, nextSlideIndex) {
      if (anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(false, 'up');
        $header_top.css('background', 'transparent');
        $nav.css('background', 'transparent');
        $(this).css('background', '#374140');
        $(this).find('h2').css('color', 'white');
        $(this).find('h3').css('color', 'white');
        $(this).find('p').css({
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        });
      }
      if (slideIndex == 1) {
           $('.paper-dolls').addClass('animated slideInUp');
         }
      if (slideIndex == 0) {
           $('.paper-dolls').removeClass('animated slideInUp');
         }

    },

    onSlideLeave: function(anchorLink, index, slideIndex, direction) {
      if (anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    }
  });

  // Cards

  $('[rel="tooltip"]').tooltip();

  function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
      $card.removeClass('hover');
    } else {
      $card.addClass('hover');
    }
  }

});
