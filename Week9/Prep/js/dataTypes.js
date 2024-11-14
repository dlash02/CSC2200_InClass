function startChecking(){

    let inX = prompt("Give me a number->"); // Both input strings
    //inX = document.getElementById("uInput");
    in22X = parseInt( inX );
    console.log( `inX:${inX}`);
    inX = inX  + 2;
    console.log( `inX2:${inX}`);
    document.getElementById("results").innerHTML =   `inX2:${inX}`
}
