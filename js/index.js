$(function () {  
    $('.Tbg .w').css({'opacity':1,'transform':'translateY(0)'})
    var bodyH = document.documentElement.clientHeight;
    $('.Tbg').height(bodyH);
    $('.holder').height(bodyH);
    $('.scheme .bg').height(1080);
    $('.track .bg').height(1080);
    function enter(tag,num) {
        $('header>section '+tag).on('mouseenter',function () {
            $('header .qrCode'+num).addClass('on')
        })
    }
    function leave(tag,num) {
        $('header>section '+tag).on('mouseleave',function () {
            $('header .qrCode'+num).removeClass('on')
        })
    }
    enter('b',1)
    enter('s',2)
    leave('b',1)
    leave('s',2)
    var p =0,t=0,time='';
    window.onscroll=function (e) {
        clearInterval(time)
        time=setTimeout(() => {
            $('header').css('transform','translateY(0px)')
        }, 1000);
        p=$(this).scrollTop();
        if(t<=p){
            $('header').css('transform','translateY(-100px)')
        }
        else{
            $('header').css('transform','translateY(0px)')
        }
        t = p;
        var sTop=document.body.scrollTop+document.documentElement.scrollTop;
        // console.log(sTop)
        $('.Tbg').css('top',-sTop/3+'px');
        if(sTop>=100){
            $('header').addClass('headerfix')
            $('header .fl').css('background','url("./img/LOGO_02.png") center/cover no-repeat');
            $('header .fr>s').addClass('s')
        }else{
            $('header .fl').css('background','url("./img/LOGO.png") center/cover no-repeat');
            $('header .fr>s').removeClass('s')
            $('header').removeClass('headerfix')
        }
        if(sTop<=110){
            // $('header').removeClass('headerfix1')
            // $('header').removeClass('headerfix2')
            // $('header').removeClass('opacity0')
        }else if(sTop>=110&&sTop<=140){
            // $('header').addClass('opacity0')
        }else if(sTop>=140&&sTop<=200){
            // $('header').addClass('headerfix1')
            
        }else if(sTop>=200){
            // console.log(-sTop/3+'px')
            // $('header').removeClass('headerfix1')
            // $('header').addClass('headerfix2')
        }
        if(sTop>=($('.scheme').offset().top-bodyH)){
            // console.log(-(sTop-$('.scheme').offset().top+bodyH)/3)
            $('.scheme .bg').css('top',($('.scheme').offset().top-sTop+$('.scheme').offset().top-bodyH-400)/3+'px')
        }else{
            $('.scheme .bg').css('top',$('.scheme').offset().top-400+'px')
        }
        if(sTop>=($('.track').offset().top-bodyH)){
            // console.log(-(sTop-$('.track').offset().top+bodyH)/3)
            $('.track .bg').css('top',($('.track').offset().top-sTop+$('.scheme').offset().top-bodyH-600)/3+'px')
        }else{
            $('.track .bg').css('top',$('.track').offset().top-600+'px')
        }
        if(sTop<=845){
            $('.Tbg').css('zIndex',1)
        }else{
            $('.Tbg').css('zIndex',0)
        }
        // console.log($('.track').offset().top)


        if(sTop>=530){
            $('.keeper .w>div').css({'opacity':1,'transform':'translateY(0)'})
        }
        if(sTop>=1200){
            $('.scheme .w>div').css({'opacity':1,'transform':'translateY(0)'})
        }
        if(sTop>=2035){
            $('.simpleness .w>img').css({'opacity':1,'transform':'translateY(0)'})
        }
        if(sTop>=2800){
            $('.track .w2>div').css({'opacity':1,'transform':'translateY(0)'})
            $('.track .w2>img').css({'opacity':1,'transform':'translateY(0)'})
        }

    }

    $('.last').on('click',function () {
        $('.last div').css('opacity',.9)
        $('.last div img').addClass('click')
        $('.last div p').addClass('click')
    })
    $('.last').on('mouseleave',function () {
        $('.last div').css({'opacity':0})
        $('.last div img').removeClass('click')
        $('.last div p').removeClass('click')
    })
})