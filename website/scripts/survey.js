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
  document.getElementById(stateAmount).value=document.getElementById(state).value;
}
