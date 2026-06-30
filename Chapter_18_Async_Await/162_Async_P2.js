function getToken(){
    return Promise.resolve("abc123");
}
//await page.goto()
async function run(){
    let token= await getToken();
    console.log(token)
}
run()