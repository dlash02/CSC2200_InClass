function calcMPG(){
    let miles=parseFloat(document.getElementById("miles").value);
    let gals=parseFloat(document.getElementById("gallons").value);
    let oStr = checkInput( miles, gals );

    if (  oStr === "" ){
        let mpg=(miles/gals).toFixed(2);
        oStr = `MPG: ${mpg}`;
    } else {
        oStr = `<span style=color:red> ${oStr} </span>`;
    }
    // alert(oStr);
    document.getElementById("results").innerHTML = oStr;
}
function checkInput( miles, gals ){
    let msg = "";
    if ( isNaN(miles) || isNaN(gals)) {
        if ( isNaN(miles )){
            msg += "<br /> Miles must be a number";
        }
        if ( isNaN( gals )){
            msg += "<br /> Gallons must be a number";
        }
    } else {
        if ( gals < 0 ) {
            msg += "<br /> Gallons must be positive";
        }
        if ( miles < 0 ){
            msg += "<br /> Miles must be positive";
        }
    }
    return msg;
}