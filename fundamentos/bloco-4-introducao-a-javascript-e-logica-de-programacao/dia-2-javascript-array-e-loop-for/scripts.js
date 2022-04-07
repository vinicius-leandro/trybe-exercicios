let numbers = [];
let div = null;

for(let num = 1; num <= 25 ; num += 1) {
   numbers.push(num);
}

for(let cont of numbers){
    div = cont / 2;
    console.log(div);
}
