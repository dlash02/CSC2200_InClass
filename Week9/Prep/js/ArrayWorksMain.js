// function looper1() {
//   let ct = document.getElementById("inCount").value;
//   let oStr = "";
//   let i=0;
//   // for( let i=0; i<ct; i++){
//     while( (i++) <ct ){
//   //   for( let i=0; i<inStr.length; i++){
//       oStr += `<br /> You got ${i} bottles of blah on the wall`;
//   }
//   document.getElementById("results").innerHTML = oStr;
// }
let shopList = [];
function addItem(){
    let item = document.getElementById("item").value;
    shopList.push( item );
    let size = shopList.length;
    document.getElementById("results").innerHTML = `Added Item ${item}, list is ${size}`;
}
function showList(){
    let sz = shopList.length;
    let oStr = "<ol>";
    for ( let i=0; i<sz; i++ ) {
        oStr += "<li>" + shopList[i] + "</li>"
    }
    oStr += "</ol>";

    console.log( "OSTR" + oStr );
    document.getElementById("results").innerHTML = oStr;
}
function removeFromList(){
    let item = document.getElementById("item").value;
    let oStr = "";
    // if ( isItemOnList(item)){
    let idx = shopList.indexOf( item);
    if ( idx != -1 ){
        shopList.splice( idx, 1); // 2nd parameter means remove one item only
        oStr = `removed items at ${idx}`
    } else {
        oStr = "Item Not found";
    }
    document.getElementById("results").innerHTML = oStr;
}
function isItemOnList( item ){
    for( let i=0; i<shopList.length; i++){
        if ( item === shopList[i]){
            return true;
        }
    }
    return false;
}