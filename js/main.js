   $(document).ready(function(){
              $('.carousel').slick({
                    speed: 3000,
                    autoplay: false,
                    infinite: true,
                    slidesToShow: 2,
                    dots: false,
                    arrows: true,
                    prevArrow: '<img class="right-control slick-next" src="img/control-right.png">', 
                    nextArrow:    '<img class="left-control slick-prev" src="img/control-left.png">',
                });
            
          });      
$(document).ready(function(){
             $(".country").click(function(){
                    $(this).children(".country ul").slideToggle("slow");
                    return false;
              });
          });

 $(document).ready(function(){

    $(".click").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: 2800}, 1500);

    });

});
      