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

  $('#reviewCardsSlider').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: 'ease',
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '.reviewArrowLeft',
    nextArrow: '.reviewArrowRight',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
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
  });
});

const faqAccordionButtons = document.querySelectorAll('.faqAccordionButton');
const faqAccordions = document.querySelectorAll('.faqAccordion');

faqAccordionButtons.forEach((faqAccordionButton, index) => {
  faqAccordionButton.addEventListener('click', () => {
    if (!faqAccordionButton.classList.contains('collapsed')) {
      faqAccordions[index].classList.add('shadowCustom');
      faqAccordions[index].style.backgroundColor = '#ffffff';
    } else {
      faqAccordions[index].classList.remove('shadowCustom');
      faqAccordions[index].style.backgroundColor = '#F2F4F8';
    }
  });
});