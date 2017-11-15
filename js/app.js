 $(window).on('load', function() {
          $(".se-pre-con").delay(500).fadeOut("slow");
    });

 $(document).ready(function(){
    $('.advanced').hide();
        $('.opp').hide();
        $('#more').on('click' ,function(){
             $(".advanced").toggle(1000, function(){
             
        });
        });
            $('#search').on('click' ,function(){
             $(".opp").toggle(1000, function(){
             
        });
        })
        })