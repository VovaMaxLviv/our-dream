window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
  
    if (window.scrollY > 1) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
});
  
/* JQuery solution */
$('.js-open-modal').click(function () {
 let modalName = $(this).attr('data-modal');
 let modal = $(`.js-modal[data-modal=${modalName}]`);

 modal.addClass('show');
 $('.modal-overlay').addClass('show');
});

$('.js-close-modal').click(function () {
 $(this).parent('.modal').removeClass('show');
 $('.modal-overlay').removeClass('show');
});

$('.modal-overlay').click(function () {
 $(this).removeClass('show');
 $('.modal.show').removeClass('show');
});