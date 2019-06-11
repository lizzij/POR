function show(shown) {
  window.scroll(0,0);
  document.getElementById("weatherClearAllStarsButton").style.display='none';
  document.getElementById("clearAllStarsButton").style.display='none';
  var pages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'];
  var pageIndex;
  for (pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    pageId = pages[pageIndex];
    if (shown == pageId) {
      if (shown == 'page3') {
        var alert = document.getElementById("weatherStarAlert").innerHTML;
        var numStarLeft = document.getElementById("weatherStarLeftCount").innerHTML;
        if ((parseInt(numStarLeft)) > 0) {
          document.getElementById("weatherStarAlert").innerHTML = '请用完所有星星！';
          document.getElementById('page2').style='display: flex;flex-direction: column;position: relative; overflow: visible;';
          document.getElementById("weatherClearAllStarsButton").style.display='block';
        }
        else {
          document.getElementById('page3').style='display: flex;flex-direction: column;position: relative; overflow: visible;';
        }
      }
      else if (shown == 'page4') {
        var alert = document.getElementById("starAlert").innerHTML;
        var numStarLeft = document.getElementById("starLeftCount").innerHTML;
        if ((parseInt(numStarLeft)) > 0) {
          document.getElementById("starAlert").innerHTML = '请用完所有星星！';
          document.getElementById('page3').style='display: flex;flex-direction: column;position: relative; overflow: visible;';
          document.getElementById("clearAllStarsButton").style.display='block';
        }
        else {
          document.getElementById('page4').style='display: flex;flex-direction: column;position: relative; overflow: visible;';
        }
      }
      else {
        document.getElementById(shown).style='display: flex;flex-direction: column;position: relative; overflow: visible;';
      }
    }
    else {
      document.getElementById(pageId).style.display='none';
    }
  }
  return 0;
}

// validate weather star question on page 2 => page3
function validateWeatherStar() {
  var alert = document.getElementById("weatherStarAlert").innerHTML;
  var numStarLeft = document.getElementById("weatherStarLeftCount").innerHTML;
  if ((parseInt(numStarLeft)) > 0) {
    document.getElementById("weatherStarAlert").innerHTML = '请用完所有星星！';
    document.getElementById('page2').style='display: flex;flex-direction: column;position: relative; overflow: visible;';
    document.getElementById("weatherClearAllStarsButton").style.display='block';
    return false;
  }
  return true;
}

// validate star question on page 3 => page 4
function validateStar() {
  var alert = document.getElementById("starAlert").innerHTML;
  var numStarLeft = document.getElementById("starLeftCount").innerHTML;
  if ((parseInt(numStarLeft)) > 0) {
    document.getElementById("starAlert").innerHTML = '请用完所有星星！';
    document.getElementById('page3').style='display: flex;flex-direction: column;position: relative; overflow: visible;';
    document.getElementById("clearAllStarsButton").style.display='block';
    return false;
  }
  return true;
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
  updateInput1();
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
  updateInput2();
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
  updateInput3();
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
  updateInput4();
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
  document.getElementById("trust1Amount").style.marginLeft = left + "px";
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
  document.getElementById("trust2Amount").style.marginLeft = left + "px";
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
  document.getElementById("trust3Amount").style.marginLeft = left + "px";
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
  document.getElementById("trust4Amount").style.marginLeft = left + "px";
}

function trust5Slide() {
  document.getElementById("trust5Amount").value=Math.floor(document.getElementById("trust5").value/2)*2;
  var trust=document.getElementById("trust5").value;
  trust = Math.floor(trust);
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
  document.getElementById("trust5Amount").style.marginLeft = left + "px";
}

function trust6Slide() {
  document.getElementById("trust6Amount").value=Math.floor(document.getElementById("trust6").value/2)*2;
  var trust=document.getElementById("trust6").value;
  trust = Math.floor(trust);
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
  document.getElementById("trust6Amount").style.marginLeft = left + "px";
}

function trust7Slide() {
  document.getElementById("trust7Amount").value=Math.floor(document.getElementById("trust7").value/2)*2;
  var trust=document.getElementById("trust7").value;
  trust = Math.floor(trust);
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
  var left = 2 + 2.88 * trust;
  document.getElementById("trust7Amount").style.marginLeft = left + "px";
}

function trust8Slide() {
  document.getElementById("trust8Amount").value=Math.floor(document.getElementById("trust8").value/2)*2;
  var trust=document.getElementById("trust8").value;
  trust = Math.floor(trust);
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
  var left = 2 + 2.88 * trust;
  document.getElementById("trust8Amount").style.marginLeft = left + "px";
}

function willingnessSlide() {
  document.getElementById("willingnessAmount").value=Math.floor(document.getElementById("willingness").value/2)*2;
  var trust=document.getElementById("willingness").value;
  trust = Math.floor(trust);
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
  var left = 2 + 2.88 * trust;
  document.getElementById("willingnessAmount").style.marginLeft = left + "px";
}

function signUpFeeSlide() {
  var value=document.getElementById("signUpFeeSlider").value;
  var signUpFeeAmount = `${value}元`;
  document.getElementById("signUpFeeAmount").value=signUpFeeAmount;
  var left = 2 + 0.9 * value;
  document.getElementById("signUpFeeAmount").style.paddingLeft = left + "px";
}

function donationWillingSlide2() {
  var value=document.getElementById("donationWillingSlider2").value;
  var donationWillingAmount = `${value}元`;
  document.getElementById("donationWillingAmount2").value=donationWillingAmount;
  var left = 2 + 0.026 * value;
  document.getElementById("donationWillingAmount2").style.marginLeft = left + "px";
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
  updateStarInput1();
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
  updateStarInput2();
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
  updateStarInput3();
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
  updateStarInput4();
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
  updateStarInput5();
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
  updateStarInput6();
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

function dunno7() {
  var isDunno7Checked = document.getElementById("dunno7checkbox").checked
  if (isDunno7Checked) {
    document.getElementById("trustSlider7").style.display = "none";
  }
  else {
    document.getElementById("trustSlider7").style.display = "block";
  }
}

function dunno8() {
  var isDunno8Checked = document.getElementById("dunno8checkbox").checked
  if (isDunno8Checked) {
    document.getElementById("trustSlider8").style.display = "none";
  }
  else {
    document.getElementById("trustSlider8").style.display = "block";
  }
}

// function randomizeSlider(min, max, sliderName, sliderAmount, leftStart, moveStep, unit) {
//   var random = Math.floor(Math.random() * (max - min)) + min;
//   $(sliderName).val(random);
//   $(sliderAmount).val(random + unit);
//   var left = leftStart + moveStep * random;
//   $(sliderAmount).css("margin-left", left);
// }

function updateInput1() {
  document.getElementById("weatherStarCountGroup1Input").value = document.getElementById("weatherStarCountGroup1").innerHTML;
}
function updateInput2() {
  document.getElementById("weatherStarCountGroup2Input").value = document.getElementById("weatherStarCountGroup2").innerHTML;
}
function updateInput3() {
  document.getElementById("weatherStarCountGroup3Input").value = document.getElementById("weatherStarCountGroup3").innerHTML;
}
function updateInput4() {
  document.getElementById("weatherStarCountGroup4Input").value = document.getElementById("weatherStarCountGroup4").innerHTML;
}
function updateStarInput1() {
  document.getElementById("starCountGroup1Input").value = document.getElementById("starCountGroup1").innerHTML;
}
function updateStarInput2() {
  document.getElementById("starCountGroup2Input").value = document.getElementById("starCountGroup2").innerHTML;
}
function updateStarInput3() {
  document.getElementById("starCountGroup3Input").value = document.getElementById("starCountGroup3").innerHTML;
}
function updateStarInput4() {
  document.getElementById("starCountGroup4Input").value = document.getElementById("starCountGroup4").innerHTML;
}
function updateStarInput5() {
  document.getElementById("starCountGroup5Input").value = document.getElementById("starCountGroup5").innerHTML;
}
function updateStarInput6() {
  document.getElementById("starCountGroup6Input").value = document.getElementById("starCountGroup6").innerHTML;
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
  var order = [1, 2, 3, 4, 5, 6, 7, 8];
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
  document.getElementById("weatherClearAllStarsButton").style.display='none';
  document.getElementById("clearAllStarsButton").style.display='none';
  randomize();
  // $( "#question2" ).after( $( "#question1" ) );
  // randomizeSlider(0, 1000, "#donationWillingSlider", "#donationWillingAmount", 2, 0.266, "元");
  // randomizeSlider(0, 100, "#trust1", "#trust1Amount", 2, 2.9, "");
  // randomizeSlider(0, 100, "#trust2", "#trust2Amount", 2, 2.9, "");
  //
  // randomizeSlider(0, 100, "#trust3", "#trust3Amount", 2, 2.9, "");
  // randomizeSlider(0, 100, "#trust4", "#trust4Amount", 2, 2.9, "");
  // randomizeSlider(0, 100, "#trust5", "#trust5Amount", 2, 2.9, "");
  // randomizeSlider(0, 100, "#trust6", "#trust6Amount", 2, 2.9, "");
  // randomizeSlider(0, 100, "#trust7", "#trust7Amount", 2, 2.9, "");
  // randomizeSlider(0, 100, "#trust8", "#trust8Amount", 2, 2.9, "");
  // randomizeSlider(0, 100, "#trust8", "#trust8Amount", 2, 2.9, "");
  //
  // randomizeSlider(0, 100, "#willingness", "#willingnessAmount", 2, 2.9, "");
  // randomizeSlider(0, 10000, "#donationWillingSlider2", "#donationWillingAmount2", 2, 0.025, "元");
});

function validateRadioButton(name) {
  return ($('input[name=' + name + ']:checked').length > 0);
}

function validateP1() {
  if (validateRadioButton('eventName')) {
    // show(nextPage);
  }
  else {
    document.getElementById("p1alert").innerHTML = '请选择该活动的名字！';
  }
}
