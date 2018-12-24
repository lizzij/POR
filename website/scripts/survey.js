function show(shown) {
  var pages = ['page1', 'page2', 'page3', 'page4', 'page5'];
  var pageIndex;
  for (pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    pageId = pages[pageIndex];
    if (shown == pageId) {
      document.getElementById(shown).style.display='block';
    }
    else {
      document.getElementById(pageId).style.display='none';
    }
  }
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
