function workWArrays(){
    // alert("Clicked");
    // let fruits = [];
    let fruits2 = new Array();
    let fruits3 = ['Apple', "Berry", "Cherry", 44];
    fruits3[3] = "Donut";
    fruits3.push( 'Eggs' );
    console.log("Fruits Size=" + fruits3.length);
    console.log( fruits3 );

    let applyCherry = fruits3[0] + fruits3[2];
    // Create
    for( let i=0; i<fruits3.length; i++){
        console.log( fruits3[i] );
    }
    console.log("------------------------")
    fruits3.forEach( (fruit, index) => {
        console.log( `index:${ index } value:${ fruit }` );
    })
    console.log("--BLAH ---- ");

    // removing first element
    let f1 = fruits3.shift();
    console.log( fruits3 );
    // remove last element
    let f2 = fruits3.pop();

    let inx = fruits3.indexOf("Cherryxxxxxxx");
    console.log( "inx=" + inx );

    console.log("------------------------")
    let fruits = ["A", "B", "C", "D", "E", "F"];
    let someFruits = fruits.slice( 3, 5);
    console.log( someFruits );

    let lowerCase = fruits.map( fruit => fruit.toLowerCase());
    console.log( lowerCase );

    fruits.sort()
    fruits.reverse();

    if ( fruits.includes( "Apple")) {
        console.log( `Apple` );
    }
}