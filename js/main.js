// Shop 상품 슬라이더
var shopSwiper = new Swiper('.shop .swiper-container', {
  loop: true,            // 상품이 4개뿐이라 반복해야 PC에서도 화살표가 동작함
  slidesPerView: 1,      // 모바일
  spaceBetween: 20,
  navigation: {
    prevEl: '.shop .swiper-button-prev',
    nextEl: '.shop .swiper-button-next'
  },
  breakpoints: {         // 지정한 너비 이상일 때 적용
    641: { slidesPerView: 2 },
    769: { slidesPerView: 3 },
    1025: { slidesPerView: 4 }
  }
});

// Collection 슬라이더 (640px 이하에서만 동작)
var collSwiper = null;
var collMobile = window.matchMedia('(max-width:640px)');

function setCollSwiper() {
  if (collMobile.matches && !collSwiper) {
    collSwiper = new Swiper('.coll_slider', {
      loop: true,
      loopedSlides: 3,
      centeredSlides: true,
      slidesPerView: 1.4,
      spaceBetween: 14,
      breakpoints: {
        481: { spaceBetween: 25 }
      }
    });
  } else if (!collMobile.matches && collSwiper) {
    collSwiper.destroy(true, true); // PC에서는 원래 그리드로 복구
    collSwiper = null;
  }
}

setCollSwiper();
window.addEventListener('resize', setCollSwiper);

// 섹션 등장 애니메이션 (AOS를 불러온 페이지에서만 실행)
if (window.AOS) {
  AOS.init({
    duration: 700,
    easing: 'ease-out',
    offset: 80,
    once: true           // 처음 보일 때 한 번만 재생
  });
}
