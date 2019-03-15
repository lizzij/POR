function eventTimeSlide() {
  var value=document.getElementById("eventTimeSlider").value;
  var hours;
  var minutes;
  hours = Math.floor(value / 60);
  minutes = value % 60;
  var time = `${hours}小时 ${minutes}分钟`;
  document.getElementById("eventTimeAmount").value=time;
}

// weatherShowClearAllStarsButton()

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

function outing1Slide() {
  document.getElementById("outing1Amount").value=document.getElementById("outing1").value
  var value=document.getElementById("outing1Amount").value;
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
  var left = 10 + 2.97 * value;
  document.getElementById("outing1Amount").style.left = left + "px";
}

function outing2Slide() {
  document.getElementById("outing2Amount").value=document.getElementById("outing2").value
  var value=document.getElementById("outing2Amount").value;
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
  var left = 10 + 2.97 * value;
  document.getElementById("outing2Amount").style.left = left + "px";
}

function outing3Slide() {
  document.getElementById("outing3Amount").value=document.getElementById("outing3").value
  var value=document.getElementById("outing3Amount").value;
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
  var left = 10 + 2.97 * value;
  document.getElementById("outing3Amount").style.left = left + "px";
}

function outing4Slide() {
  document.getElementById("outing4Amount").value=document.getElementById("outing4").value
  var value=document.getElementById("outing4Amount").value;
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
  var left = 10 + 2.97 * value;
  document.getElementById("outing4Amount").style.left = left + "px";
}

function outing5Slide() {
  document.getElementById("outing5Amount").value=document.getElementById("outing5").value
  var value=document.getElementById("outing5Amount").value;
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
  var left = 10 + 2.97 * value;
  document.getElementById("outing5Amount").style.left = left + "px";
}
