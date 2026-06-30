function openbroser(){
    return new Promise(function(resolve){
        //code to Open the browser
        resolve("open the brower");
    })
}
function gotoLogin(){
    return new Promise(function(resolve){
        resolve("login page loaded");
    });
}