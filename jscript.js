// 1. Join all elements of an array into a string
function joinArray(arr, separator = ',') {
    return arr.join(separator);
}

let myColor = ["Red", "Green", "White", "Black"];
console.log(joinArray(myColor)); // "Red,Green,White,Black"
console.log(joinArray(myColor, ',')); // "Red,Green,White,Black"
console.log(joinArray(myColor, '+')); // "Red+Green+White+Black"

// 2. Counting the most frequent element in an array
function mostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequentElement = null;

    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequentElement = item;
        }
    });

    return `${mostFrequentElement} (${maxCount} times)`;
}

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1)); // "a (5 times)"

// 3. Truncating a string
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) : str;
}

console.log(truncateString("Robin Singh", 4)); // "Robi"

// 4. Capitalizing each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords('js string exercises')); // "Js String Exercises"

// 5. Filtering array elements between two values
function arrBetween(start, end, arr) {
    return arr.filter(num => num > start && num < end);
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); // [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); // [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78])); // []

// 6. Finding the index of an element in an array
function findIndex(arr, element) {
    return arr.indexOf(element);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
console.log(findIndex(["a", "g", "y", "d"], "d")); // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0
