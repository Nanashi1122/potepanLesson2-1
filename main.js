/*global $*/
$(document).ready(function(){
  var timerID;
  var h = 0;
  var m = 0;
  var s = 0;
  var ms = 0;
  var hour,min,sec,msec;

  $('#start').click(function(){
    timerID = setInterval(count, 10);
    $(this).prop('disabled', true);
    $('#stop,#reset').prop('disabled', false);
  })
  
  $('#stop').click(function(){
    clearInterval(timerID);
    $(this).prop('disabled', true);
    $('#start,#reset').prop('disabled', false);
  });
  
  $('#reset').click(function(){
    clearInterval(timerID);
    $('#time').html('00:00:00:00');
    $('#stop,#reset').prop('disabled', true);
    $('#start').prop('disabled', false);
  });
  
  function count(){
    ms += 1;
    
    if(ms > 99){
      s += 1;
      ms = 0;
    }
    if(s > 59){
      m += 1;
      s = 0;
    }
    if(m > 59){
      h += 1;
      m = 0;
    }
    
    if(h < 10){
      hour = '0' + h;
    }else{
      hour = h;
    }
    if(m < 10){
      min = '0' + m;
    }else{
      min = m;
    }
    if(s < 10){
      sec = '0' + s;
    }else{
      sec = s;
    }
    if(ms < 10){
      msec = '0' + ms;
    }else{
      msec = ms;
    }
  
    $('#time').html(hour + ':' + min + ':' + sec + ':' + msec);
  }

});