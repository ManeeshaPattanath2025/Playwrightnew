let checkAuth=Promise.resolve("Auth ok");
let checkDB=Promise.resolve("DB OK");
let checkcache=Promise.resolve("cache ok");
Promise.all([checkAuth,checkDB,checkcache]).then(function (results){
    console.log("All the Checks are fine!");

})
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB Down"),
    Promise.resolve("OK")

]).then(function(r){
    console.log(r);
}).catch(function(error){
    console.log("Failed",error);
})