$(document).ready(function() {
  $("header").hover(function () {
    $("subhead").show();
  });

  $("subhead").hover(function () {
    $("subhead").hide();

  });

  $("bondi").scroll(function() {
    $("australiatext").show();
  });

  $("santacruz").scroll(function() {
    $("berkeleytext").show();
  });




  console.log('Ran main fn');

});
