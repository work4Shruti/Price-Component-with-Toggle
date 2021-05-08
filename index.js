var count=0;
$(".slider").on("click", function annualCharges(){
  count=count+1;
  if (count%2!=0) {
    $(".basic-amount").html("&dollar;199.99");
    $(".professional-amount").html("&dollar;249.99");
    $(".master-amount").html("&dollar;399.99");
  }
  else {
    $(".basic-amount").html("&dollar;19.99");
    $(".professional-amount").html("&dollar;24.99");
    $(".master-amount").html("&dollar;39.99");
  }
}
)
