let num = [1, 1, 1, 1, 'fd'];

let result = false;
for (let i = 0; i< num.length; i++) {
 if (num[0] !== num[i]) {
     
     result = true;
break;
     }
  }
      console.log(result);
