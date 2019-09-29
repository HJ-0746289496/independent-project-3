$(document).ready (function(){
  $(".major").click (function(){
    $("#img").toggle();
    $("#para").toggle();
  });
  $(".mine").click (function(){
    $("#dev").toggle();
    $("#hello").toggle();
  });
  $(".min").click (function(){
    $("#duct").toggle();
    $("#pro").toggle();
  });
  
});

$(document).ready(function(){
  $("form#feedbackForm").submit(function(event){
    var name = $("input#userName").val();
    var email = $("input#inputEmail").val();
    var message = $("textarea#userMessage").val();
    if ($("input#userName").val() && $("input#inputEmail").val()){
      alert (name + ", We have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });

});

