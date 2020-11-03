function sym(...args) {
    if(args.length == 1) {
        return args
   }    
   let returnSet = [];
   args[0] = args[0].filter((v,i,a)=>a.indexOf(v)==i)
   args[1] = args[1].filter((v,i,a)=>a.indexOf(v)==i)

    for (let i = 0; i < args[0].length; i++) {
        console.log(args[0])
        console.log(args[1])
        for (let j = 0; j < args[1].length; j++) {
            if (args[0][i] == args[1][j]) {
               args[0].splice(i, 1)
               args[1].splice(j, 1)
            }
        }
    }
    // console.log(args[0])
    // console.log(args[1])
    returnSet = args[0].concat(args[1]) 
    result = [returnSet, ...args.slice(2)]
    return sym(...result) 
}

  console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
