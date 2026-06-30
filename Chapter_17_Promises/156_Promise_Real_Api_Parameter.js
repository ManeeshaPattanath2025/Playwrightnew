let apicall=new Promise(function(resolve,reject){
    reject("500 Error");
});
apicall.then(function(data){
    console.log("success or resolve");

}).catch(function(error){
    console.log(error);
})