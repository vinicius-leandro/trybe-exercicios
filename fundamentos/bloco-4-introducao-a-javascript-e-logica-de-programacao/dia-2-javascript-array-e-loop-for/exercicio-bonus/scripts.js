let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let mult = null;


for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        mult = numbers[index] * numbers[secondIndex];
    }
    newNumbers.push(mult);
    if(index == numbers.length - 1) {
        mult = numbers[index] *  2;
        newNumbers.push(mult);
    }
}


console.log(newNumbers);
