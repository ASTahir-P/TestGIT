const calculator = function (num1, num2, arg) {
    if (arg.toLowerCase() == 'add') {
        return num1 + num2
    } else if (arg.toLowerCase() == 'subtract') {
        return num1 - num2
    } else if (arg.toLowerCase() == 'divide') {
        return num1 / num2
    } else if (arg.toLowerCase() == 'multiply') {
        return num1 * num2
    } else if (arg.toLowerCase() == 'power') {
        return Math.pow(num1, num2)
    } else if (arg.toLowerCase() == 'remainder') {
        return num1 % num2
    } else {
        return "Can only use 'add', 'subtract', 'divide', 'multiply', 'power' and 'remainder' as valid arguments"
    }
}

console.log(calculator(4,13,'divide'))

//fizzbuzz

const FizzBuzz = function (n) {
if(n%3 == 0 && n%5 ==0){
return 'FIzzBuzz'
}else if(n%3 == 0) {
return 'Fizz'
}else if(n%5 == 0) {
return 'Buzz'
}else {return n}
}
console.log(FizzBuzz(15))

//last lab

const RainDrop = function(n) {
let result = ''
if( n% 3 == 0) {
result += 'Pling'
} else if(n%5 == 0){
result += 'Plang'
} else if(n%7 == 0){
result += 'Plong'
} else {
result = n.toString()
}
return result
}

RainDrop(200)