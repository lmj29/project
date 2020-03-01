$(function(){
  //全局变量，表示当前的模块，每次页面滚动都要更新这个值
var viewIndex = 0;
// $("a[href*='#']").click(function (e){
//     //禁止默认事件
//     // e.preventDefault();
//     // return false;
// })
//点击导航栏的处理
  $('.nav a').click(function (e){
      //获取当前窗口的高度
      var winH = $(Window).height();
      //获取自定义属性
      var target = $(this).attr('data-index');
      //获取该模块的名字，增加过渡效果
      var name = $(this).attr('section-name');
      var finalH = 0;
      finalH = winH * target;
      // target ?viewScroll ('body,html',finalH,true):viewScroll ('body,html',finalH,false);
      //第一种方式
      // if(target){
      //   //target为true时，说明点击了1234，此时需要固定
      //   viewScroll ('body,html',finalH,true)
      // }
      // else{
      //   //点击了home
      //   viewScroll ('body,html',finalH,false)
      // }
      //通过target * 1 把str类型的数据转为num，方便后续判断
      //target为0，表示回到首页，导航啦不固定，对应的false
      //target为1234时，表示向下滑动，导航栏固定，对应true
      //第二种方式
      viewScroll ('body,html',finalH,target * 1);
      viewIndex = target;
      if(name){
        $(name).find('.fade').addClass('fade-in');
      }

      e.preventDefault();
      return false;
  })



//点击切换按钮
  $('.scroll-tip').click(function(){
    var index = $(this).attr('data-index');
    var winH = $(window).height();
    var name = $(this).attr('next-name');
    
    if(index < 5){
      //点击的是前四个按钮
      //通过按钮的next-name属性，获取下一部分的class值，并给他加上fade-in这个class，触发过渡效果
    viewScroll ('body,html',winH * index,true);
    ++ viewIndex
    if(name){
      $(name).find('.fade').addClass('fade-in');
    }
    }else{
      //点击的是最后一个按钮
      //返回顶部，并且移除各个部分的fade-in这个class，方便再次展示效果
      viewScroll ('body,html',0,false,0);
      viewIndex = 0;
      $('.fade').removeClass('fade-in');
    }

  })

  //统一同理滚动,el:要滚动的元素，height：滚动的值
  //fixed：是否需要固定导航栏,isAdd:是否需要增加viewindex的值
  function viewScroll(el,height,fixed){
    //判断是否固定值
    fixedNav(fixed);
    $(el).animate({
      scrollTop:height
  },600,function(){
  })
  }
  //固定导航栏,flag表示是否需要固定
  function fixedNav(flag){
    if(flag){
      $('.section-header .nav').addClass('fixed');
    }
    else{
      $('.section-header .nav').removeClass('fixed');
    }
   
  }
  // //throttle
  //  $(window).scroll(function(){
  //   viewScroll ('body,html',$(Window).height(),true);
  //  })
  //处理页面滚动
  window.onscroll =throttleFn(function (){
    
  },50);
 //节流函数
  function throttleFn(Fn,delay){
    var timer = null;
    return function(){
      var that = this,args=arguments;
      cleanTimeout(timer);
      timer = setTimeout(function(){
        Fn.apply(that,args)
      },delay)
    }
 }
 $(document).on('mousewheel DOMMouseScroll',function(e){
   //保存js原生事件的参数
   var e0 = e.originalEvent,
   //根据值的正反判断滚动的方向
   detail = e0.wheelDetail ,
   isScrollDown = detail < 0 ? true :false;
   var height = 0;
   var winH = $(window).height();
   var fixed= true;
   isScrollDown ? height = (viewIndex+1) * winH : (viewIndex-1) * winH ;
   if(isScrollDown){
     fixed = true;
   }else{
     if(viewIndex > 1){
      fixed = true;
     }else{
      fixed = false;
     }
   }
   viewScroll('html',height,fixed)
  })
})