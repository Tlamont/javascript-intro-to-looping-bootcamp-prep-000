


function forLoop(array) {
  let myArray = [];
  let i = 0;
  for (let i = 0; i < 25; i++) {
    if(i ==1) {
      array.push('I am 1 strange loop.')
    }else{
      array.push(`I am ${i} strange loops.`)
    }
}
return array;
}

function whileLoop(num) {
  let countdown = num;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
  }

function doWhileLoop(int) {
  var i = 0;
  function incrementVariable(){
    i = i + 1;
    return i;
  }
  do { console.log('I run once regardless.');
<<<<<<< HEAD
  } while (incrementVariable() < int);
=======
  } while (incrementVariable() <= int);
>>>>>>> bdeda18958e901b912913203d9a4acfa16f6359b
  }


