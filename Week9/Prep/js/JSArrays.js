// Demonstrating features of JavaScript Arrays
function workWithArrays() {
// 1. Creating an Array
    let fruits = ['Apple', 'Banana', 'Cherry'];
    console.log('Initial Array:', fruits);

// 2. Accessing elements
    console.log('First fruit:', fruits[0]);
    console.log('Second fruit:', fruits[1]);

// 3. Adding elements
    fruits.push('Orange'); // Adds 'Orange' to the end of the array
    console.log('After push (add to end):', fruits);

    fruits.unshift('Strawberry'); // Adds 'Strawberry' to the beginning of the array
    console.log('After unshift (add to start):', fruits);

// 4. Removing elements
    fruits.pop(); // Removes the last element
    console.log('After pop (remove last):', fruits);

    fruits.shift(); // Removes the first element
    console.log('After shift (remove first):', fruits);

// 5. Finding the index of an element
    let bananaIndex = fruits.indexOf('Banana');
    console.log('Index of Banana:', bananaIndex);

// 6. Removing elements by index
    fruits.splice(bananaIndex, 1); // Removes 'Banana'
    console.log('After removing Banana:', fruits);

// 7. Slicing an Array (creating a sub-array)
    let someFruits = fruits.slice(0, 2); // Gets the first two elements
    console.log('Sliced Array (first 2 fruits):', someFruits);

// 8. Iterating over an Array
    console.log('Iterating over array using forEach:');
    fruits.forEach((fruit, index) => {
        console.log(`Fruit at index ${index}: ${fruit}`);
    });

// 9. Mapping an Array (creating a new array based on an existing one)
    let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
    console.log('Uppercase Fruits:', upperCaseFruits);

// 10. Filtering an Array (getting elements that match a condition)
    let longNamedFruits = fruits.filter(fruit => fruit.length > 5);
    console.log('Fruits with more than 5 letters:', longNamedFruits);

// 11. Checking if an Array includes an element
    console.log('Does the array include "Apple"?', fruits.includes('Apple'));
    console.log('Does the array include "Cherry"?', fruits.includes('Cherry'));

// 12. Sorting an Array
    fruits.sort();
    console.log('Sorted Fruits:', fruits);

// 13. Reversing an Array
    fruits.reverse();
    console.log('Reversed Fruits:', fruits);

// 14. Reducing an Array to a single value
    let fruitString = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
    console.log('All fruits in a string:', fruitString);

// 15. Creating an empty array and filling it
    let emptyArray = new Array(3).fill('Empty');
    console.log('Array filled with "Empty":', emptyArray);
}