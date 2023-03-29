/*Хедер*/

$(document).ready(function () {
  $(".header__menu").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header").removeClass("active");
      $(".header-mobile").removeClass("active");
      $("body").removeClass("ov-hid");
    } else {
      $(".header__menu").addClass("active");
      $(".header").addClass("active");
      $(".header-mobile").addClass("active");
      $("body").addClass("ov-hid");
    }
  });

  $(document).scroll(function () {
    if ($(window).scrollTop() >= ($(".header").height()) * 0.01) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
});

/*Инпуты*/

$(document).ready(function() {
  $(".input-wrapper .input:not([readonly='readonly'])").on("keyup", function(e) {
    $(this).closest('.input-box').removeClass("not-empty");

    if($(this).val() != "" || e.keyCode === 69) {
      $(this).closest('.input-box').addClass("not-empty");
    }
  });

  $(".input-wrapper .icon-delete").click(function() {
    $(this).closest('.input-box').find('.input').val('');
    $(this).closest('.input-box').removeClass("not-empty");
  });
});

/*Textarea*/

$(document).ready(function() {
  $(".input-wrapper .textarea:not([readonly='readonly'])").on("keyup", function(e) {
    $(this).closest('.textarea-box').removeClass("not-empty");

    if($(this).val() != "" || e.keyCode === 69) {
      $(this).closest('.textarea-box').addClass("not-empty");
    }
  });

  $(".input-wrapper .icon-delete").click(function() {
    $(this).closest('.textarea-box').find('.textarea').val('');
    $(this).closest('.textarea-box').removeClass("not-empty");
  });
});

/*Новая эра тултипы*/
$(document).ready(function() {
  $('.about__text-center').hover(function(){
    $(this).closest('.about__text').find('.about__tooltip-center').addClass('active');
  }, function(){
    $(this).closest('.about__text').find('.about__tooltip-center').removeClass('active');
  });
  $('.about__text-club').hover(function(){
    $(this).closest('.about__text').find('.about__tooltip-club').addClass('active');
  }, function(){
    $(this).closest('.about__text').find('.about__tooltip-club').removeClass('active');
  });
});

/*Слайдер актуальное*/
$(document).ready(function() {
  (function() {

    'use strict';

    const breakpoint = window.matchMedia( '(min-width:1440px)' );

    let swiperactual;

    const breakpointChecker = function() {
      if ( breakpoint.matches === true ) {
        if ( swiperactual !== undefined ) swiperactual.destroy( true, true );
        return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
    };

    const enableSwiper = function() {

      swiperactual = new Swiper(".actual .swiper-container", {
        loop: true,
        slidesPerView: 1.25,
        slidesPerGroup: 1,
        spaceBetween: 16,
        autoHeight: true,
        grabCursor: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        breakpoints: {
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }
      });

    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();
});

/*Табы новости/нир*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.tabs-main__container');
    tabContainers.hide().filter(':first').show();
    $('.tabs-main__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.tabs-main__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();

    var url_string = window.location.href;
    var id = url_string.split('id=')[1];
    if (id === "events") {
      $('.tabs-main__tab').filter(':last').click();
    }
  });

});

/*Слайдер НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЕ РАБОТЫ*/

$(document).ready(function() {
  swiperNir = new Swiper(".nir-main .swiper-container", {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 24,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    navigation: {
      nextEl: ".nir-main .swiper-button-next",
      prevEl: ".nir-main .swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  });

  swiperNir = new Swiper(".nir .swiper-container", {
    loop: true,
    slidesPerView: 1.25,
    slidesPerGroup: 1,
    spaceBetween: 16,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    navigation: {
      nextEl: ".nir .swiper-button-next",
      prevEl: ".nir .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  });
});

/*Раскрытие описания*/

$(document).ready(function() {
  $('.text-opening__more').click(function(){
    if ($(this).closest('.text-opening').hasClass("active")) {
      $(this).text("Развернуть");
      $(this).closest('.text-opening').removeClass("active");
      var top = $(this).closest('.text-opening').offset().top - 180;
      $('body,html').animate({scrollTop: top}, 2000);
    } else {
      $(this).text("Свернуть");
      $(this).closest('.text-opening').addClass("active");
    }
  });
});

/*Слайдер проекты*/

$(document).ready(function() {
  (function() {

    'use strict';

    const breakpoint = window.matchMedia( '(min-width:1440px)' );

    let swiperProjects;

    const breakpointChecker = function() {
      if ( breakpoint.matches === true ) {
        if ( swiperProjects !== undefined ) swiperProjects.destroy( true, true );
        return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
    };

    const enableSwiper = function() {

      swiperProjects = new Swiper(".projects-slider .swiper-container", {
        loop: true,
        slidesPerView: 1.25,
        slidesPerGroup: 1,
        spaceBetween: 16,
        autoHeight: true,
        grabCursor: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        breakpoints: {
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }
      });

    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })();
});

/*Кастомный селект*/

$(document).ready(function() {
  /*$('.select').on('changed', function(){
    value = this.value;
    console.log(value);
  });*/


  $('.select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select');
    $this.wrap('<div class="select-custom"></div>');
    $this.after('<div class="select-selected"></div>');

    var $styledSelect = $this.next('div.select-selected');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-list'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        html: '<span>' + $this.children('option').eq(i).text() + '</span>',
        rel: $this.children('option').eq(i).val(),
        title: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-selected.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.select-list').hide();
        $(this).closest('.input-wrapper').removeClass('active');
      });
      $(this).toggleClass('active').next('ul.select-list').toggle();
      $(this).closest('.input-wrapper').addClass('active');
    });

    $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.html('<span class="select-value">' + $(this).text() + '</span>').removeClass('active');
      $styledSelect.attr('rel', $(this).attr('rel'));
      $styledSelect.attr('title', $(this).attr('title'));
      $(this).closest('.input-wrapper').removeClass('active');
      $this.val($(this).attr('rel'));
      $this.val($(this).attr('title'));
      $list.hide();
      $this.trigger('changed');
    });

    $(document).click(function() {
      $styledSelect.removeClass('active');
      $styledSelect.closest('.input-wrapper').removeClass('active');
      $list.hide();
    });

    $('form .btn[type="reset"]').click(function(){
      $this.closest('form').find('.input-wrapper > .select-custom > .select-selected').html('<span>' +$this.children('option').eq(0).text() + '</span>');
      $this.closest('form').find('.input-wrapper > .select-custom > .select-selected').removeAttr('rel');
      $this.closest('form').find('.input-wrapper > .select-custom > .select-selected').removeAttr('title');
      $this.closest('form').find('.input-wrapper > .input-box > .input').removeAttr('value');
      $(this).closest('form').find('.input-wrapper > .checkbox-list > .checkbox-item > .checkbox > input').removeAttr('checked');
      $(this).closest('form').find("#uploadImageResult").removeAttr('src');
      $(this).closest('form').find(".input-wrapper > .input-box").removeClass('not-empty');
      for (var j = 0; j < numberOfOptions; j++) {
        $this.children('option').eq(j).removeAttr('selected')
      }
    });

    for (var j = 0; j < numberOfOptions; j++) {
      if ($this.children('option').eq(j).attr('selected')) {
        $styledSelect.html('<span>' +$this.children('option').eq(j).text() + '</span>');
        $styledSelect.attr('rel', $this.children('option').eq(j).val());
        $styledSelect.attr('title', $this.children('option').eq(j).val());
      }
    }
  });
});

$(document).ready(function() {
  $('.select-dropdown').dropdown({
    limitCount: 40,
    multipleMode: 'label',
    input:'<input type="text" maxLength="20" placeholder="Поиск...">',
    searchable: true,
    searchNoData: '<li style="color:#ddd; padding: 8px 12px;">Ничего не найдено</li>',
  });

});

/*Раскрытие фильтра*/

$(document).ready(function() {
  $('.filter__more').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).closest('.filter').find('.filter-wrapper').removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).closest('.filter').find('.filter-wrapper').addClass('active');
    }
  });

  $('.filter__close').click(function(){
    $(this).closest('.filter').find('.filter__more').removeClass('active');
    $(this).closest('.filter').find('.filter-wrapper').removeClass('active');
  });
});

/*Datepicker*/

$(document).ready(function() {
  $('.input-wrapper .input.input-datepicker').flatpickr({
    "dateFormat": "d.m.Y",
    "altFormat": "d.m.Y",
    "allowInput": true,
    "mode": "range",
    "locale": "ru",
    "monthSelectorType": 'static',
    "maxDate": "today",
    onChange: function () {
      $('.datepicker').blur();
    },
  });
});

$(document).ready(function() {
  $('.input-wrapper.input-datepicker.datepicker-single .input.input-datepicker').flatpickr({
    "dateFormat": "d.m.Y",
    "altFormat": "d.m.Y",
    "allowInput": true,
    "mode": "single",
    "locale": "ru",
    "monthSelectorType": 'static',
    "maxDate": "today",
    onChange: function () {
      $('.datepicker').blur();
    },
  });
});

/*Header search*/

$(document).ready(function() {
  $(".search svg").on("click", function() {
    $(this).closest(".search").toggleClass("active");
  });
});

/*Модальные окна*/

$(document).ready(function() {
  $('.js-popup').click(function(e){
    e.preventDefault();
    $('.popup').removeClass('show');
    var id = $(this).attr('href');
    $(id).addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.popup__close').click(function(){
    $(this).closest('.popup').removeClass('show');
    $('body').removeClass('ov-hid');
  });

  $(document).mouseup(function (e){
    var el = $(".popup__wrapper");
    if (!el.is(e.target) && el.has(e.target).length === 0) {
      el.closest('.popup').removeClass('show');
      $('body').removeClass('ov-hid');
    }
  });
});

/*Инпут image*/

$(document).ready(function() {
  $('.input-wrapper.input-image .input-box').append('<img id="uploadImageResult" alt="">');

  FReader = new FileReader();

  FReader.onload = function(e) {
    document.querySelector("#uploadImageResult").src = e.target.result;
  };

  document.querySelector("#uploadImage").addEventListener("change", loadImageFile);

  function loadImageFile() {
    $('#uploadImage').closest('.input-wrapper.input-image').addClass('file-downloaded');
    var file = document.querySelector("#uploadImage").files[0];
    FReader.readAsDataURL(file);
  }

  $('.input-wrapper.input-image .input-box label').click(function(){
    $(this).closest('.input-wrapper.input-image').removeClass('file-downloaded');
    document.querySelector("#uploadImageResult").removeAttribute('src');
    /*$(this).closest('.lk-form').find('.input[type="file"]').reset();*/
    $(this).closest('.lk-form').find('.btn[type="submit"]').click();
  });
});

/*Добавление и удаление инпутов*/

$(document).ready(function() {
  $('#add-phone').on('click', function(){
    $(this).closest(".input-col").append('' +
      '<div class="input-row">\n' +
      ' <div class="input-wrapper">\n' +
      '   <div class="input-box">\n' +
      '     <input class="input" type="tel" placeholder="Введите номер телефона" autocomplete="off" value="">\n' +
      '     <i class="icon-delete"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background: new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="Layer_22" data-name="Layer 22"><path d="m25.9 6.1a14 14 0 1 0 0 19.8 14 14 0 0 0 0-19.8zm-4.9 13.44a1 1 0 0 1 0 1.46 1 1 0 0 1 -.71.29 1 1 0 0 1 -.7-.29l-3.59-3.59-3.54 3.59a1 1 0 0 1 -.7.29 1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l3.54-3.59-3.54-3.54a1 1 0 0 1 1.41-1.41l3.54 3.54 3.54-3.54a1 1 0 0 1 1.46 1.41l-3.59 3.54z" data-original="#000000"></path></g></g></svg></i>\n' +
      '   </div>\n' +
      '   <span class="message-text"></span>\n' +
      ' </div>\n' +
      '\n' +
      ' <div class="input-delete"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512.001 512.001"><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z" data-original="#000000"></path></svg></div>\n' +
      '</div>');

    $('.input-delete').on('click', function(){
      $(this).closest(".input-row").remove();
    });

    $(".input-wrapper .input:not([readonly='readonly'])").on("keyup", function(e) {
      $(this).closest('.input-box').removeClass("not-empty");

      if($(this).val() != "" || e.keyCode === 69) {
        $(this).closest('.input-box').addClass("not-empty");
      }
    });

    $(".input-wrapper .icon-delete").click(function() {
      $(this).closest('.input-box').find('.input').val('');
      $(this).closest('.input-box').removeClass("not-empty");
    });
  });

  $('#add-link').on('click', function(){
    $(this).closest(".input-col").append('' +
      '<div class="input-row">\n' +
      ' <div class="input-wrapper">\n' +
      '   <div class="input-box">\n' +
      '     <input class="input" type="text" placeholder="Введите ссылку" autocomplete="off" value="">\n' +
      '     <i class="icon-delete"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background: new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="Layer_22" data-name="Layer 22"><path d="m25.9 6.1a14 14 0 1 0 0 19.8 14 14 0 0 0 0-19.8zm-4.9 13.44a1 1 0 0 1 0 1.46 1 1 0 0 1 -.71.29 1 1 0 0 1 -.7-.29l-3.59-3.59-3.54 3.59a1 1 0 0 1 -.7.29 1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l3.54-3.59-3.54-3.54a1 1 0 0 1 1.41-1.41l3.54 3.54 3.54-3.54a1 1 0 0 1 1.46 1.41l-3.59 3.54z" data-original="#000000"></path></g></g></svg></i>\n' +
      '   </div>\n' +
      '   <span class="message-text"></span>\n' +
      ' </div>\n' +
      '\n' +
      ' <div class="input-delete"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512.001 512.001"><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z" data-original="#000000"></path></svg></div>\n' +
      '</div>');

    $('.input-delete').on('click', function(){
      $(this).closest(".input-row").remove();
    });

    $(".input-wrapper .input:not([readonly='readonly'])").on("keyup", function(e) {
      $(this).closest('.input-box').removeClass("not-empty");

      if($(this).val() != "" || e.keyCode === 69) {
        $(this).closest('.input-box').addClass("not-empty");
      }
    });

    $(".input-wrapper .icon-delete").click(function() {
      $(this).closest('.input-box').find('.input').val('');
      $(this).closest('.input-box').removeClass("not-empty");
    });
  });

  $('.input-delete').on('click', function(){
    $(this).closest(".input-row").remove();
  });
});

/*Фильтр по буквам в библиотеке*/

$(document).ready(function() {
  $('.filter-library .btn').click(function(){
    if(!$(this).hasClass('active')){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});

/*Сортировка по столбцам таблицы в библиотеке*/

$(document).ready(function() {
  $('.library__topic-col:not(.col-link)').click(function(){
    if(!$(this).hasClass('sort-up') && !$(this).hasClass('sort-down')){
      $(this).siblings().removeClass('sort-up');
      $(this).siblings().removeClass('sort-down');
      $(this).addClass('sort-up');
    } else if($(this).hasClass('sort-up')) {
      $(this).removeClass('sort-up');
      $(this).addClass('sort-down');
    } else {
      $(this).removeClass('sort-down');
    }
  });
});

/*Скролл вверх страницы*/

$(document).ready(function() {
  $("#scrollToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  var btn = $("#scrollToTop");
  var scrollChange = 200;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      btn.addClass('show');
    } else {
      btn.removeClass("show");
    }
  });
});

/*Открывать модалку с книгами в библиотеке при клике*/

$(document).ready(function() {
  $(function() {
    $(".library__item-col.col-name a").on('click', function() {
      var libraryImage = $(this).data('image');
      var libraryAuthor = $(this).data('author');
      var libraryName = $(this).data('name');
      var libraryDescription = $(this).data('description');
      $('#library').find('.library__item-tooltip-image img').attr('src', libraryImage);
      $('#library').find('.library__item-tooltip-author').html(libraryAuthor);
      $('#library').find('.library__item-tooltip-name').html(libraryName);
      $('#library').find('.library__item-tooltip-description').html(libraryDescription);
    });
  });
});

/*Форма с раскрывашкой*/

$(document).ready(function() {
  $('.form-opening__box-button button').click(function(){
    if ($(this).closest('.form-opening').hasClass("open")) {
      $(this).text("Пройти опрос");
      $(this).removeClass("btn-transparent");
      $(this).addClass("btn-black");
      $(this).closest('.form-opening').removeClass("open");
    } else {
      $(this).text("Свернуть");
      $(this).removeClass("btn-black");
      $(this).addClass("btn-transparent");
      $(this).closest('.form-opening').addClass("open");
    }
  });
});

/*Слайдер стенограммы*/

$(document).ready(function() {
  swiperTranscript = new Swiper(".transcript__slider .swiper-container", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
  });
});

/*Вопросы и ответы*/

$(document).ready(function() {
  $('.transcript__report-more-title').click(function(){
    if ($(this).closest('.transcript__report-more').hasClass("active")) {
      $(this).closest('.transcript__report-more').removeClass("active");
    } else {
      $(this).closest('.transcript__report-more').addClass("active");
    }
  });
});

/*Табы автора*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.author-works__container');
    tabContainers.hide().filter(':first').show();
    $('.author-works__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.author-works__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });

});