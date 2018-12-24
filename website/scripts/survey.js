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
  var trustIds = ['trustScaleLabel1', 'pagtrustScaleLabel2', 'trustScaleLabel3',
  'trustScaleLabel4', 'trustScaleLabel5'];
  if (0 <= trust && trust < 20) {
    document.getElementById("trustScaleLabel1").innerHTML=document.getElementById("trustScaleLabel1").innerHTML.bold();
    document.getElementById("trustScaleLabel1").style.color = "#4F4F4F";
  }
  else if (20 <= trust && trust < 40) {
    document.getElementById("trustScaleLabel2").innerHTML=document.getElementById("trustScaleLabel2").innerHTML.bold();
    document.getElementById("trustScaleLabel2").style.color = "#4F4F4F";
  }
  else if (40 <= trust && trust < 60) {
    document.getElementById("trustScaleLabel3").innerHTML=document.getElementById("trustScaleLabel3").innerHTML.bold();
    document.getElementById("trustScaleLabel3").style.color = "#4F4F4F";
  }
  else if (60 <= trust && trust < 80) {
    document.getElementById("trustScaleLabel4").innerHTML=document.getElementById("trustScaleLabel4").innerHTML.bold();
    document.getElementById("trustScaleLabel4").style.color = "#4F4F4F";
  }
  else if (80 <= trust && trust < 100) {
    document.getElementById("trustScaleLabel5").innerHTML=document.getElementById("trustScaleLabel5").innerHTML.bold();
    document.getElementById("trustScaleLabel5").style.color = "#4F4F4F";
  }
}
