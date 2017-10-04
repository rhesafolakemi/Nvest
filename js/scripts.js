function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//javascript for search page
var item1 = "this is for Mutual funds";
var item2 = "this is for fund mgt";
var item3 = "this is for Wealth mgt";
//User interface
$(document).ready(function () {
  $("button#search1").click(function(){
    event.preventDefault();
    if ($("#usr1").val()==="Mutual Fund"){
      $("#product1").append(item1);
    }else if($("#usr1").val()==="Wealth Management"){
      $("#product1").append(item2);
    }else if ($("#usr1").val()==="Fund management") {
      $("#product1").append(item3);
    }
    });

    $("button#search2").click(function(){
      event.preventDefault();
      $( "#usr2" ).autocomplete( "option", "appendTo", "#someElem" );
      if ($("#usr2").val()==="Mutual Fund"){
        $("#product2").append(item1);
      }else if($("#usr2").val()==="Wealth Management"){
        $("#product2").append(item2);
      }else if ($("#usr2").val()==="Fund management") {
        $("#product2").append(item3);
      }
    });
});
