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

});

//   $('.work1Logo').hover(function() {
//     alert('hovering')
//     $("#work1Text").show();
//   });
// });
