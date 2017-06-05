   $(document).ready(function(){
              $('.carousel').slick({
                    speed: 8000,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 2,
                    dots: false,
                    arrows: false

                });
            
          });      
$(document).ready(function(){
             $(".country").click(function(){
                    $(this).children(".country ul").slideToggle("slow");
                    return false;
              });
          });
      