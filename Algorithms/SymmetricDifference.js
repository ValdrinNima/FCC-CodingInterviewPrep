function sym(...args) {
    if(args.length == 1) {
        return args[0].sort()
   }    
   let returnSet = [];
   args1 = args[0].filter((v,i,a)=>a.indexOf(v)==i)
   args2 = args[1].filter((v,i,a)=>a.indexOf(v)==i)


   args1Copy = [...args1];
   args2Copy = [...args2];
   
    for (let i = 0; i < args1.length; i++) {
        for (let j = 0; j < args2.length; j++) {
            if (args1[i] == args2[j]) {
               args1Copy.splice(args1Copy.indexOf(args1[i]), 1)
               args2Copy.splice(args2Copy.indexOf(args1[i]), 1)
            }
        }
    }
    
    returnSet = args1Copy.concat(args2Copy)
    result = [returnSet, ...args.slice(2)]
    return sym(...result) 
}

  console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
