function show(shown) {
  window.scroll(0,0);
  // document.getElementById("weatherClearAllStarsButton").style.display='none';
  // document.getElementById("clearAllStarsButton").style.display='none';
  var pages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'];
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

function signUpFeeSlide() {
  var value=document.getElementById("signUpFeeSlider").value;
  var signUpFeeAmount = `${value}元`;
  document.getElementById("signUpFeeAmount").value=signUpFeeAmount;
  var left = 2 + 0.9 * value;
  document.getElementById("signUpFeeAmount").style.paddingLeft = left + "px";
}

function outing1Slide() {
  document.getElementById("outing1Amount").value=Math.floor(document.getElementById("outing1").value/2)*2;
  var value=document.getElementById("outing1").value;
  var factorIds = ['outing1ScaleLabel1', 'outing1ScaleLabel2', 'outing1ScaleLabel3',
  'outing1ScaleLabel4'];
  var selected;
  for (i = 0; i < factorIds.length; i++) {
    notSelected = factorIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';
  }
  if (0 <= value && value < 25) {
    document.getElementById("outing1ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("outing1ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (25 <= value && value < 50) {
    document.getElementById("outing1ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("outing1ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (50 <= value && value < 75) {
    document.getElementById("outing1ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("outing1ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (75 <= value && value <= 100) {
    document.getElementById("outing1ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("outing1ScaleLabel4").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * value;
  document.getElementById("outing1Amount").style.paddingLeft = left + "px";
}

function outing2Slide() {
  document.getElementById("outing2Amount").value=Math.floor(document.getElementById("outing2").value/2)*2;
  var value=document.getElementById("outing2").value;
  var factorIds = ['outing2ScaleLabel1', 'outing2ScaleLabel2', 'outing2ScaleLabel3',
  'outing2ScaleLabel4'];
  var selected;
  for (i = 0; i < factorIds.length; i++) {
    notSelected = factorIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';
  }
  if (0 <= value && value < 25) {
    document.getElementById("outing2ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("outing2ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (25 <= value && value < 50) {
    document.getElementById("outing2ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("outing2ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (50 <= value && value < 75) {
    document.getElementById("outing2ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("outing2ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (75 <= value && value <= 100) {
    document.getElementById("outing2ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("outing2ScaleLabel4").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * value;
  document.getElementById("outing2Amount").style.paddingLeft = left + "px";
}

function outing3Slide() {
  document.getElementById("outing3Amount").value=Math.floor(document.getElementById("outing3").value/2)*2;
  var value=document.getElementById("outing3").value;
  var factorIds = ['outing3ScaleLabel1', 'outing3ScaleLabel2', 'outing3ScaleLabel3',
  'outing3ScaleLabel4'];
  var selected;
  for (i = 0; i < factorIds.length; i++) {
    notSelected = factorIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';
  }
  if (0 <= value && value < 25) {
    document.getElementById("outing3ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("outing3ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (25 <= value && value < 50) {
    document.getElementById("outing3ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("outing3ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (50 <= value && value < 75) {
    document.getElementById("outing3ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("outing3ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (75 <= value && value <= 100) {
    document.getElementById("outing3ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("outing3ScaleLabel4").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * value;
  document.getElementById("outing3Amount").style.paddingLeft = left + "px";
}

function outing4Slide() {
  document.getElementById("outing4Amount").value=Math.floor(document.getElementById("outing4").value/2)*2;
  var value=document.getElementById("outing4").value;
  var factorIds = ['outing4ScaleLabel1', 'outing4ScaleLabel2', 'outing4ScaleLabel3',
  'outing4ScaleLabel4'];
  var selected;
  for (i = 0; i < factorIds.length; i++) {
    notSelected = factorIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';
  }
  if (0 <= value && value < 25) {
    document.getElementById("outing4ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("outing4ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (25 <= value && value < 50) {
    document.getElementById("outing4ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("outing4ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (50 <= value && value < 75) {
    document.getElementById("outing4ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("outing4ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (75 <= value && value <= 100) {
    document.getElementById("outing4ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("outing4ScaleLabel4").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * value;
  document.getElementById("outing4Amount").style.paddingLeft = left + "px";
}

function outing5Slide() {
  document.getElementById("outing5Amount").value=Math.floor(document.getElementById("outing5").value/2)*2;
  var value=document.getElementById("outing5").value;
  var factorIds = ['outing5ScaleLabel1', 'outing5ScaleLabel2', 'outing5ScaleLabel3',
  'outing5ScaleLabel4'];
  var selected;
  for (i = 0; i < factorIds.length; i++) {
    notSelected = factorIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';
  }
  if (0 <= value && value < 25) {
    document.getElementById("outing5ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("outing5ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (25 <= value && value < 50) {
    document.getElementById("outing5ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("outing5ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (50 <= value && value < 75) {
    document.getElementById("outing5ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("outing5ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (75 <= value && value <= 100) {
    document.getElementById("outing5ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("outing5ScaleLabel4").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * value;
  document.getElementById("outing5Amount").style.paddingLeft = left + "px";
}

function domesticWebsiteSlide() {
  var value=document.getElementById("domesticWebsiteSlider").value;
  var hours;
  var minutes;
  if (value > 180) {
    document.getElementById("domesticWebsiteAmount").value=`大于3小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("domesticWebsiteAmount").value=time;
  }
  var left = 5 + 1.21 * value;
  document.getElementById("domesticWebsiteAmount").style.paddingLeft = left + "px";
}

function foreignWebsiteSlide() {
  var value=document.getElementById("foreignWebsiteSlider").value;
  var hours;
  var minutes;
  if (value > 180) {
    document.getElementById("foreignWebsiteAmount").value=`大于3小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("foreignWebsiteAmount").value=time;
  }
  var left = 5 + 1.21 * value;
  document.getElementById("foreignWebsiteAmount").style.paddingLeft = left + "px";
}

function domesticMediaSlide() {
  var value=document.getElementById("domesticMediaSlider").value;
  var hours;
  var minutes;
  if (value > 180) {
    document.getElementById("domesticMediaAmount").value=`大于3小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("domesticMediaAmount").value=time;
  }
  var left = 5 + 1.21 * value;
  document.getElementById("domesticMediaAmount").style.paddingLeft = left + "px";
}

function foreignMediaSlide() {
  var value=document.getElementById("foreignMediaSlider").value;
  var hours;
  var minutes;
  if (value > 180) {
    document.getElementById("foreignMediaAmount").value=`大于3小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("foreignMediaAmount").value=time;
  }
  var left = 5 + 1.21 * value;
  document.getElementById("foreignMediaAmount").style.paddingLeft = left + "px";
}

function chatWithFriendsSlide() {
  var value=document.getElementById("chatWithFriendsSlider").value;
  var hours;
  var minutes;
  if (value > 180) {
    document.getElementById("chatWithFriendsAmount").value=`大于3小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("chatWithFriendsAmount").value=time;
  }
  var left = 5 + 1.21 * value;
  document.getElementById("chatWithFriendsAmount").style.paddingLeft = left + "px";
}

function dunno1() {
  var isDunno1Checked = document.getElementById("dunno1checkbox").checked
  if (isDunno1Checked) {
    document.getElementById("trustSlider1").style.display = "none";
  }
  else {
    document.getElementById("trustSlider1").style.display = "block";
  }
}

function dunno2() {
  var isDunno2Checked = document.getElementById("dunno2checkbox").checked
  if (isDunno2Checked) {
    document.getElementById("trustSlider2").style.display = "none";
  }
  else {
    document.getElementById("trustSlider2").style.display = "block";
  }
}

function dunno3() {
  var isDunno3Checked = document.getElementById("dunno3checkbox").checked
  if (isDunno3Checked) {
    document.getElementById("trustSlider3").style.display = "none";
  }
  else {
    document.getElementById("trustSlider3").style.display = "block";
  }
}

function dunno4() {
  var isDunno4Checked = document.getElementById("dunno4checkbox").checked
  if (isDunno4Checked) {
    document.getElementById("trustSlider4").style.display = "none";
  }
  else {
    document.getElementById("trustSlider4").style.display = "block";
  }
}

function dunno5() {
  var isDunno5Checked = document.getElementById("dunno5checkbox").checked
  if (isDunno5Checked) {
    document.getElementById("trustSlider5").style.display = "none";
  }
  else {
    document.getElementById("trustSlider5").style.display = "block";
  }
}

function dunno6() {
  var isDunno6Checked = document.getElementById("dunno6checkbox").checked
  if (isDunno6Checked) {
    document.getElementById("trustSlider6").style.display = "none";
  }
  else {
    document.getElementById("trustSlider6").style.display = "block";
  }
}

function trust1Slide() {
  document.getElementById("trust1Amount").value=Math.floor(document.getElementById("trust1").value/2)*2;
  var trust=document.getElementById("trust1").value;
  var trustIds = ['trust1ScaleLabel1', 'trust1ScaleLabel2', 'trust1ScaleLabel3',
  'trust1ScaleLabel4', 'trust1ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust1ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust1ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust1ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust1ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust1ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust1ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust1ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust1ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust1ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust1ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * trust;
  document.getElementById("trust1Amount").style.paddingLeft = left + "px";
}

function trust2Slide() {
  document.getElementById("trust2Amount").value=Math.floor(document.getElementById("trust2").value/2)*2;
  var trust=document.getElementById("trust2").value;
  var trustIds = ['trust2ScaleLabel1', 'trust2ScaleLabel2', 'trust2ScaleLabel3',
  'trust2ScaleLabel4', 'trust2ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust2ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust2ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust2ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust2ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust2ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust2ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust2ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust2ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust2ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust2ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * trust;
  document.getElementById("trust2Amount").style.paddingLeft = left + "px";
}

function trust3Slide() {
  document.getElementById("trust3Amount").value=Math.floor(document.getElementById("trust3").value/2)*2;
  var trust=document.getElementById("trust3").value;
  var trustIds = ['trust3ScaleLabel1', 'trust3ScaleLabel2', 'trust3ScaleLabel3',
  'trust3ScaleLabel4', 'trust3ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust3ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust3ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust3ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust3ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust3ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust3ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust3ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust3ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust3ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust3ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * trust;
  document.getElementById("trust3Amount").style.paddingLeft = left + "px";
}

function trust4Slide() {
  document.getElementById("trust4Amount").value=Math.floor(document.getElementById("trust4").value/2)*2;
  var trust=document.getElementById("trust4").value;
  var trustIds = ['trust4ScaleLabel1', 'trust4ScaleLabel2', 'trust4ScaleLabel3',
  'trust4ScaleLabel4', 'trust4ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust4ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust4ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust4ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust4ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust4ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust4ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust4ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust4ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust4ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust4ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * trust;
  document.getElementById("trust4Amount").style.paddingLeft = left + "px";
}

function trust5Slide() {
  document.getElementById("trust5Amount").value=Math.floor(document.getElementById("trust5").value/2)*2;
  var trust=document.getElementById("trust5").value;
  var trustIds = ['trust5ScaleLabel1', 'trust5ScaleLabel2', 'trust5ScaleLabel3',
  'trust5ScaleLabel4', 'trust5ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust5ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust5ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust5ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust5ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust5ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust5ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust5ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust5ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust5ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust5ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * trust;
  document.getElementById("trust5Amount").style.paddingLeft = left + "px";
}

function trust6Slide() {
  document.getElementById("trust6Amount").value=Math.floor(document.getElementById("trust6").value/2)*2;
  var trust=document.getElementById("trust6").value;
  var trustIds = ['trust6ScaleLabel1', 'trust6ScaleLabel2', 'trust6ScaleLabel3',
  'trust6ScaleLabel4', 'trust6ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust6ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust6ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust6ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust6ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust6ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust6ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust6ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust6ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust6ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust6ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 2 + 2.88 * trust;
  document.getElementById("trust6Amount").style.paddingLeft = left + "px";
}

function univerisity(){
  var otherUni = document.getElementById('otherUni');
  if ( otherUni.selected === true ) {
    document.getElementById("otherUniFiller").style.display = "block";
  }
  else {
    document.getElementById("otherUniFiller").style.display = "none";
  }
}

function hideOnCampusAddress(){
  document.getElementById("onCampusAddress").style.display = "none";
  document.getElementById("dormName").required = false;
}

function showOnCampusAddress(){
  document.getElementById("onCampusAddress").style.display = "block";
  document.getElementById("dormName").required = true;
}
//
// function randomizeSlider(min, max, sliderName, sliderAmount, leftStart, moveStep, unit) {
//   var random = Math.floor(Math.random() * (max - min)) + min;
//   $(sliderName).val(random);
//   $(sliderAmount).val(random + unit);
//   var left = leftStart + moveStep * random;
//   $(sliderAmount).css("padding-left", left);
// }

// function randomizeTimeSlider(min, max, sliderName, sliderAmount, leftStart, moveStep) {
//   var value = Math.floor(Math.random() * (max - min)) + min;
//   var hours;
//   var minutes;
//   var time;
//   hours = Math.floor(value / 60);
//   minutes = value % 60;
//   if (value >= 180) {
//     time = `大于3小时`;
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
//   randomizeSlider(0, 100, "#outing1", "#outing1Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#outing2", "#outing2Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#outing3", "#outing3Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#outing4", "#outing4Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#outing5", "#outing5Amount", 2, 2.88, "");
//
//   randomizeSlider(0, 100, "#trust1", "#trust1Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#trust2", "#trust2Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#trust3", "#trust3Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#trust4", "#trust4Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#trust5", "#trust5Amount", 2, 2.88, "");
//   randomizeSlider(0, 100, "#trust6", "#trust6Amount", 2, 2.88, "");
//
//   randomizeTimeSlider(0, 200, "#domesticWebsiteSlider", "#domesticWebsiteAmount", 5, 1.21);
//   randomizeTimeSlider(0, 200, "#foreignWebsiteSlider", "#foreignWebsiteAmount", 5, 1.21);
//   randomizeTimeSlider(0, 200, "#domesticMediaSlider", "#domesticMediaAmount", 5, 1.21);
//   randomizeTimeSlider(0, 200, "#foreignMediaSlider", "#foreignMediaAmount", 5, 1.21);
//   randomizeTimeSlider(0, 200, "#chatWithFriendsSlider", "#chatWithFriendsAmount", 5, 1.21);
// });

function validateRadioButton(name) {
  return ($('input[name=' + name + ']:checked').length > 0);
}

function validateText(id) {
  return (document.getElementById(id).value === '');
}

function gotoPage2() {
  if (validateRadioButton('eventLocation')) {
    show('page2');
  }
  else {
    document.getElementById("p1alert").innerHTML = '请选择该活动的举办地点！';
  }
}

function validate() {

  var valid = true;
  valid = valid && validateText('province');

  if (valid) {
    show('page6');
  }
  else {
    document.getElementById("p5alert").innerHTML = '请输入地址！';
  }
}

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
  var order = [1, 2, 3, 4, 5, 6];
  order = shuffle(order);
  // record as hidden input
  document.getElementById("trustOrder").value = order.join('');
  // update order
  var i;
  for (i = 0; i < order.length - 1; i++) {
    $( "#question"+order[i] ).after( $( "#question"+order[i+1] ) );
  }
}

$( document ).ready(function() {
  randomize();
});
