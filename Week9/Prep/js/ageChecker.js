function doJs() {
    alert(`Starting doJS`);
    let age = document.getElementById("age").value;
    let name = document.getElementById("firstName").value;
    alert(`age:${age} name:${name}`);
    // document.getElementById('results').innerHTML = `age:${age} name:${name}`
    let msg = ""
    let color = ""
    // if ( age < 16 ){
    //     msg += "<span style='background-color: red'> You can NOT drive </span>";
    //
    // } else {
    //     msg += "<span style='background-color: green'> You can drive </span>";
    // }
    if (age < 16) {
        msg += "<span style='background-color: red'> You can NOT drive </span>";
    } else if (age < 18) {
        msg += "<span style='background-color: red'> You can NOT Vote </span>";
    } else if (age < 21) {
        msg += "<span style='background-color: red'> You can NOT Vote </span>";
    } else {
        msg += "<span style='background-color: green'> You are good to go for just about everything! </span>";
    }
    document.getElementById('results').innerHTML = msg;
}
