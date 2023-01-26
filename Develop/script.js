const m = moment();

var words;
var hourInfo;


$("#currentDay").text(m.format("dddd, MMMM Do"));

$(document).ready(function () {
  colorChange();
  renderText();
});


function colorChange() {
  var actualTime = moment().hours();

  $(".input").each(function () {
    var timeVar = parseInt($(this).attr("id"));


    if (actualTime > timeVar) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (actualTime < timeVar) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}
$(".saveBtn").click(function () {
  words = $(this).siblings(".input").val();

  hourInfo = $(this).siblings(".hour").text();

  localStorage.setItem(hourInfo, JSON.stringify(words));

  colorChange();
  renderText();
})

