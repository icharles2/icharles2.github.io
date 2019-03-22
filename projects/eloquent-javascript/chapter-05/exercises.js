// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // console.log(array);
  // console.log(array.reduce((acc, arr,) => acc.concat(arr), []));
  return array.reduce((acc, arr,) => acc.concat(arr), []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  // console.log(value);
  // console.log(test);
  // console.log(update);
  // console.log(body);
  for(let i = value; test(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
//console.log(array);
for(let i = 0; i < array.length; i++){
  if(!func(array[i])){
    return false;
  }
}
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  console.log(text);
  function characterScript (code) {
    for(let script of SCRIPTS){
      if(script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })){
        return script;
      }
    }
    return null;
  }
  
  function countBy (items, groupName) {
    let counts = [];
    for(let item of items){
      let name = groupName(item);
      let known = counts.findIndex(c => c.name === name);
      if(known === -1){
        counts.push({name, count:1});
      }
      else{
        counts[known].count++;
      }
    }
    return counts;
  }
  
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({name}) => name !== 'none');
  
  if(counted.length === 0){
    return 'ltr';
  }
  
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  
  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
