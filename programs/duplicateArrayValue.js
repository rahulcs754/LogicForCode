

// check duplicate data  from array

function dulicateValueRemove(arr) {
    let uniqueArr = [];
    for (let element of arr) {
      let flag = false;
  
      for (const element1 of uniqueArr) {
        if (element === element1) {
          flag = true;
          break;
        }
      }
  
      if (!flag) {
        uniqueArr.push(element);
      }
    }
    return uniqueArr;
  }
  
  //console.log(dulicateValueRemove([2, 4, 5, 3, 2, 2, 3, 4]));
  