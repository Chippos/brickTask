const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);

$(document).ready(function () {
  $('.slickPartners').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: 'ease',
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ],
    prevArrow: `<div class="slickPrev"><i class="bi bi-arrow-left"></i></div>`,
    nextArrow: `<div class="slickNext"><i class="bi bi-arrow-right"></i></div>`
  });
});

const faqAccordionButton = document.querySelector('.faqAccordionButton');
const faqAccordion = document.querySelector('#faqAccordion');

faqAccordionButton.addEventListener('click', () => {
  if (!faqAccordionButton.classList.contains('collapsed')) {
    faqAccordion.classList.add('shadowCustom');
    faqAccordion.style = 'background-color: #ffffff';
  }
  else {
    faqAccordion.classList.remove('shadowCustom');
    faqAccordion.style = 'background-color: #F2F4F8';
  }
});