let myVar = "Smokey";
var oStr2 = "Pizza";

function calcMPG(){
    let miles=parseFloat(document.getElementById("miles").value);
    let gals=parseFloat(document.getElementById("gallons").value);
     let oStr = "Pizza"; // Try var and no decle
    checkInput( miles, gals );
    if ( isNaN(miles) || isNaN(gals)) {
        oStr += "Must specify number for Miles and Gallons";
        // change to let and unknwon outside of blck
        let strangeVal = "Blah is know when NAN outside of this block";
    }
    if ( gals <= 0 || miles <= 0 ){
        oStr +=  "Gallons and miles must be positive";
    }
    if (  oStr === null ){
        let mpg=(miles/gals).toFixed(2);
        oStr = `MPG: ${mpg}`;
    } else {
        oStr = `<span style=color:red> ${oStr} </span>`;
    }
    console.log( `strangeVal:${strangeVal}`); // known here hen isNan
    document.getElementById("results").innerHTML = oStr;
}
function checkInput( m, g){
    console.log( `myVar:${myVar}`);  // It is known
    console.log( `m:${m}`);  // It is known
    console.log( `OStr2:${oStr2}`);  // It is known
    // console.log( `OStr:${oStr}`);  // It is unKnown
    //  console.log( `strangeVal:${strangeVal}`);  // It is unKnown


}
