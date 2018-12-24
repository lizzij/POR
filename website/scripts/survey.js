function show(shown) {
  var pages = ['page1', 'page2', 'page3', 'page4', 'page5'];
  var pageIndex;
  for (pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    pageId = pages[pageIndex];
    if (shown == pageId) {
      if (shown == 'page5') {
        var alert = document.getElementById("starAlert").innerHTML;
        var startLeft = document.getElementById("starLeftCount").innerHTML;
        if (alert == '') {
          document.getElementById('page5').style.display='block';
        }
        else if (startLeft > 0) {
          document.getElementById("starAlert").innerHTML = '请用完所有星星!';
          document.getElementById('page4').style.display='block';
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

function stateTrustSlide() {
  document.getElementById("stateAmount").value=document.getElementById("state").value
  var trust=document.getElementById("stateAmount").value;
  var trustIds = ['stateTrustScaleLabel1', 'stateTrustScaleLabel2', 'stateTrustScaleLabel3',
  'stateTrustScaleLabel4', 'stateTrustScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("stateTrustScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("stateTrustScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("stateTrustScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("stateTrustScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("stateTrustScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("stateTrustScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("stateTrustScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("stateTrustScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust < 100) {
    document.getElementById("stateTrustScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("stateTrustScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 10 + 2.97 * trust;
  document.getElementById("stateAmount").style.left = left + "px";
}

function privateTrustSlide() {
  document.getElementById("privateAmount").value=document.getElementById("private").value
  var trust=document.getElementById("privateAmount").value;
  var trustIds = ['privateTrustScaleLabel1', 'privateTrustScaleLabel2', 'privateTrustScaleLabel3',
  'privateTrustScaleLabel4', 'privateTrustScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("privateTrustScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("privateTrustScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("privateTrustScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("privateTrustScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("privateTrustScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("privateTrustScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("privateTrustScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("privateTrustScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust < 100) {
    document.getElementById("privateTrustScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("privateTrustScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 10 + 2.97 * trust;
  document.getElementById("privateAmount").style.left = left + "px";
}

function foreignTrustSlide() {
  document.getElementById("foreignAmount").value=document.getElementById("foreign").value
  var trust=document.getElementById("foreignAmount").value;
  var trustIds = ['foreignTrustScaleLabel1', 'foreignTrustScaleLabel2', 'foreignTrustScaleLabel3',
  'foreignTrustScaleLabel4', 'foreignTrustScaleLabel5'];
  var selected;
  for (i = 0; i < trustIds.length; i++) {
    notSelected = trustIds[i];
    document.getElementById(notSelected).style.color = "#979797";
    document.getElementById(notSelected).style.fontWeight = 'normal';

  }
  if (0 <= trust && trust < 20) {
    document.getElementById("foreignTrustScaleLabel1").style.fontWeight = 'bold';
    document.getElementById("foreignTrustScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("foreignTrustScaleLabel2").style.fontWeight = 'bold';
    document.getElementById("foreignTrustScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("foreignTrustScaleLabel3").style.fontWeight = 'bold';
    document.getElementById("foreignTrustScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("foreignTrustScaleLabel4").style.fontWeight = 'bold';
    document.getElementById("foreignTrustScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust < 100) {
    document.getElementById("foreignTrustScaleLabel5").style.fontWeight = 'bold';
    document.getElementById("foreignTrustScaleLabel5").style.color = "#4F4F4F";
  }
  var left = 10 + 2.97 * trust;
  document.getElementById("foreignAmount").style.left = left + "px";
}

function startTimer() {
  var sec = 60;
  setInterval(function() {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if (sec == 00) {
      return show('page4');
    }
  }, 1000);
}

function starCountGroup1(number) {
  var count = document.getElementById("starCountGroup1").innerHTML;
  if (number == 1 && count == 0) {
    document.getElementById("starGroup1Cover").innerHTML = '<div class="star" onclick="starCountGroup1(1)">&starf;</div>';
    document.getElementById("starCountGroup1").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starGroup1Cover").innerHTML = '';
    document.getElementById("starCountGroup1").innerHTML = '0';
  }
  else {
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup1(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup1Cover").innerHTML = star;
    document.getElementById("starCountGroup1").innerHTML = number;
  }
  starLeft();
  return false;
}

function starCountGroup2(number) {
  var count = document.getElementById("starCountGroup2").innerHTML;
  if (number == 1 && count == 0) {
    document.getElementById("starGroup2Cover").innerHTML = '<div class="star" onclick="starCountGroup2(1)">&starf;</div>';
    document.getElementById("starCountGroup2").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starGroup2Cover").innerHTML = '';
    document.getElementById("starCountGroup2").innerHTML = '0';
  }
  else {
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup2(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup2Cover").innerHTML = star;
    document.getElementById("starCountGroup2").innerHTML = number;
  }
  starLeft();
  return false;
}

function starCountGroup3(number) {
  var count = document.getElementById("starCountGroup3").innerHTML;
  if (number == 1 && count == 0) {
    document.getElementById("starGroup3Cover").innerHTML = '<div class="star" onclick="starCountGroup3(1)">&starf;</div>';
    document.getElementById("starCountGroup3").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starGroup3Cover").innerHTML = '';
    document.getElementById("starCountGroup3").innerHTML = '0';
  }
  else {
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup3(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup3Cover").innerHTML = star;
    document.getElementById("starCountGroup3").innerHTML = number;
  }
  starLeft();
  return false;
}

function starCountGroup4(number) {
  var count = document.getElementById("starCountGroup4").innerHTML;
  if (number == 1 && count == 0) {
    document.getElementById("starGroup4Cover").innerHTML = '<div class="star" onclick="starCountGroup4(1)">&starf;</div>';
    document.getElementById("starCountGroup4").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starGroup4Cover").innerHTML = '';
    document.getElementById("starCountGroup4").innerHTML = '0';
  }
  else {
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup4(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup4Cover").innerHTML = star;
    document.getElementById("starCountGroup4").innerHTML = number;
  }
  starLeft();
  return false;
}

function starCountGroup5(number) {
  var count = document.getElementById("starCountGroup5").innerHTML;
  if (number == 1 && count == 0) {
    document.getElementById("starGroup5Cover").innerHTML = '<div class="star" onclick="starCountGroup5(1)">&starf;</div>';
    document.getElementById("starCountGroup5").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starGroup5Cover").innerHTML = '';
    document.getElementById("starCountGroup5").innerHTML = '0';
  }
  else {
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup5(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup5Cover").innerHTML = star;
    document.getElementById("starCountGroup5").innerHTML = number;
  }
  starLeft();
  return false;
}

function starCountGroup6(number) {
  var count = document.getElementById("starCountGroup6").innerHTML;
  if (number == 1 && count == 0) {
    document.getElementById("starGroup6Cover").innerHTML = '<div class="star" onclick="starCountGroup6(1)">&starf;</div>';
    document.getElementById("starCountGroup6").innerHTML = '1';
  }
  else if (number == 1 && count == 1) {
    document.getElementById("starGroup6Cover").innerHTML = '';
    document.getElementById("starCountGroup6").innerHTML = '0';
  }
  else {
    var star = '';
    var i;
    for (i = 0; i < number; i++) {
      star = star + '<div class="star" onclick="starCountGroup6(' + (i+1) + ')">&starf;</div>';
    }
    document.getElementById("starGroup6Cover").innerHTML = star;
    document.getElementById("starCountGroup6").innerHTML = number;
  }
  starLeft();
  return false;
}

function starLeft() {
  document.getElementById("starAlert").innerHTML = '';
  var starLeftCount = 12;
  var starLeft = '';
  starLeftCount = starLeftCount
  - document.getElementById("starCountGroup1").innerHTML
  - document.getElementById("starCountGroup2").innerHTML
  - document.getElementById("starCountGroup3").innerHTML
  - document.getElementById("starCountGroup4").innerHTML
  - document.getElementById("starCountGroup5").innerHTML
  - document.getElementById("starCountGroup6").innerHTML;
  if (starLeftCount <= 0) {
    document.getElementById("starAlert").innerHTML = '您已使用超过12个星星！';
  }
  else {
    var i;
    for (i = 0; i < starLeftCount; i++) {
      starLeft = starLeft + '<div class="star">&starf;</div>';
    }
  }
  document.getElementById("starLeftCount").innerHTML = starLeftCount + "";
  document.getElementById("starLeftContainer").innerHTML = starLeft;
}
