$(function () {

    $(window).scroll(function () {
        $('.intro-ph').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(function () {
                    $('.intro-ph').each(function (i) {
                        $(this).delay(i * 400).queue(function () {
                            $(this).addClass('fadein');
                        });
                    });
                });
            }
        });
    });



    $(window).scroll(function () {
        $('.intro-text01').each(function () {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(function () {
                    $('.intro-text01').each(function (i) {
                        $(this).delay(i * 300).queue(function () {
                            $(this).addClass('fadein'),
                            setTimeout(function() {
                                $('.intro-text01').removeClass('fadein');
                            }, 1500);
                        });
                    });
                });
            }
        });
       
    });
    







})