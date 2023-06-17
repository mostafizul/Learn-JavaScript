/*
var name = 'siam';
var number = 12;
var boolean = !true
console.log(name);
console.log(typeof number);
console.log(boolean);*/

/*
var number1 = 2.55555555;
var number2 = 'siam'
console.log(number1.toFixed(3));
console.log(number1.toPrecision(3));
console.log(typeof toString(number1));
console.log(typeof Number(number2));*/

/*
var firstName = "Md."
var lastName = "Karim"
console.log(firstName + " " + lastName);*/

/*
var firstName = prompt("Enter a string: ");

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(3));
console.log(firstName.slice(3,5));
*/
/*
var firstName = prompt("Enter firstName: ");
var lastName = prompt("Enter lastName: ");
var fullName = firstName+ " " + lastName;
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(2));
*/
/*
var length = parseFloat(prompt ("Enter length: "));
var height = parseFloat(prompt ("Enter height: "));
console.log("Rectangle: "+ (length*height).toFixed(3));
console.log("Triangle: "+ ((length*height)/2).toFixed(3));*/

/*
var Farenheit = parseFloat(prompt ("Enter Farenheit: "));
console.log("Celcius: "+((5/9)*(Farenheit-32)).toFixed(3));*/

/*
var number1 = parseInt(prompt ("Enter First Number: "));

if(number1%2==0){
        console.log("Even");
}else{
        console.log("Odd");
}*/
/*
var marks = parseFloat(prompt("Enter your marks: "))

if(marks>100 || marks<0){
        console.log("Invalid Marks");
}
else if(marks<=100 && marks>=80){
        console.log("A+");
}
else if(marks<=79 && marks>=70){
        console.log("A");
}
else if(marks<=69 && marks>=60){
        console.log("A-");
}
else if(marks<=59 && marks>=50){
        console.log("B");
}
else if(marks<=49 && marks>=40){
        console.log("C");
}
else if(marks<=39 && marks>=33){
        console.log("D");
}else{
        console.log("Fail"); 
}*/
/*
var number1 = parseInt(prompt ("Enter First Number: "));
var number2 = parseInt(prompt ("Enter Second Number: "));
var number3 = parseInt(prompt ("Enter Third Number: "));
console.log(number1);
console.log(number2);
console.log(number3);

if(number1>number2 && number1>number3){
        console.log(number1 + " is greater")
}
else if(number2>number1 && number2>number3){
        console.log(number2 + " is greater")
}else{
        console.log(number3 + " is greater")
}*/
/*
var letter = prompt("Enter a letter: ");

var letter = letter.toUpperCase();
if(letter == "A"||letter =="E"||letter =="I"||letter =="O"||letter =="U"){
        console.log("vowel");
}else{
        console.log("consonent");
}*/
/*
var digit = prompt("Enter a digit: ");

switch(digit){
        case "0":
                console.log("Zero");
                break;
        case "1":
                console.log("one");
                break;
        case "2":
                console.log("two");
                break;
        case "3":
                console.log("three");
                break;
        case "4":
                console.log("four");
                break;
        case "5":
                console.log("Five");
                break;
        case "6":
                console.log("SIX");
                break;
        case "7":
                console.log("Seven");
                break;
        default:
                console.log("not Digit");      

}*/
/*
var letter = prompt("Enter a letter: ");
switch(letter.toLowerCase()){
        case "a":
                console.log("Vowel");
                break;
        case "e":
                console.log("Vowel");
                break;
        case "i":
                console.log("Vowel");
                break;
        case "o":
                console.log("Vowel");
                break;
        case "u":
                console.log("Vowel");
                break;
        default:
                console.log("Consonent");      

}*/
/*
for(var i=0; i<10;i++){
        document.write("Bangladesh"+"<br>");
}*/
/*
var i=0;
while(i<10){
        document.write("Bangladesh"+"<br>");
i++;
}*/
/*
var i=0;
do{
        document.write("Bangladesh"+"<br>"); 
        i++;
}while(i<10)*/

/*
for(var i=0; i<10; i++){
        if(i==3){
                continue;
        }
        console.log(i);
}*/
/*
var x = parseInt(prompt("enter a number: "));
function square(x){
         result = x*x;
         return result;
}
console.log(square(x));*/
/*
var x1 = parseInt(prompt("enter number1: "));
var x2 = parseInt(prompt("enter number2: "));
(function sum(x1,x2){
      result = x1+x2;
      console.log(result);
})(x1,x2);*/
/*
var display = function displaymsg(msg){
        console.log(msg);
}
display("hi");*/