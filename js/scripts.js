$(document).ready(function(){
  $("button[type='submit']").click(function(){

  });
  $("button[type='submit']").click(function(){
    var form = document.getElementById("name");
    form.reset();
    var form = document.getElementById("form-group");
    form.reset();
    var ele = document.getElementsByName("species");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
  });
  $("button[type='submit']").click(function(){

    var radioValue = $("input[value='Altenative']:checked").val();
    if(radioValue){
      $("ul.alternative").append("<li>*</li>");
    }
    var radioValue = $("input[value='Classical']:checked").val();
    if(radioValue){
      $("ul.classical").append("<li>*</li>");
    }
    var radioValue = $("input[value='Country']:checked").val();
    if(radioValue){
      $("ul.country").append("<li>*</li>");
    }
    var radioValue = $("input[value='Dance']:checked").val();
    if(radioValue){
      $("ul.Dance").append("<li>*</li>");
    }
    var radioValue = $("input[value='Electronic']:checked").val();
    if(radioValue){
      $("ul.Electronic").append("<li>*</li>");
    }

    var radioValue = $("input[value='Hip hop']:checked").val();
    if(radioValue){
      $("ul.Hip-hop").append("<li>*</li>");
    }
    var radioValue = $("input[value='Jazz']:checked").val();
    if(radioValue){
      $("ul.Jazz").append("<li>*</li>");
    }
    var radioValue = $("input[value='Pop']:checked").val();
    if(radioValue){
      $("ul.Pop").append("<li>*</li>");
    }
    var radioValue = $("input[value='R&B']:checked").val();
    if(radioValue){
      $("ul.RandB").append("<li>*</li>");
    }

    var radioValue = $("input[value='Reggae']:checked").val();
    if(radioValue){
      $("ul.Reggae").append("<li>*</li>");
    }
    var radioValue = $("input[value='Rock']:checked").val();
    if(radioValue){
      $("ul.Rock").append("<li>*</li>");
    }

    var radioValue = $("input[value='Singer/Songwriter']:checked").val();
    if(radioValue){
      $("ul.Singer-Songwriter").append("<li>*</li>");
    }
  });
});
