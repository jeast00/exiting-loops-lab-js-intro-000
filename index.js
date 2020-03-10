function breakOut(array, changeValue, stopValue) {

}

function keepGoing(array, changeValue, skipValue) {

}

function findBy(array, findFn) {

  for (var i = 0; i < array.length; i++) {
    if(findFn(array[i])) {
      return array[i];
    }
  }
}
