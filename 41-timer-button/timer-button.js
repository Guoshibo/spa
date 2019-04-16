/* exported $timerBtn */
var $timerBtn=(function(){
  var cfg={
    container:'.main',
    title:'确定',
    time:9,
    enable:false,
    clickHandler:null
  };

  var n = cfg.time;
  var init = function(conf){
    $.extend(cfg,conf);
    var $contaniner = $(cfg.container);
    /*
    var $timerBtn = $('<input type="button" value="同意(6s)" disabled>');
    $timerBtn.appendTo($container);
    $container.append($timerBtn);
    */
    var DOM = '<input class="timer-button" type="button" value="'+cfg.title+'('+n+'s)" disabled >';
    $contaniner.html(DOM);
    var $btnAgree = $contaniner.find('.timer-button');
    //css内部样式
    /*$btnAgree.css({
    'font-size':'1.2em',
    'height':'60px',
    'width':'200px'
    });
    */
    // $btnAgree.attr('disabled','disabled');
    var timer = window.setInterval(function(){
      n--;
      if(n===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      } 
    },1000);

    $btnAgree.click(function(){
      cfg.clickHandler();
    });
  };
  return {init:init,remove:remove};
}());
