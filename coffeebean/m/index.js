//coffee bean Index jQuery

$(document).ready(function(){
    
    //1. GNB
    $('.menu').click(function(){
        $('nav').animate({
            left: 0
        },600);
    }); 
    $('.close').click(function(e){
        e.preventDefault();
        
        $('nav').animate({
            left:'-90%'
        },600);
    });
    
    
    //2. MD's pick
    $('.md-box').hide().slice(0,2).show();
    //$('.md-box').slice(0,2).show();
    
    $('#more').click(function(e){
        
        e.preventDefault();
        
        $('.md-box:hidden').slice(0,2).slideDown();
        
        //감춰진요소가 0개일때!
        if($('.md-box:hidden').length == 0){
            $('#more').fadeOut('slow');
        }
        
        //자연스럽게 scroll
        $('html,body').animate({
            scrollTop: $(this).offset().top-120
        },1500);
        
    });
    
    //3. What's new slider
    var slider=$('.slider'); //.box를 담고 있는 부모, width:300%
    
    $('.slider>.box:last-child').insertBefore('.slider>.box:first-child');
    slider.css('margin-left','-100%');
    
    //슬라이딩 함수 만들기
    function move(){
        slider.animate({
            marginLeft: '-200%'
        }, 800, function(){
            $('.slider>.box:first').insertAfter('.slider>.box:last');
            slider.css('margin-left','-100%');
        });
        
        //블릿변경
        var bseq = slider.find('.box').eq(2).attr('data-seq');
        console.log(bseq);
        chgB(Number(bseq));

    }
    
    //함수호출 - 실행 확인 (1회 실행)
    //move();
    
    //자동슬라이드 함수
    function autoplay(){
        setInterval(move, 3000);
    }
    
    autoplay();
    

    //블릿변경함수
    var chgB = function(bseq){
        $('.new-pager li').eq(bseq).addClass('on').siblings().removeClass('on');
    };
    
    
});//jQuery






