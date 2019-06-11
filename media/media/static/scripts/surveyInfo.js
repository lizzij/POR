function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // while there remain elements to shuffle...
  while (0 !== currentIndex) {
    // pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // and swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function randomizeEventNameOptions() {
  // shuffle order
  var order = [1, 2, 3, 4];
  order = shuffle(order);
  // record as hidden input
  document.getElementById("eventNameOptionsOrder").value = order.join('');
  // update order
  var i;
  for (i = 0; i < order.length - 1; i++) {
    $( "#nameOption"+order[i] ).after( $( "#nameOption"+order[i+1] ) );
  }
}

function randomizeAQSourceOptions() {
  // shuffle order
  var order = [1, 2, 3, 4];
  order = shuffle(order);
  // record as hidden input
  document.getElementById("AQSourceOptionsOrder").value = order.join('');
  // update order
  var i;
  for (i = 0; i < order.length - 1; i++) {
    $( "#sourceOption"+order[i] ).after( $( "#sourceOption"+order[i+1] ) );
  }
}

$( document ).ready(function() {
  randomizeEventNameOptions();
  randomizeAQSourceOptions();
});
