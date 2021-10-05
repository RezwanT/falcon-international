// navbar open and close functionality

$(document).ready(function () {
    $("#open-nav").on("click", function () {
        $(".mobile-nav").animate({
            width: '100%',
        })
        $("body").css('overflow','hidden');
    });

    $("#nav-close").on("click", function () {
        $(".mobile-nav").animate({
            width: '0%',
        })
        $("body").css('overflow','auto');

    });

    $("#scroll-top").on("click",function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
})