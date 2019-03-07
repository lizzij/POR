function eventTimeSlide() {
  var value=document.getElementById("eventTimeSlider").value;
  var hours;
  var minutes;
  hours = Math.floor(value / 60);
  minutes = value % 60;
  var time = `${hours}小时 ${minutes}分钟`;
  document.getElementById("eventTimeAmount").value=time;
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
  var trustIds = ['willingnessScaleLabel1', 'willingnessScaleLabel2', 'willingnessScaleLabel3',
  'willingnessScaleLabel4', 'willingnessScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("willingnessScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("willingnessScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("willingnessScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("willingnessScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("willingnessScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("willingnessScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("willingnessScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("willingnessScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust <= 100) {
    document.getElementById("willingnessScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("willingnessScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 10 + 2.97 * trust;
  document.getElementById("willingnessAmount").style.left = left + "px";
}
