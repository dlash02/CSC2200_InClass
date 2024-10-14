function checkAge(){
    // alert("clicked");
    // console.log("Yes that was clicked");
    /*                  */
    let age = document.getElementById("age").value;
    let fName = document.getElementById("firstName").value;
//     // let blah = document.getElementById("blah");
//     console.log( `Age:${age}` );
//     console.log(    `first:${fName}` );
//
//
//     let x;
//     if ( x == undefined ){
//
//     }
//     x = null;
//     console.log( x );
 }
function checkAgeV2(){

    let age = document.getElementById("age").value;
    let fName = document.getElementById("firstName").value;
    const DRIVE = 16;

    let msg = checkInput( age, fName);
    if ( msg == ""){
            if ( parseInt(age) === DRIVE ){
                msg = "<span style='background-color:green'> Yes learn to drive</span>";
            } else if ( parseInt(age) > DRIVE ) {
                msg = "<span style='background-color:green'> YOu should be driving by bnwo</span>";
            } else {
                msg = "<span style='background-color:red'>Stay off the roads! </span>";
            }
        }
    document.getElementById("results").innerHTML = msg;
}
function checkInput( age, fName) {
    let msg = "";
    // if ( msg == "" )
    console.log( parseInt(age));
    if ( isNaN(parseInt(age) ) ){
        msg = "<br /> Error: Age is Non A Number.";
    }

    if ( fName == "") {
        msg += "<br /> Error: fName is empty";
    }
    return msg;
}