function breakOut(array, changeValue, stopValue) {

}

function keepGoing(array, changeValue, skipValue) {

}

function findBy(array, findFn) {
  let findValue = null;

  for (var i = 0; i < array.length; i++) {
    if(array[i] === findFn) {
      findValue = array[i];
      break;
    }
  }
}
