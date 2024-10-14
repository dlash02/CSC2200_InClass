
function doLoops(){

    let nTimes = document.getElementById("nTimes").value;
    let fName = document.getElementById("firstName").value;
    const DRIVE = 16;

    let msg = checkInput( nTimes, fName);
    if ( msg == ""){
            let i = 0;
           // for ( let i=0; i<nTimes; i++ ){
          // while ( i++ < nTimes ){
          //       msg += `<br /> ${i} bottles of something on the wall`;
          //  }
           for( let i=0; i<fName.length; i++){
                let c = fName.charAt( i );
                alert( `c=${c}`);
           }
            // if ( parseInt(age) === DRIVE ){
            //     msg = "<span style='background-color:green'> Yes learn to drive</span>";
            // } else if ( parseInt(age) > DRIVE ) {
            //     msg = "<span style='background-color:green'> YOu should be driving by bnwo</span>";
            // } else {
            //     msg = "<span style='background-color:red'>Stay off the roads! </span>";
            // }
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