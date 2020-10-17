// $(document).ready(function() {
//     //При нажатии на кнопку с атрибутом filter="wd", если аттрибут val равен 'off', изменить данный аттрибут на 'on', а у остальных элементов на 'off' и скрыть все элементы div в классе .filter со скорость 300 мс, а элемент с аттрибутом filter="wd" отобразить.
//     $('.button[filter="wd"]').click(function() {
//         if($(this).attr('val')=='off') {
//             $('.button[filter]').attr('val', 'off');
//             $(this).attr('val', 'on');
//             $('.filter > div').hide(300);
//             $('.filter > div[filter="wd"]').show(300);
//         }

//     })
//     //То же самое для остальных кнопок:
//     $('.button[filter="ud"]').click(function() {
//         if($(this).attr('val')=='off') {
//             $('.button[filter]').attr('val', 'off');
//             $(this).attr('val', 'on');
//             $('.filter > div').hide(300);
//             $('.filter > div[filter="ud"]').show(300);
//         }

//     })
//     $('.button[filter="moc"]').click(function() {
//         if($(this).attr('val')=='off') {
//             $('.button[filter]').attr('val', 'off');
//             $(this).attr('val', 'on');
//             $('.filter > div').hide(300);
//             $('.filter > div[filter="moc"]').show(300);
//         }

//     })
//     $('.button[filter="all"]').click(function() {
//         if($(this).attr('val')=='off') {
//             $('.button[filter]').attr('val', 'off');
//             $(this).attr('val', 'on');
//             // $('.filter > div').hide(300);
//             $('.filter > div').show(300);
//         }

//     })
// });

//Оптимизация кода:
$(document).ready(function () {
  // Портфолио:
  $(".button[filter]").click(function () {
    if ($(this).attr("filter") == "all") {
      if ($(this).attr("val") == "off") {
        $(".button[filter]").attr("val", "off");
        $(this).attr("val", "on");
        $(".button[filter]").removeClass("focused");
        $(this).addClass("focused");
        $(".filter > div").show(300);
      }
    }
    if ($(this).attr("val") == "off") {
      $(".button[filter]").attr("val", "off");
      $(this).attr("val", "on");
      $(".button[filter]").removeClass("focused");
      $(this).addClass("focused");
      $(".filter > div").hide(300);
      var filter = $(this).attr("filter");
      $(".filter > div[filter =" + filter + "]").show(300);
    }
  });
  // Слайдер блога:
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: "dots-style",
    // Адаптив для слайдера:
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          }
        },{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,  
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            }
          }]
  });

  // Меню:
//   href^="#" - проверка элемента на наличие символа # в нем
  $('ul.menu a[href^="#"]').click(function() {
    //   В переменнуюю запишем значение аттрибута href элемента (ссылку), по которому кликнули
    var target = $(this).attr('href');
    console.log(target);
    $('html', 'body').animate({
        scrollTop: $(target).offset().top
    }, 500);
    // Для всех ссылок задаем цвет №212121...
    $('ul.menu a[href^="#"]').css({'color': '#212121'});
    // ...а для активной ссылки - другой цвет:
    $(this).css({'color': '#004bee'});
    // return false;
  });

  // Выпадающее меню
  // При клике по иконке появляется вертикальное меню:
  $('.menu-icon').click(function() {
    $('nav').slideToggle(500);
    $('.menu').css({
      'display': 'flex',
      'flex-direction': 'column'
    })
    // Если иконка - полоски
    if($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    }
    else $(this).html('<i class="fas fa-bars"></i>');
  })

  // Кнопка наверх
// При скролле стрелка появляется. Наверху страницы стрелка исчезает:
  $(window).scroll(function() {
    if($(this).scrollTop() != 0)
      $('#toTop').fadeIn();
    else
      $('#toTop').fadeOut();
  });
// При клике по стрелке страница прокручивается в начало:
  $('#toTop').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
  });
})
