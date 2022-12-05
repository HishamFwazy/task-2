const myUser=require("./modules/deal")
const user=require("./modules/user")
// myUser.writeToJson("my name is hisham","data.json")


const yargs = require('yargs')
yargs.command({
    command:"add",
    handler: function(argv){
        user.add(argv)
    }
})

yargs.command({
    command:"showAll",
    handler: function(argv){
        user.showAll()
    }
})


yargs.command({
    command:"showSingle",
    handler: function(argv){
        user.showSingle(argv.id)
    }
})


yargs.command({
    command: 'del',
    handler: function (argv) {
    user.del(argv.id);
    },
});


yargs.command({
    command: 'edit',
    handler: function (argv) {
      user.edit(argv);
    },
  });

  yargs.command({
    command: 'delAll',
    handler: function () {
      user.delAll();
    },
  });


// yargs.command({
//     command:"showSingle",
//     bulider:{
//         id: {demandOption:true},
//     },
//     handler: function(argv){
//         const JsonObj = require('./data.json')
//         let target= JsonObj.map(function(ele,index,arr){
//             if(argv===ele){
//                 console.log(JsonObj[index])
//             }
//         },10) 
        
//     }
// })



// let arr=[1,2,3,4,5,6,7]
// arr.map((ele,index,arr)=>{
    
//     console.log(arr[2])
    
// })

yargs.argv