document.getElementById("clearAllStarsButton").style.display='none';

// validate star question on page 1 => page 2
function validateStar() {
  var alert = document.getElementById("starAlert").innerHTML;
  var numStarLeft = document.getElementById("starLeftCount").innerHTML;
  var user_id = document.getElementById("questionRandomOrder").value;
  var displayPage2 = document.getElementById("page2").style.display;
  if (user_id == '21' && displayPage2 == 'none') {
    return true;
  }
  else if (user_id == '12' && displayPage2 != 'none') {
    return true;
  }
  if ((parseInt(numStarLeft)) > 0) {
    document.getElementById("starAlert").innerHTML = '请用完所有星星！';
    document.getElementById("clearAllStarsButton").style.display='block';
    return false;
  }
  return true;
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

function checkBeanNumberSource(){
  var AtoldMe = document.getElementById("AtoldMe").checked;
  var BtoldMe = document.getElementById("BtoldMe").checked;
  var CtoldMe = document.getElementById("CtoldMe").checked;
  if (AtoldMe && (!BtoldMe) && CtoldMe) {
    document.getElementById("beanNumberResult").innerHTML = '正确';
    document.getElementById("beanNumberResult").style.color = "#28a745";
  }
  else {
    document.getElementById("beanNumberResult").innerHTML = '您的答案错误。 请再检查一次！';
    document.getElementById("beanNumberResult").style.color = "#FF3333";
  }
}

function startTimer(timer, page, timesUp) {
  var sec = 60;
  setInterval(function() {
    document.getElementById(timer).innerHTML = sec;
    if (sec > 0) {
      sec--;
    }
    else if (sec == 00) {
      document.getElementById(timesUp).innerHTML = '时间到，请点击进入下一页';
      document.getElementById(timesUp).style.color = "#FF3333";
    }
  }, 1000);
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

function randomizeQuestion() {
  var user_id;
  user_id = document.getElementById("questionRandomOrder").value;
  // user_id odd, swap questions; even do nothing
  if (user_id % 2) {
    document.getElementById("questionRandomOrder").value = "21";
    $( "#page1" ).prepend( $( "#survey2" ) );
    $( "#page2" ).prepend( $( "#survey1" ) );
  }
  else {
    document.getElementById("questionRandomOrder").value = "12";
  }
}

$( document ).ready(function() {
  randomizeQuestion();
  randomize();
});
