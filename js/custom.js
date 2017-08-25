var clock;

$(document).ready(function() {

    $('#start').click(function(e) {
      $('#welcome').fadeOut(duration = 1000);
      setTimeout(function() { $('#challenge').fadeIn(duration = 1000); }, 900);
      
      var count = 0;
      var hotSauces = [
        ["Sriracha", "2,200"], 
        ["Pain Is Good Louisiana Style", "3,880"], 
        ["El Yucateco Red Habanero", "5,790"],
        ["Queen Majesty Scotch Bonnet & Ginger", "9,000"], 
        ["Queen Majesty Red Habanero & Black Coffee", "14,000"], 
        ["Hot Ones Fiery Chipotle", "15,600"],
        ["Dirty Dick's Hot Sauce", "21,000"], 
        ["Bravado Spice Co. Ghost Pepper & Blueberry", "28,000"], 
        ["High River Rogue", "50,000"],
        ["Torchbearer Zombie Apocalypse", "100,000"], 
        ["Da' Bomb Beyond Insanity", "119,700"], 
        ["Mad Dog 357", "357,000"],
        ["Blair's Mega Death Sauce With Liquid Rage", "550000"]
      ];
  
      $('#hotSauce').html(hotSauces[count][0]);
      $('#scovilles').html(hotSauces[count][1] + " Scoville Units");
  
      clock = new FlipClock($('.clock'), 180, {
        clockFace: 'MinuteCounter',
        autoStart: true,
        countdown: true,
        callbacks: {
            stop: function() {
                setTimeout(function(){
                  clock.setTime(180);
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