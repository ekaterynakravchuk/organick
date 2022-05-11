$(function () {
  $('.header__burger').on('click', function (event) {
    event.preventDefault();
    $('.header__menu').addClass('open');

  })

  $('.header__close-btn').on('click', function (event) {
    event.preventDefault();
    $('.header__menu').removeClass('open');
  })

  $('.header__menu-link').on('click', function (event) {
    event.preventDefault();
    $('.header__menu').removeClass('open');
  })

});


// const menuLinks = document.querySelectorAll('.header__menu-link[data-scroll]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener('click', onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
//       const scrollToBlock = document.querySelector(menuLink.dataset.scroll);
//       let scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
//       console.log(scrollToBlockValue);

//       window.scrollTo({behavior: 'smooth', top: scrollToBlockValue});
//       e.preventDefault();
//     }
//   }
// }

const anchors = document.querySelectorAll('.header__menu-link');
for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionID = anchor.getAttribute('href');
    document.querySelector('' + sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}