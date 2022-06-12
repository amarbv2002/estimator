//Unikbrushes jQuery code starts

var firstDiv = $("#ho-estimator");
var secondDiv = $("#ho-project");
var thirdDiv = $("#ho-activity");
var projectFirstPlus = $("#ho-projectfirstplus");
var activityFirstPlus = $("#ho-activityfirstplus");
var activitySecondPlus = $("#ho-activitysecondplus");
var estimatorFirstPlus = $("#ho-estimatorfirstplus");
var wipDropdown = $(".ho-orangecolor");

$(document).ready(function() {
//main
  firstDiv.click(() => {
    $(".ho-estimatorall").addClass("ho-open");
    $(".ho-projectall").removeClass("ho-open");
    $(".ho-activityall").removeClass("ho-open");
    $(".ho-projectfirstplus").removeClass("ho-open");
    $(".ho-activityfirstplus").removeClass("ho-open");
    $(".ho-activitysecondplus").removeClass("ho-open");
    //Active status of the buttons
    $("#ho-estimator").addClass("ho-active-btn");
    $("#ho-project").removeClass("ho-active-btn");
    $("#ho-activity").removeClass("ho-active-btn");
  });

  secondDiv.click(() => {
    $(".ho-estimatorall").removeClass("ho-open");
    $(".ho-projectall").addClass("ho-open");
    $(".ho-activityall").removeClass("ho-open");
    $(".ho-projectfirstplus").removeClass("ho-open");
    $(".ho-activityfirstplus").removeClass("ho-open");
    $(".ho-activitysecondplus").removeClass("ho-open");
    //Active status of the buttons
    $("#ho-estimator").removeClass("ho-active-btn");
    $("#ho-project").addClass("ho-active-btn");
    $("#ho-activity").removeClass("ho-active-btn");
  });

  thirdDiv.click(() => {
    $(".ho-estimatorall").removeClass("ho-open");
    $(".ho-projectall").removeClass("ho-open");
    $(".ho-activityall").addClass("ho-open");
    $(".ho-projectfirstplus").removeClass("ho-open");
    $(".ho-activityfirstplus").removeClass("ho-open");
    $(".ho-activitysecondplus").removeClass("ho-open");
    //Active status of the buttons
    $("#ho-estimator").removeClass("ho-active-btn");
    $("#ho-project").removeClass("ho-active-btn");
    $("#ho-activity").addClass("ho-active-btn");
  });

//secondary
  estimatorFirstPlus.click(() => {
    $(".ho-estimatorfirstplus").toggleClass("ho-open");
  });

  projectFirstPlus.click(() => {
    $(".ho-projectfirstplus").toggleClass("ho-open");
    $(".ho-rightprojectall").toggleClass("ho-open");
    $(".ho-activityfirstplus").removeClass("ho-open");
  });

  activityFirstPlus.click(() => {
    $(".ho-activityfirstplus").toggleClass("ho-open");
  });

  activitySecondPlus.click(() => {
    $(".ho-activitysecondplus").toggleClass("ho-open");
  });

  wipDropdown.click(() => {
    $(".ho-wipdrop").toggleClass("ho-open");
  });

  if(window.innerWidth < 992){
    $('.ho-removeshow').removeClass('show');
  }

});

//Unikbrushes jQuery code ends