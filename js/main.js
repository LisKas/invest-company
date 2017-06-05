 
        var myPlayer;
        jQuery(function () {
            var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};
            myPlayer = jQuery(".player").YTPlayer();
        });
      

         $(document).ready(function(){
                $('.carousel').slick({
                    speed: 8000,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 2,
                    dots: false,
                    arrows: false

                });
            

      
          $(document).ready(function(){
             $(".country").click(function(){
                    $(this).children(".country ul").slideToggle("slow");
                    return false;
              });
          });
      