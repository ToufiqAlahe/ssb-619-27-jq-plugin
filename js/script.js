/*===========jq==========*/
$(document).ready(function(){


// ex-1
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// ex-2
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});

// ex-3
$(function(){

  $(".num").numScroll({
    number: 123456,
    symbol:true
  });

});


// ex-4
window.onload = ()=>{
  // $(selector).countMe(delay,speed)
  $("#num1").countMe(40,65);
  $("#num2").countMe(30, 30);
  $("#num3").countMe(40, 50);
}

// ex-5 
 $("#countdown").countdown360({
         radius      : 60,
         seconds     : 100,
         fontColor   : '#FFFFFF',
         autostart   : false,
         onComplete  : function () { console.log('done') }
       }).start()

});