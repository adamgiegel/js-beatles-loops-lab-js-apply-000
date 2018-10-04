// add solution here
function theBeatlesPlay (musicians, instruments){
  let newArr = []
  for(let i = 0; i < musicians.length, i < instruments.length; i++){
    newArr.push(musicians[i] + " plays " + instruments[i])
  }
  return newArr
}

function johnLennonFacts (array){
  let newArr = []
  let i = 0
  while(i < array.length ){
    newArr.push(array[i] + "!!!")
    i++
  }
  return newArr
}

function iLoveTheBeatles (num){
  let newArr = []
  let i = num
  do{
    i = i + 1
    newArr.push("I love the Beatles!")
  } while (i < 15);
  return newArr
}