function fixedbtnclick(){
    
    location.href='signup.html';
        
    }

    function googleLink(){
      location.href='https://accounts.google.com'
  }
    
    function closePopUp(){
      var myWindow=document.getElementById("boxes");
     document.getElementById("boxes").style.display="none";

      debugger
      
      myWindow.close();
    }

function openNav() {
  document.getElementById("noComment").style.width = "350px";
  document.getElementById("mainLayout").style.marginLeft = "350px";
}


function closeNav() {
  document.getElementById("noComment").style.width = "0";
  document.getElementById("mainLayout").style.marginLeft = "0";
} 
    
$(document).ready(function() { 
    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight}); 
          var winH = $(window).height();
    var winW = $(window).width();
          $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
      $(id).fadeIn(2000);  
      $('.window .close').click(function (e) {
    e.preventDefault();
    $('#mask').hide();
    $('.window').hide();
      });  
      $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
   });  
   
  });
  
  
