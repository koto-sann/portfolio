// ローディング
   window.addEventListener("load", function () {
   // ローディングを非表示にしてメインを表示
   const loading = document.getElementById("loading");
   const content = document.getElementById("after-loading");

   this.setTimeout(function () {
   loading.style.display = "none";
   content.style.display = "block";
   }, 1000);
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

// カルーセル
   $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
   });