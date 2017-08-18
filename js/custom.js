var clock;

$(document).ready(function() {

    $('#start').click(function(e) {
      $('#welcome').fadeOut(duration = 1000);
      setTimeout(function() { $('#challenge').fadeIn(duration = 1000); }, 900);
      
      var count = 0;
      var hotSauces = [
        ["Secret Aardvark", "100"], 
        ["Hot Ones Fiery Chipotle", "200"], 
        ["Blair's Mega Death", "300"]
      ];
  
      $('#hotSauce').html(hotSauces[count][0]);
      $('#scovilles').html(hotSauces[count][1] + " Scoville Units");
  
      clock = new FlipClock($('.clock'), 5, {
        clockFace: 'MinuteCounter',
        autoStart: true,
        countdown: true,
        callbacks: {
            stop: function() {
                setTimeout(function(){
                  clock.setTime(5);
                  clock.start();
                  count += 1;
                  $('#hotSauce').html(hotSauces[count][0]);
                  $('#scovilles').html(hotSauces[count][1] + " Scoville Units");
                }, 1000);
            }
        }
      });     

      function runFunction() {
        if(count == hotSauces.length) { 
          $('#challenge').hide();
          $('#ending').fadeIn(duration = 1000);
        }
      }

      var t=setInterval(runFunction, 10);

    });
    
});