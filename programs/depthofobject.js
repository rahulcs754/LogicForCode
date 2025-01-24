const obj =  {
    a: {
      b: {
        c: {}
      }
    },
    x: 1
  };
  let depth=0
  function test(a){
    if(typeof a !== 'object'){
      return 1;
    } 
  
    depth=depth+1
    if(Object.keys(a)?.length == 0){
      return 0
    }
    for(let key in a){
        test(a[key])
    }
    return depth
  }
  console.log(test(obj))

   // two case not solved yet

//    const test6 = {
//     a: {
//       b: [1, 2, 3],
//       c: {
//         d: {}
//       }
//     }
//   };
  


// const test7 = {
//     a: {
//       b: {
//         c: {}
//       }
//     },
//     x: 1
//   };
  