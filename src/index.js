module.exports = function longestConsecutiveLength(array) {
  array.sort(function(a,b){return a-b});
  function removeDuplicate(arr){
      var exists ={},
          outArr = [],
          elm;
      for(var i =0; i<arr.length; i++){
          elm = arr[i];
          if(!exists[elm]){
              outArr.push(elm);
              exists[elm] = true;
          }
      }
      return outArr;
  }
  array = removeDuplicate(array);
  var count=1,
      countArr = [0],
      current,
      next;
  for(let i=0;i<array.length;i++){
      current = array[i];
      next = array[i+1];
      if(current+1 == next){
          count++;
          continue;
      }
      if(count){
          countArr.push(count);
      }
      count=1;
    }
  countArr.sort(function(a,b){return b-a});
  return countArr[0];
}
