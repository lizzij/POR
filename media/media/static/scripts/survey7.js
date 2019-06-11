function show(toShowIndex) {
  window.scroll(0,0);
  var questions = ['question1', 'question2', 'question3', 'question4', 'question5'];
  var questionIds = ['math1Answer', 'math2Answer', 'math3Answer', 'math4Answer', 'math5Answer'];
  var timers = ['timer1', 'timer2', 'timer3', 'timer4', 'timer5']
  var alerts = ['timesUp1', 'timesUp2', 'timesUp3', 'timesUp4', 'timesUp5']

  if (toShowIndex == 1) {
    document.getElementById('page4').style.display='none';
    document.getElementById('question1').style='display: flex;flex-direction: column;position: relative;';
    startTimer(1);
  }
  else {
    var next = toShowIndex - 1;
    var current = next - 1;

    var input = document.getElementById(questionIds[current]).value;
    var alert = document.getElementById(alerts[current]);

    // no input upon clicking next
    if (input == null || input == "" && alert.innerHTML != '时间到，请点击进入下一页') {
      alert.innerHTML = '请填写数字答案！'
    }
    // hide current, show next, start next timer
    else {
      document.getElementById(questions[current]).style.display='none';
      document.getElementById(questions[next]).style='display: flex;flex-direction: column;position: relative;';
      startTimer(toShowIndex);
    }
  }
}

// validate question5 (none empty or not over 60 sec) from page 4 => page 5
function validateMathQn() {
  var input = document.getElementById('math5Answer').value;
  var alert = document.getElementById('timesUp5');
  if (input == null || input == "" && alert.innerHTML != '时间到，请点击进入下一页') {
    alert.innerHTML = '请填写数字答案！'
    return false;
  }
  return true;
}

document.getElementById("clearAllStarsButton").style.display='none';

// validate star question on form page 1 => page 2
function validateStar() {
  var alert = document.getElementById("starAlert").innerHTML;
  var numStarLeft = document.getElementById("starLeftCount").innerHTML;
  if ((parseInt(numStarLeft)) > 0) {
    document.getElementById("starAlert").innerHTML = '请用完所有星星！';
    document.getElementById('page1').style='display: flex;flex-direction: column;position: relative;';
    document.getElementById("clearAllStarsButton").style.display='block';
    return false;
  }
  return true;
}

// validate bean quesion is answered correctly from page 3 => page 4
function validateBeanQn() {

  console.log(document.getElementById("guessedBeanNumber").value === '');
  if (document.getElementById("beanCountEstimateQuestion").style.display == "none") {
    checkBeanNumberSource();
    return false;
  }
  else if (document.getElementById("guessedBeanNumber").value === ''){
    document.getElementById("beanNumberInputAlert").innerHTML = "请填写豆子数量数字！"
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

function hideWalkathonSlider() {
  document.getElementById("walkathon").style.display = "none";
}
function showWalkathonSlider() {
  document.getElementById("walkathon").style.display = "block";
}

function walkathonSlide() {
  var value=document.getElementById("walkathonSlider").value;
  var walkathonAmount = `${value}步`;
  var distance = value * 0.0008;
  var donation = value * 0.002;
  distance = distance.toFixed(2);
  donation = donation.toFixed(2);
  document.getElementById("walkathonAmount").value=walkathonAmount;
  document.getElementById("walkathonDistance").value=`走${value}步（${distance}公里）\n—— 研究人员将代表您向上海联合基金会捐赠${donation}元人民币。`;
  var left = value * 0.0172;
  document.getElementById("walkathonAmount").style.paddingLeft = left + "px";
}

function checkBeanNumberSource(){
  var AtoldMe = document.getElementById("AtoldMe").checked;
  var BtoldMe = document.getElementById("BtoldMe").checked;
  var CtoldMe = document.getElementById("CtoldMe").checked;
  if (AtoldMe && (!BtoldMe) && CtoldMe) {
    document.getElementById("beanNumberResult").innerHTML = '正确';
    document.getElementById("beanNumberResult").style.color = "#28a745";
    document.getElementById("beanCountEstimateQuestion").style.display = "block";

  }
  else {
    document.getElementById("beanNumberResult").innerHTML = '您的答案错误。 请再检查一次！';
    document.getElementById("beanNumberResult").style.color = "#FF3333";
    document.getElementById("beanCountEstimateQuestion").style.display = "none";
  }
}

function startTimer(index) {
  var input = document.getElementById('math' + index + 'Answer');
  var timer = document.getElementById('timer' + index);
  var alert = document.getElementById('timesUp' + index);
  var page = document.getElementById('question' + index);
  var sec = 59;
  setInterval(function() {
    timer.innerHTML = sec;
    if (sec > 0) {
      sec--;
    }
    else if (sec == 00 && page.style.display != 'none') {
      alert.innerHTML = '时间到，请点击进入下一页';
      alert.style.color = "#FF3333";
      input.disabled = true;
    }
  }, 1000);
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

//
// function updateWalkathonSlide(value) {
//   var walkathonAmount = `${value}步`;
//   var distance = value * 0.0008;
//   var donation = (value - 4000) * 0.01;
//   distance = distance.toFixed(2);
//   donation = donation.toFixed(2);
//   document.getElementById("walkathonAmount").value=walkathonAmount;
//   document.getElementById("walkathonDistance").value=`我将在2019年5月18日走${value}步（${distance}公里）\n—— 研究人员将代表您向上海联合基金会捐赠${donation}元人民币。`;
//   var left = 0.1 * value - 435;
//   document.getElementById("walkathonAmount").style.paddingLeft = left + "px";
// }
//
// function randomizeSlider(min, max, sliderName, sliderAmount, leftStart, moveStep, unit) {
//   var random = Math.floor(Math.random() * (max - min)) + min;
//   $(sliderName).val(random);
//   $(sliderAmount).val(random + unit);
//   var left = leftStart + moveStep * random;
//   $(sliderAmount).css("padding-left", left);
// }
//
// $( document ).ready(function() {
//   randomizeSlider(4000, 7000, "#walkathonSlider", "#walkathonAmount", -435, 0.1, "步");
//   var walkathonRandom = document.getElementById("walkathonAmount").value.replace("步", ""); ;
//   updateWalkathonSlide(walkathonRandom);
// });
