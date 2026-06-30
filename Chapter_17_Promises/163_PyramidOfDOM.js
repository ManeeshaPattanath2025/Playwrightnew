function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened!");
    });
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login Page loaded")
    })
}

function enterCredentials(){
    return new Promise(function(resolve){
resolve("credentials entered")
    })
}

function clicklogin(){
    return new Promise(function(resolve){
        resolve("Loggedin successfully")
    })
}
async function runTheE2E(){
    let msg1=await openBrowser()
    console.log("Steps1:",msg1)
    let msg2=await goToLogin()
    console.log("Step2:",msg2)
    let msg3=await enterCredentials()
    console.log("Step3:",msg3)
    let msg4=await clicklogin()
    console.log("Step5:",msg4)

}
runTheE2E();
