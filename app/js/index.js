
$(document).ready(function() {

  //////// menu toggle-button
  $('.menu-icon').on('click', () => {
    $('nav ul').toggleClass('showing');
  })

  //Scrolling Effect
  $(window).on('scroll', () => {
    if ($(window).scrollTop()) {
      $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
  });

///// Modal ////

$("#button00").click(function() {
  $('#project00').fadeIn(200);
});
$("#button01").click(function() {
  $('#project01').fadeIn(200);
});
$("#button02").click(function() {
  $('#project02').fadeIn(200);
});
$("#button03").click(function() {
  $('#project03').fadeIn(200);
});

$('.modal-overlay').click(function() {
   $('.modal-overlay').fadeOut(200);
});

  // /////// Gallery
  // $('.gallery ul li a').click(function() {
  //     var itemID = $(this).attr('href');
  //     $('.gallery ul').addClass('item_open');
  //     $(itemID).addClass('item_open');
  //     return false;
  // });
  // $('.close').click(function() {
  //     $('.modal, .gallery ul').removeClass('item_open');
  //     return false;
  // });
  //
  // $(".gallery ul li a").click(function() {
  //     $('html, body').animate({
  //         scrollTop: parseInt($("#top").offset().top)
  //     }, 400);
  // });


});
