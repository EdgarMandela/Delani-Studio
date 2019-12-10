$(document).ready(function() {
  $("#designIcon").click(function() {
    $("#Design").hide();
    $(".toggleDesignIcon").show();
  });
  $(".toggleDesignIcon").click(function() {
    $(".toggleDesignIcon").hide();
    $("#Design").show();
  });
  
$("#devIcon").click(function() {
  $("#Development").hide();
  $(".toggleDevIcon").show();
});
$(".toggleDevIcon").click(function() {
  $(".toggleDevIcon").hide();
  $("#Development").show();
});

$("#productIcon").click(function() {
  $("#Product").hide();
  $(".toggleProductIcon").show();
});
$(".toggleProductIcon").click(function() {
  $(".toggleProductIcon").hide();
  $("#Product").show();
})
$("#pic1").hover(function(){
  $("#text1").toggle("slow");
})
$("#pic2").hover(function(){
  $("#text2").toggle("slow");
})
$("#pic3").hover(function(){
  $("#text3").toggle("slow");
})
$("#pic4").hover(function(){
  $("#text4").toggle("slow");
});
$("#pic5").hover(function(){
  $("#text5").toggle("slow");
})
$("#pic6").hover(function(){
  $("#text6").toggle("slow");
})
$("#pic7").hover(function(){
  $("#text7").toggle("slow");
})
$("#pic8").hover(function(){
  $("#text8").toggle("slow");
});

});


function form () {
  var name=document.getElementByid("mce-NAME nameInput").value;
  var email=document.getElementById("mce-EMAIL exampleFormControlInput1").value;
  var text=document.getElementById("mce-MESSAGE messageInput").value;

  if (name == "" ||email== "" || text== "") {
    alert("please fill out every space.");
  }else{
    alert("Hey " + name +" Thank you for contacting us,we will get back to you shortly.");
  }
}
 
$(document).ready(function(){
$("form").submit(function(){
  alert("Thank you for reaching  out to us")
});
});