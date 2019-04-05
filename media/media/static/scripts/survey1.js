function show(shown) {
  document.getElementById("weatherClearAllStarsButton").style.display='none';
  document.getElementById("clearAllStarsButton").style.display='none';
  var pages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'];
  var pageIndex;
  for (pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    pageId = pages[pageIndex];
    if (shown == pageId) {
      if (shown == 'page3') {
        var alert = document.getElementById("weatherStarAlert").innerHTML;
        var numStarLeft = document.getElementById("weatherStarLeftCount").innerHTML;
        if ((parseInt(numStarLeft)) > 0) {
          document.getElementById("weatherStarAlert").innerHTML = '请用完所有星星！';
          document.getElementById('page2').style.display='block';
          document.getElementById("weatherClearAllStarsButton").style.display='block';
        }
        else {
          document.getElementById('page3').style.display='block';
        }
      }
      else if (shown == 'page4') {
        var alert = document.getElementById("starAlert").innerHTML;
        var numStarLeft = document.getElementById("starLeftCount").innerHTML;
        if ((parseInt(numStarLeft)) > 0) {
          document.getElementById("starAlert").innerHTML = '请用完所有星星！';
          document.getElementById('page3').style.display='block';
          document.getElementById("clearAllStarsButton").style.display='block';
        }
        else {
          document.getElementById('page4').style.display='block';
        }
      }
      else {
        document.getElementById(shown).style.display='block';
      }
    }
    else {
      document.getElementById(pageId).style.display='none';
    }
  }
  return 0;
}

function eventTimeSlide() {
  var value=document.getElementById("eventTimeSlider").value;
  var hours;
  var minutes;
  if (value > 600) {
    document.getElementById("eventTimeAmount").value=`大于10小时`;
  }
  else {
    hours = Math.floor(value / 60);
    minutes = value % 60;
    var time = `${hours}小时 ${minutes}分钟`;
    document.getElementById("eventTimeAmount").value=time;
  }
}

weatherShowClearAllStarsButton()

function weatherStarCountGroup1(number) {
  var weatherStarLeftCount = document.getElementById("weatherStarLeftCount").innerHTML;
  var count = document.getElementById("weatherStarCountGroup1").innerHTML;
  if (weatherStarLeftCount == 0 && number > count) {
    document.getElementById("weatherStarAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > weatherStarLeftCount) {
    document.getElementById("weatherStarAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup1Cover").innerHTML = '<div class="star" onclick="weatherStarCountGroup1(1)">&starf;</div>';
    document.getElementById("weatherStarCountGroup1").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup1Cover").innerHTML = '';
    document.getElementById("weatherStarCountGroup1").innerHTML = '0';
  }
  else {
    document.getElementById("weatherStarAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="weatherStarCountGroup1(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("weatherStarGroup1Cover").innerHTML = star;
    document.getElementById("weatherStarCountGroup1").innerHTML = number;
  }
  weatherStarLeft();
  return false;
}

function weatherStarCountGroup2(number) {
  var weatherStarLeftCount = document.getElementById("weatherStarLeftCount").innerHTML;
  var count = document.getElementById("weatherStarCountGroup2").innerHTML;
  if (weatherStarLeftCount == 0 && number > count) {
    document.getElementById("weatherStarAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > weatherStarLeftCount) {
    document.getElementById("weatherStarAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup2Cover").innerHTML = '<div class="star" onclick="weatherStarCountGroup1(1)">&starf;</div>';
    document.getElementById("weatherStarCountGroup2").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup2Cover").innerHTML = '';
    document.getElementById("weatherStarCountGroup2").innerHTML = '0';
  }
  else {
    document.getElementById("weatherStarAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="weatherStarCountGroup2(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("weatherStarGroup2Cover").innerHTML = star;
    document.getElementById("weatherStarCountGroup2").innerHTML = number;
  }
  weatherStarLeft();
  return false;
}

function weatherStarCountGroup3(number) {
  var weatherStarLeftCount = document.getElementById("weatherStarLeftCount").innerHTML;
  var count = document.getElementById("weatherStarCountGroup3").innerHTML;
  if (weatherStarLeftCount == 0 && number > count) {
    document.getElementById("weatherStarAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > weatherStarLeftCount) {
    document.getElementById("weatherStarAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup3Cover").innerHTML = '<div class="star" onclick="weatherStarCountGroup1(1)">&starf;</div>';
    document.getElementById("weatherStarCountGroup3").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup3Cover").innerHTML = '';
    document.getElementById("weatherStarCountGroup3").innerHTML = '0';
  }
  else {
    document.getElementById("weatherStarAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="weatherStarCountGroup3(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("weatherStarGroup3Cover").innerHTML = star;
    document.getElementById("weatherStarCountGroup3").innerHTML = number;
  }
  weatherStarLeft();
  return false;
}

function weatherStarCountGroup4(number) {
  var weatherStarLeftCount = document.getElementById("weatherStarLeftCount").innerHTML;
  var count = document.getElementById("weatherStarCountGroup4").innerHTML;
  if (weatherStarLeftCount == 0 && number > count) {
    document.getElementById("weatherStarAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > weatherStarLeftCount) {
    document.getElementById("weatherStarAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup4Cover").innerHTML = '<div class="star" onclick="weatherStarCountGroup1(1)">&starf;</div>';
    document.getElementById("weatherStarCountGroup4").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("weatherStarAlert").innerHTML = '';
    document.getElementById("weatherStarGroup4Cover").innerHTML = '';
    document.getElementById("weatherStarCountGroup4").innerHTML = '0';
  }
  else {
    document.getElementById("weatherStarAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="weatherStarCountGroup4(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("weatherStarGroup4Cover").innerHTML = star;
    document.getElementById("weatherStarCountGroup4").innerHTML = number;
  }
  weatherStarLeft();
  return false;
}

function weatherStarLeft() {
  var weatherStarLeftCount = 12;
  var weatherStarLeft = '';
  weatherStarLeftCount = weatherStarLeftCount
  - document.getElementById("weatherStarCountGroup1").innerHTML
  - document.getElementById("weatherStarCountGroup2").innerHTML
  - document.getElementById("weatherStarCountGroup3").innerHTML
  - document.getElementById("weatherStarCountGroup4").innerHTML
  var i;
  for (i = 0; i < weatherStarLeftCount; i++) {
    weatherStarLeft = weatherStarLeft + '<div class="star">&starf;</div>';
  }
  document.getElementById("weatherStarLeftCount").innerHTML = weatherStarLeftCount + "";
  document.getElementById("weatherStarLeftContainer").innerHTML = weatherStarLeft;
  weatherShowClearAllStarsButton();
}

function weatherShowClearAllStarsButton() {
  var weatherStarLeftCount = document.getElementById("weatherStarLeftCount").innerHTML;
  if ((parseInt(weatherStarLeftCount)) < 12) {
    document.getElementById("weatherClearAllStarsButton").style.display='block';
  }
  else {
    document.getElementById("weatherClearAllStarsButton").style.display='none';
  }
}

function weatherClearAllStars() {
  document.getElementById("weatherStarAlert").innerHTML = '';
  var starCounts = ["weatherStarCountGroup1", "weatherStarCountGroup2", "weatherStarCountGroup3",
  "weatherStarCountGroup4"];
  var starCovers = ["weatherStarGroup1Cover", "weatherStarGroup2Cover", "weatherStarGroup3Cover",
  "weatherStarGroup4Cover"];
  var i;
  for (i = 0; i < starCounts.length; i++) {
    var starCount = starCounts[i];
    document.getElementById(starCount).innerHTML = '0';
    var starCover = starCovers[i];
    document.getElementById(starCover).innerHTML = '';
  }
  weatherStarLeft();
}

function trust1Slide() {
  document.getElementById("trust1Amount").value=document.getElementById("trust1").value
  var trust=document.getElementById("trust1Amount").value;
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
  var left = 10 + 2.97 * trust;
  document.getElementById("trust1Amount").style.left = left + "px";
}

function trust2Slide() {
  document.getElementById("trust2Amount").value=document.getElementById("trust2").value
  var trust=document.getElementById("trust2Amount").value;
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
  var left = 10 + 2.97 * trust;
  document.getElementById("trust2Amount").style.left = left + "px";
}

function trust3Slide() {
  document.getElementById("trust3Amount").value=document.getElementById("trust3").value
  var trust=document.getElementById("trust3Amount").value;
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
  var left = 10 + 2.97 * trust;
  document.getElementById("trust3Amount").style.left = left + "px";
}

function trust4Slide() {
  document.getElementById("trust4Amount").value=document.getElementById("trust4").value
  var trust=document.getElementById("trust4Amount").value;
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
  var left = 10 + 2.97 * trust;
  document.getElementById("trust4Amount").style.left = left + "px";
}

function trust5Slide() {
  document.getElementById("trust5Amount").value=document.getElementById("trust5").value
  var trust=document.getElementById("trust5Amount").value;
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
  var left = 10 + 2.97 * trust;
  document.getElementById("trust5Amount").style.left = left + "px";
}

function trust6Slide() {
  document.getElementById("trust6Amount").value=document.getElementById("trust6").value
  var trust=document.getElementById("trust6Amount").value;
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
  var left = 10 + 2.97 * trust;
  document.getElementById("trust6Amount").style.left = left + "px";
}

function trust7Slide() {
  document.getElementById("trust7Amount").value=document.getElementById("trust7").value
  var trust=document.getElementById("trust7Amount").value;
  var trustIds = ['trust7ScaleLabel1', 'trust7ScaleLabel2', 'trust7ScaleLabel3',
  'trust7ScaleLabel4', 'trust7ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust7ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust7ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust7ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust7ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust7ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust7ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust7ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust7ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust7ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust7ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 10 + 2.97 * trust;
  document.getElementById("trust7Amount").style.left = left + "px";
}

function trust8Slide() {
  document.getElementById("trust8Amount").value=document.getElementById("trust8").value
  var trust=document.getElementById("trust8Amount").value;
  var trustIds = ['trust8ScaleLabel1', 'trust8ScaleLabel2', 'trust8ScaleLabel3',
  'trust8ScaleLabel4', 'trust8ScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("trust8ScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("trust8ScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trust8ScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("trust8ScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trust8ScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("trust8ScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trust8ScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("trust8ScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("trust8ScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("trust8ScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 10 + 2.97 * trust;
  document.getElementById("trust8Amount").style.left = left + "px";
}

function willingnessSlide() {
  document.getElementById("willingnessAmount").value=document.getElementById("willingness").value
  var trust=document.getElementById("willingnessAmount").value;
  var trustIds = ['willingnessLabel1', 'willingnessLabel2', 'willingnessLabel3',
  'willingnessLabel4', 'willingnessLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("willingnessLabel1").style.fontWeight = 'bold';
    document.getElementById("willingnessLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("willingnessLabel2").style.fontWeight = 'bold';
    document.getElementById("willingnessLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("willingnessLabel3").style.fontWeight = 'bold';
    document.getElementById("willingnessLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("willingnessLabel4").style.fontWeight = 'bold';
    document.getElementById("willingnessLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("willingnessLabel5").style.fontWeight = 'bold';
    document.getElementById("willingnessLabel5").style.color = "#4F4F4F";
  }
  var left = 10 + 2.97 * trust;
  document.getElementById("willingnessAmount").style.left = left + "px";
}

function donationWillingSlide() {
  var value=document.getElementById("donationWillingSlider").value;
  var donationWillingAmount = `${value}元`;
  document.getElementById("donationWillingAmount").value=donationWillingAmount;
}

function starCountGroup1(number) {
  var starLeftCount = document.getElementById("starLeftCount").innerHTML;
  var count = document.getElementById("starCountGroup1").innerHTML;
  if (starLeftCount == 0 && number > count) {
    document.getElementById("starAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > starLeftCount) {
    document.getElementById("starAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup1Cover").innerHTML = '<div class="star" onclick="starCountGroup1(1)">&starf;</div>';
    document.getElementById("starCountGroup1").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup1Cover").innerHTML = '';
    document.getElementById("starCountGroup1").innerHTML = '0';
  }
  else {
    document.getElementById("starAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup1(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup1Cover").innerHTML = star;
    document.getElementById("starCountGroup1").innerHTML = number;
  }
  document.getElementById("groupDescription").innerHTML =
  "优：空气质量令人满意，基本无空气污染。各类人群可正常活动。";
  starLeft();
  return false;
}

function starCountGroup2(number) {
  var starLeftCount = document.getElementById("starLeftCount").innerHTML;
  var count = document.getElementById("starCountGroup2").innerHTML;
  if (starLeftCount == 0 && number > count) {
    document.getElementById("starAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > starLeftCount) {
    document.getElementById("starAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup2Cover").innerHTML = '<div class="star" onclick="starCountGroup2(1)">&starf;</div>';
    document.getElementById("starCountGroup2").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup2Cover").innerHTML = '';
    document.getElementById("starCountGroup2").innerHTML = '0';
  }
  else {
    document.getElementById("starAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup2(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup2Cover").innerHTML = star;
    document.getElementById("starCountGroup2").innerHTML = number;
  }
  starLeft();
  document.getElementById("groupDescription").innerHTML =
  "良：空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响。极少数异常敏感人群应减少户外活动。";
  return false;
}

function starCountGroup3(number) {
  var starLeftCount = document.getElementById("starLeftCount").innerHTML;
  var count = document.getElementById("starCountGroup3").innerHTML;
  if (starLeftCount == 0 && number > count) {
    document.getElementById("starAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > starLeftCount) {
    document.getElementById("starAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup3Cover").innerHTML = '<div class="star" onclick="starCountGroup3(1)">&starf;</div>';
    document.getElementById("starCountGroup3").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup3Cover").innerHTML = '';
    document.getElementById("starCountGroup3").innerHTML = '0';
  }
  else {
    document.getElementById("starAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup3(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup3Cover").innerHTML = star;
    document.getElementById("starCountGroup3").innerHTML = number;
  }
  starLeft();
  document.getElementById("groupDescription").innerHTML =
  "轻度污染：易感人群症状有轻度加剧，健康人群出现刺激症状。儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼。";
  return false;
}

function starCountGroup4(number) {
  var starLeftCount = document.getElementById("starLeftCount").innerHTML;
  var count = document.getElementById("starCountGroup4").innerHTML;
  if (starLeftCount == 0 && number > count) {
    document.getElementById("starAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > starLeftCount) {
    document.getElementById("starAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup4Cover").innerHTML = '<div class="star" onclick="starCountGroup4(1)">&starf;</div>';
    document.getElementById("starCountGroup4").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup4Cover").innerHTML = '';
    document.getElementById("starCountGroup4").innerHTML = '0';
  }
  else {
    document.getElementById("starAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup4(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup4Cover").innerHTML = star;
    document.getElementById("starCountGroup4").innerHTML = number;
  }
  starLeft();
  document.getElementById("groupDescription").innerHTML =
  "中度污染：进一步加剧易感人群症状，可能对健康人群心脏、呼吸系统有影响。儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻练，一般人群适量减少户外运动。";
  return false;
}

function starCountGroup5(number) {
  var starLeftCount = document.getElementById("starLeftCount").innerHTML;
  var count = document.getElementById("starCountGroup5").innerHTML;
  if (starLeftCount == 0 && number > count) {
    document.getElementById("starAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > starLeftCount) {
    document.getElementById("starAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup5Cover").innerHTML = '<div class="star" onclick="starCountGroup5(1)">&starf;</div>';
    document.getElementById("starCountGroup5").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup5Cover").innerHTML = '';
    document.getElementById("starCountGroup5").innerHTML = '0';
  }
  else {
    document.getElementById("starAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup5(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup5Cover").innerHTML = star;
    document.getElementById("starCountGroup5").innerHTML = number;
  }
  starLeft();
  document.getElementById("groupDescription").innerHTML =
  "重度污染：心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状。儿童、老年人和心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动。";
  return false;
}

function starCountGroup6(number) {
  var starLeftCount = document.getElementById("starLeftCount").innerHTML;
  var count = document.getElementById("starCountGroup6").innerHTML;
  if (starLeftCount == 0 && number > count) {
    document.getElementById("starAlert").innerHTML = '已用完12个星星！';
  }
  else if (number - count > starLeftCount) {
    document.getElementById("starAlert").innerHTML = '超过剩余星星！';
  }
  else if (number == 1 && count == 0) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup6Cover").innerHTML = '<div class="star" onclick="starCountGroup6(1)">&starf;</div>';
    document.getElementById("starCountGroup6").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starAlert").innerHTML = '';
    document.getElementById("starGroup6Cover").innerHTML = '';
    document.getElementById("starCountGroup6").innerHTML = '0';
  }
  else {
    document.getElementById("starAlert").innerHTML = '';
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup6(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup6Cover").innerHTML = star;
    document.getElementById("starCountGroup6").innerHTML = number;
  }
  starLeft();
  document.getElementById("groupDescription").innerHTML =
  "严重污染：健康人群运动耐受力降低，有明显强烈症状，提前出现某些疾病。儿童、老年人和病人应当留在室内，避免体力消耗，一般人群应避免户外活动。";
  return false;
}

function starLeft() {
  var starLeftCount = 12;
  var starLeft = '';
  starLeftCount = starLeftCount
  - document.getElementById("starCountGroup1").innerHTML
  - document.getElementById("starCountGroup2").innerHTML
  - document.getElementById("starCountGroup3").innerHTML
  - document.getElementById("starCountGroup4").innerHTML
  - document.getElementById("starCountGroup5").innerHTML
  - document.getElementById("starCountGroup6").innerHTML;
  var i;
  for (i = 0; i < starLeftCount; i++) {
    starLeft = starLeft + '<div class="star">&starf;</div>';
  }
  document.getElementById("starLeftCount").innerHTML = starLeftCount + "";
  document.getElementById("starLeftContainer").innerHTML = starLeft;
  showClearAllStarsButton();
}

function showClearAllStarsButton() {
  var starLeftCount = document.getElementById("starLeftCount").innerHTML;
  if ((parseInt(starLeftCount)) < 12) {
    document.getElementById("clearAllStarsButton").style.display='block';
  }
  else {
    document.getElementById("clearAllStarsButton").style.display='none';
  }
}

function clearAllStars() {
  document.getElementById("starAlert").innerHTML = '';
  var starCounts = ["starCountGroup1", "starCountGroup2", "starCountGroup3",
  "starCountGroup4", "starCountGroup5", "starCountGroup6"];
  var starCovers = ["starGroup1Cover", "starGroup2Cover", "starGroup3Cover",
  "starGroup4Cover", "starGroup5Cover", "starGroup6Cover"];
  var i;
  for (i = 0; i < starCounts.length; i++) {
    var starCount = starCounts[i];
    document.getElementById(starCount).innerHTML = '0';
    var starCover = starCovers[i];
    document.getElementById(starCover).innerHTML = '';
  }
  starLeft();
}
