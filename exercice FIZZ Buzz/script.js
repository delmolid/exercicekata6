


function fizzBuzz (n) {
let answer = [];
for (i = 1; i <= n; i++) {
if (i % 3 === 0){
i = "Fizz"
} 
answer.push(i)
}
console.log(answer) 
}
fizzBuzz (3)