// ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
    // メニューの開閉状態を切り替える
    $('.menu').toggleClass('open');

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });
});

// TOPに戻るボタン
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('.page-top').fadeIn(300);
        } else {
            $('.page-top').fadeOut(300);
        }
    });
    
    $(function() {
        $('.page-top').click(function() {
            $('html,body').animate({ scrollTop: 0 }, 400);
        });
    });

    

