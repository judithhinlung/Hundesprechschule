console.log('Enigma --');

function createFoneticForX(circle, start, end, index, top){
    var join = 0;
    var vogal = (top)? 'A' : 'I';
    var middle = start + circle ; 

  if (index == middle) {
    return vogal;

  } else if (index < middle) {
    join = end - index;
    return 'R' + Array(join).join(vogal.toLocaleLowerCase()); 

  } else {
    // index > middle
    join = index - start;
    return Array(join).join(vogal.toLocaleLowerCase()) + 'R';
  }
};

function createFoneticForY(circle, start, end, index, right){
    var join = 0;
    var vogal = (right)? 'E' : 'O';
    var middle = start + circle ; 

  if (index == middle) {
    return vogal;

  } else if (index < middle) {
    join = end - index;
    return 'R' + Array(join).join(vogal.toLocaleLowerCase()); 

  } else {
    // index > middle
    join = index - start;
    return Array(join).join(vogal.toLocaleLowerCase()) + 'R';
  }
};
