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
                                setTimeout(function () {
                                    $('.intro-text01').removeClass('fadein');
                                }, 1500);
                        });
                    });
                });
            }
        });


    });


    $(window).on('scroll', function () {

        // jQuery(document).height()・・・ページ全体の高さ
        // jQuery(window).height()・・・表示されているウインドウの高さ
        // jQuery(window).scrollTop()・・・（ページの一番上からの）スクロールの量
        let scrollHeight = $(document).height();
        let scrollPosition = $(window).height() + $(window).scrollTop();
        let footHeight = $('#footer-content').innerHeight();

        // ページ全体の高さ - ページのスクロール量 <= ナビを止めたい高さ
        if (scrollHeight - scrollPosition <= footHeight) {
            $('#page_top').css({
                position: 'absolute',
                bottom: footHeight
            })
        } else {
            $('#page_top').css({
                "position": 'fixed',
                'bottom': '10px',
            })
        }
    })
    // クリックしたらTOPに戻る
    $('#page_top').on('click', function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });



})