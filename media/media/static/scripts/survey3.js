function show(shown) {
  window.scroll(0,0);
  var pages = ['page1', 'page2', 'page3'];
  var pageIndex;
  for (pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    pageId = pages[pageIndex];
    if (shown == pageId) {
        document.getElementById(shown).style='display: flex;flex-direction: column;position: relative;';
    }
    else {
      document.getElementById(pageId).style.display='none';
    }
  }
  return 0;
}

function donationWillingSlide() {
  var value=document.getElementById("donationWillingSlider").value;
  var donationWillingAmount = `${value}元`;
  document.getElementById("donationWillingAmount").value=donationWillingAmount;
  var left = 2 + 0.266 * value;
  document.getElementById("donationWillingAmount").style.marginLeft = left + "px";
}

function outdoorTimeSlide() {
  var value=document.getElementById("outdoorTimeSlider").value;
  var hours;
  var minutes;
  if (value >= 1200) {
    document.getElementById("outdoorTimeAmount").value=`大于等于20小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("outdoorTimeAmount").value=time;
  }
  var left = 0 + 0.17 * value;
  document.getElementById("outdoorTimeAmount").style.paddingLeft = left + "px";
}

function exerciseTimeSlide() {
  var value=document.getElementById("exerciseTimeSlider").value;
  var hours;
  var minutes;
  if (value >= 1200) {
    document.getElementById("exerciseTimeAmount").value=`大于等于20小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("exerciseTimeAmount").value=time;
  }
  var left = 0 + 0.17 * value;
  document.getElementById("exerciseTimeAmount").style.paddingLeft = left + "px";
}

// function randomizeSlider(min, max, sliderName, sliderAmount, leftStart, moveStep, unit) {
//   var random = Math.floor(Math.random() * (max - min)) + min;
//   $(sliderName).val(random);
//   $(sliderAmount).val(random + unit);
//   var left = leftStart + moveStep * random;
//   $(sliderAmount).css("padding-left", left);
// }
//
// function randomizeTimeSlider(min, max, sliderName, sliderAmount, leftStart, moveStep) {
//   var value = Math.floor(Math.random() * (max - min)) + min;
//   var hours;
//   var minutes;
//   var time;
//   hours = Math.floor(value / 60);
//   minutes = value % 60;
//   if (value >= 1200) {
//     time = `大于等于20小时`;
//   }
//   else {
//     hours = Math.floor(value / 60);
//     minutes = value % 60;
//     time = `${hours}小时 ${minutes}分钟`;
//   }
//   $(sliderName).val(value);
//   $(sliderAmount).val(time);
//   var left = leftStart + moveStep * value;
//   $(sliderAmount).css("padding-left", left);
// }
//
// $( document ).ready(function() {
//   randomizeSlider(0, 300, "#signUpFeeSlider", "#signUpFeeAmount", 2, 0.9, "元");
//   randomizeTimeSlider(0, 300, "#exerciseTimeSlider", "#exerciseTimeAmount", 0, 0.17);
//   randomizeTimeSlider(0, 300, "#outdoorTimeSlider", "#outdoorTimeAmount", 0, 0.17);
// });

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function randomize() {
  // shuffle order
  var order = [1, 2, 3, 4, 5];
  order = shuffle(order);
  // record as hidden input
  document.getElementById("newsOrder").value = order.join('');
  // update order
  var i;
  for (i = 0; i < order.length - 1; i++) {
    $( "#news"+order[i] ).after( $( "#news"+order[i+1] ) );
  }
}

$( document ).ready(function() {
  randomize();
});
