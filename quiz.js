$(document).ready(function () {
  $(".selectdiv").hide(0);
  $(".htmlquiz").hide(0);
  $(".q1").hide(0);
  $(".q2").hide(0);
  $(".q3").hide(0);
  $(".q4").hide(0);
  $(".q5").hide(0);
  $(".result").hide(0);
  $("#r1").hide(0);
  $("#bn1").hide(0);
  $("#bn2").hide(0);
  $("#bn3").hide(0);
  $("#bn4").hide(0);
  $(".subtn").click(function () {
    $(".fform").slideUp(500);
    $(".subtn").slideUp(500);
    $(".htmlquiz").slideDown(400);
    $(".q1").slideDown(1000);
  });
  var choice = 0;
  $("#oph11").click(function () {
    choice = 1;
  });
  $("#oph12").click(function () {
    choice = 2;
  });
  $("#oph13").click(function () {
    choice = 3;
  });
  $("#oph14").click(function () {
    choice = 4;
  });




  $("#bs1").click(function () {
    if (choice === 1) {
      console.log("choice is 1");
      $(".options11").css("background-color", "rgb(20,150,20");
      $("#bs1").slideUp(500);
      $("#bn1").slideDown(500);
    }
    else if (choice === 2) {
      console.log("choice is 2");
      $(".options12").css("background-color", "rgb(150,20,20");
      $(".options11").css("background-color", "rgb(20,150,20");
      $("#bs1").slideUp(500);
      $("#bn1").slideDown(500);
    }
    else if (choice === 3) {
      console.log("choice is 3");
      $(".options13").css("background-color", "rgb(150,20,20");
      $(".options11").css("background-color", "rgb(20,150,20");
      $("#bs1").slideUp(500);
      $("#bn1").slideDown(500);
    }
    else if (choice === 4) {
      console.log("choice is 4");
      $(".options14").css("background-color", "rgb(150,20,20");
      $(".options11").css("background-color", "rgb(20,150,20");
      $("#bs1").slideUp(500);
      $("#bn1").slideDown(500);
    }
  });





  $("#oph21").click(function () {
    choice = 1;
  });
  $("#oph22").click(function () {
    choice = 2;
  });
  $("#oph23").click(function () {
    choice = 3;
  });
  $("#oph24").click(function () {
    choice = 4;
  });
  $("#bs2").click(function () {
    if (choice === 1) {
      console.log("choice is 1");
      $(".options21").css("background-color", "rgb(150,20,20");
      $(".options22").css("background-color", "rgb(20,150,20");
      $("#bs2").slideUp(500);
      $("#bn2").slideDown(500);
    }
    else if (choice === 2) {
      console.log("choice is 2");
      $(".options22").css("background-color", "rgb(20,150,20");
      $("#bs2").slideUp(500);
      $("#bn2").slideDown(500);
    }
    else if (choice === 3) {
      console.log("choice is 3");
      $(".options23").css("background-color", "rgb(150,20,20");
      $(".options22").css("background-color", "rgb(20,150,20");
      $("#bs2").slideUp(500);
      $("#bn2").slideDown(500);
    }
    else if (choice === 4) {
      console.log("choice is 4");
      $(".options24").css("background-color", "rgb(150,20,20");
      $(".options22").css("background-color", "rgb(20,150,20");
      $("#bs2").slideUp(500);
      $("#bn2").slideDown(500);
    }
  });




  $("#oph31").click(function () {
    choice = 1;
  });
  $("#oph32").click(function () {
    choice = 2;
  });
  $("#oph33").click(function () {
    choice = 3;
  });
  $("#oph34").click(function () {
    choice = 4;
  });
  $("#bs3").click(function () {
    if (choice === 1) {
      console.log("choice is 1");
      $(".options31").css("background-color", "rgb(150,20,20");
      $(".options33").css("background-color", "rgb(20,150,20");
      $("#bs3").slideUp(500);
      $("#bn3").slideDown(500);
    }
    else if (choice === 2) {
      console.log("choice is 2");
      $(".options33").css("background-color", "rgb(20,150,20");
      $(".options32").css("background-color", "rgb(150,20,20");
      $("#bs3").slideUp(500);
      $("#bn3").slideDown(500);
    }
    else if (choice === 3) {
      console.log("choice is 3");
      $(".options33").css("background-color", "rgb(20,150,20");
      $("#bs3").slideUp(500);
      $("#bn3").slideDown(500);
    }
    else if (choice === 4) {
      console.log("choice is 4");
      $(".options34").css("background-color", "rgb(150,20,20");
      $(".options33").css("background-color", "rgb(20,150,20");
      $("#bs3").slideUp(500);
      $("#bn3").slideDown(500);
    }
  });






  $("#oph41").click(function () {
    choice = 1;
  });
  $("#oph42").click(function () {
    choice = 2;
  });
  $("#oph43").click(function () {
    choice = 3;
  });
  $("#oph44").click(function () {
    choice = 4;
  });
  $("#bs4").click(function () {
    if (choice === 1) {
      console.log("choice is 1");
      $(".options41").css("background-color", "rgb(150,20,20");
      $(".options42").css("background-color", "rgb(20,150,20");
      $("#bs4").slideUp(500);
      $("#bn4").slideDown(500);
    }
    else if (choice === 2) {
      console.log("choice is 2");
      $(".options42").css("background-color", "rgb(20,150,20");
      $("#bs4").slideUp(500);
      $("#bn4").slideDown(500);
    }
    else if (choice === 3) {
      console.log("choice is 3");
      $(".options42").css("background-color", "rgb(20,150,20");
      $(".options43").css("background-color", "rgb(150,20,20");
      $("#bs4").slideUp(500);
      $("#bn4").slideDown(500);
    }
    else if (choice === 4) {
      console.log("choice is 4");
      $(".options44").css("background-color", "rgb(150,20,20");
      $(".options42").css("background-color", "rgb(20,150,20");
      $("#bs4").slideUp(500);
      $("#bn4").slideDown(500);
    }
  });





  $("#oph51").click(function () {
    choice = 1;
  });
  $("#oph52").click(function () {
    choice = 2;
  });
  $("#oph53").click(function () {
    choice = 3;
  });
  $("#oph54").click(function () {
    choice = 4;
  });




  $("#bn5").click(function () {
    if (choice === 1) {
      console.log("choice is 1");
      $(".options51").css("background-color", "rgb(20,150,20");
      $("#bn5").slideUp(500);
      $("#r1").slideDown(500);
    }
    else if (choice === 2) {
      console.log("choice is 2");
      $(".options52").css("background-color", "rgb(150,20,20");
      $(".options51").css("background-color", "rgb(20,150,20");
      $("#bn5").slideUp(500);
      $("#r1").slideDown(500);
    }
    else if (choice === 3) {
      console.log("choice is 3");
      $(".options53").css("background-color", "rgb(150,20,20");
      $(".options51").css("background-color", "rgb(20,150,20");
      $("#bn5").slideUp(500);
      $("#r1").slideDown(500);
    }
    else if (choice === 4) {
      console.log("choice is 4");
      $(".options54").css("background-color", "rgb(150,20,20");
      $(".options51").css("background-color", "rgb(20,150,20");
      $("#bn5").slideUp(500);
      $("#r1").slideDown(500);
    }
  });









  $("#bn1").click(function(){
    $(".q1").hide(0);
    $(".q2").slideDown(1000);
  });

  $("#bn2").click(function () {
    $(".q2").hide(0);
    $(".q3").slideDown(1000);
  });
  $("#bn3").click(function () {
    $(".q3").hide(0);
    $(".q4").slideDown(1000);
  });
  $("#bn4").click(function () {
    $(".q4").hide(0);
    $(".q5").slideDown(1000);
  });
  $("#bn5").click(function () {
    $("#bn5").slideUp(500);
    $("#r1").slideDown(400);
  });

  $(".subtn").click(function () {
    let x = $("#name:text").val();
    document.getElementById("rinpp").innerHTML = x;
    console.log(x);
  });

  var score1 = 0;
  var score2 = 0;
  var score3 = 0;
  var score4 = 0;
  var score5 = 0;
  var total = 0;
  $("#oph11").click(function () {
    $("#bn1").click(function () {
      score1 = 1;
      total = score1;
      console.log(score1);
    });
  });
  $("#oph22").click(function () {
    $("#bn2").click(function () {
      score2 = 1;
      total = score2 + total;
      console.log(score2);
    });
  });
  $("#oph33").click(function () {
    $("#bn3").click(function () {
      score3 = 1;
      total = score3 + total;
      console.log(score3);
    });
  });
  $("#oph42").click(function () {
    $("#bn4").click(function () {
      score4 = 1;
      total = total + score4;
      console.log(score4);
    });
  });
  $("#oph51").click(function () {
    $("#bn5").click(function () {
      score5 = 1;
      total = total + score5;
      console.log(score5);
    });
  });
  $("#r1").click(function () {
    $(".q5").hide(0);
    console.log(total);
    $(".result").slideDown(500);
    document.getElementById("sinpp").innerHTML = total;
  });
  function animatee() {
    $(".heading").animate(
      {
        fontSize: "4.8vw",
      },
      1000
    );
    $(".heading").animate(
      {
        fontSize: "4vw",
      },
      1000
    );
    animatee();
  }
});
