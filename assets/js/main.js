

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var tabs = document.querySelectorAll(".products-block__tab");
var wrappers = document.querySelectorAll(".products-block__wrapper");

console.log(tabs);
console.log(wrappers);


tabs.forEach(element => {
  element.addEventListener("click", function (e) {
    // console.log(this.hasAttribute('data-id'));

    if (this.hasAttribute('data-id')) {
      var id = this.getAttribute('data-id');
      console.log(id);

      tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-id') == id) {
          tab.classList.add('active');
        }
      });

      wrappers.forEach(wrapper => {
        wrapper.classList.remove('active');
        wrapper.classList.add('hidden');
        if (wrapper.getAttribute('data-id') == id) {
          wrapper.classList.add('active');
        }
      });
    }

  });
});

const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');

  tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })

      tab.classList.add('active');
      contents[index].classList.add('active');

    })

  })

}

toggleContentByTab();


//Мобильное меню

var burger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobile-menu');
var cross = document.querySelector('.cross');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

cross.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});
