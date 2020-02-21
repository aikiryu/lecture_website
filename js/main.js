$(document).ready(function(){
    
    
    $('#logo').on('click',function(){
        
         $('html, body').animate({'scrollTop' : 0});
        
    })
     
    var windowHeight = $(window).height();
    $('.s1').height(windowHeight);
    
    
    $('.gnb li').on('click',function(){
        
        $(this).addClass('on').siblings().removeClass('on');
        
     var i = $(this).index();
     var sectionHeight = $('#content section').eq(i).offset().top;
        
        
    $('html, body').animate({
        
        'scrollTop' : sectionHeight
    })
     
        
        
        
        
    });//gnb li
    
    $('.box2 .more').click(function(){
        $(this).toggleClass('on');
        $(this).siblings('.plus').slideToggle(1000);
        
    })
    
//스크롤에 따른 gnb on위치 변화
var sctlength = $('#content section').length;    

function gnbOn(v,h){
var scr = $(window).scrollTop();
var sct1 = $('#content section').eq(v).offset().top;    
var sct2 = $('#content section').eq(h).offset().top;    

    if(scr>=sct1 && scr<=sct2){
        
        $('.gnb li').eq(v).addClass('on').siblings().removeClass('on');
        
    }
}
    for(var i = 0; i<sctlength-1; i++){
    gnbOn(i,i+1)
    }
    gnbOn(3,3)
    
//첫번째 섹션 헤더영역
    
var wdth = $(window).width();
    $('.s1').width(wdth)
    
    
 $(window).on('scroll',function(){
     var scr = $(window).scrollTop();
     var hnone1 = 0;
     var hnone2 = $(window).height();
     
     if(scr>= hnone1 && scr<hnone2){
         $('header').removeClass('on');
         
     }else{
         $('header').addClass('on');
        
         $('#content').removeClass('on');
     }
     
 });
    
//첫번째 섹션 헤더오픈버튼 누를 시 일어나는 일
    
    $('.hbtn').on('click',function(){
        
        $('#content,header').toggleClass('on')
        
    })
    
    
    
    
    
    
$(window).scroll(function(){
     for(var i = 0; i<sctlength-1; i++){
    gnbOn(i,i+1)
    }
        gnbOn(3,3)

    
});
    
    //갤러리박스

    
    //갤러리박스 클릭 시
    
    $('.s3 .simg, .s4 .simg, .s2 .academy .simg').on('click',function(){
        $(this).addClass('live').siblings().removeClass('live');
        $('.view').fadeIn(200);
        var hl = $(this).children('.image').html();
        $('.view figure').html(hl)
        
       var imght = $('.view figure').find('img').height();
        $('.view figure').css({
            'marginTop' : '-'+(imght/2)+'px'
        });
        
     
        
        
    }); //simg 클릭
    
    
    
    //갤러리 뷰영역 끄기
    $('.s3 .view .view_in, .s3 .view .close').on('click',function(){
        $('.s3 .view').hide();
    })
    
   
    
    
})    