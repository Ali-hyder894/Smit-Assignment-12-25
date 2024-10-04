//1st chapter's

//1st question
// alert("welcome")


//2nd question
// alert("Error!plzz enter a valid password")

// 3rd question
// alert("Welcome to js land... \n Happy Coding!")

//4th question
// alert("Hello...ican run js through my web browser's console")

// 5th quetion
// 1.
//  document.addEventListener('DOMContentLoaded', function() {
//     alert('Script in Head: This alert appears after the DOM is fully loaded.');
// });

// 2.
// document.addEventListener('DOMContentLoaded', function() {
//     alert('Script before HTML: This alert may not work as expected.');
// });

// 3.
// document.addEventListener('DOMContentLoaded', function() {
//     alert('Script Inside Body: This alert appears after the DOM is fully loaded.');
// });

// 6TH QUESTION
// var username;
//7th que
// var myName = "John Doe"; 

//8th que
// a) Declare a variable titled message
// var message;

// b) Assign “Hello World” to variable message
// message = "Hello World";

// c) Display the message in an alert box
// alert(message);

// 9th que

// var studentName = "John Doe";
// var studentAge = "20 years old";
// var studentCourse = "Computer Science";

// alert("Student Name: " + studentName);
// alert("Age: " + studentAge);
// alert("Course: " + studentCourse);

// 10th que
// var alertMessage = "This is an alert message!";
// alert(alertMessage);

//11th que
// var email = "example@example.com";
// alert("My email address is " + email);

// 12th que
// var book = "A smarter way to learn JavaScript";
// alert("I am learning from the book " + book);


// 13TH QUE
// document.write("Hello World! Welcome to JavaScript programming.");


// 14.QUE
// var age = 25; alert("I am " + age + " years old");

// 15 QUE
// var visitCount = localStorage.getItem("visitCount");
// if (visitCount === null) {
//     visitCount = 1;
// } else {
//     visitCount = Number(visitCount) + 1;
// }
// localStorage.setItem("visitCount", visitCount);
// document.write("You have visited this site " + visitCount + " times");

// 16.QUE
// var birthYear = 1999; 
// document.write("<br>My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof birthYear + "<br>");


//17.QUE
// var visitorName = "John Doe"; 
// var productTitle = "T-shirt"; 
// var quantity = 5; 

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");

// 18 th QUE
// Declare 3 variables in one statement
// var name, age, gender;

//19TH QUE
// 2. Legal variable names
// var firstName;
// var $age;
// var _city;
// var user123;
// var totalAmount;

//20 QUE
// 2. Illegal variable names
// var 123name;      // Cannot start with a number
// var my-name;      // Hyphen is not allowed
// var var;          // Reserved keyword
// var alert;        // Reserved keyword
// var first name;   // Space is not allowed 

//21 QUE
// 3. Display naming rules in the browser

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain letters, numbers, $, and _. For example $my_1stVariable.<br>");
// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name.<br>");
// document.write("Variable names are case sensitive.<br>");
// document.write("Variable names should not be JS keywords.");


// 22 QUE
// Add two numbers
// var num1 = 10;
// var num2 = 15;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is: " + sum + "<br>");

// 23 QUE

//  Subtraction, multiplication, division, modulus
// var num1 = 20;
// var num2 = 5;
// document.write("Subtraction of " + num1 + " and " + num2 + " is: " + (num1 - num2) + "<br>");
// document.write("Multiplication of " + num1 + " and " + num2 + " is: " + (num1 * num2) + "<br>");
// document.write("Division of " + num1 + " by " + num2 + " is: " + (num1 / num2) + "<br>");
// document.write("Modulus of " + num1 + " by " + num2 + " is: " + (num1 % num2) + "<br>");

// 24 QUE

//  JS Mathematical Expressions
// var number;
// document.write("Value after variable declaration is: " + number + "<br>");
// number = 5;
// document.write("Initial value: " + number + "<br>");
// number++;
// document.write("Value after increment is: " + number + "<br>");
// number += 7;
// document.write("Value after addition is: " + number + "<br>");
// number--;
// document.write("Value after decrement is: " + number + "<br>");
// var remainder = number % 3;
// document.write("The remainder is: " + remainder + "<br>");

// 25 QUE
// Cost of movie tickets
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("The cost of buying " + numberOfTickets + " tickets is: " + totalCost + " PKR<br>");

//                                                //QUESTION-26
// //VAR IS INCREASE
// var Result =  10 ;
// console.log("The value of a variable is "+ Result);
  
// ++Result
// console.log("varibale value increased by 1, "+Result);

// var Result = 11 ;
// console.log("The value of a variable is "+ Result);

// Result++
// console.log("varibale value increased by 1, "+Result);

// //decrease
// var Num = 11;
// --Num;
// console.log("The value of a variable is 11");


// var Num = 11;
// Num--;
// console.log("varibale value decreased by 10");

//                                                   //QUESTION -27
// //ALGEBRA                                                  
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;                                                 
// console.log("The output is => --a - --b + ++b + b--" );

//                                                    //QUESTION -28
// //PROMPT-1
// var spec = prompt("What is name " );
// document.write("ASSALA-MU-ALAIKUM <br> ");
// //PROMPT-2
// var spec = prompt("Enter any digit ", 5 );
// document.write(spec+ " x " +2+ " = " + spec * 2);

// //PROMPT
// var sub = prompt("What is subject " );
// var sub = prompt("What is subject " );
// var sub = prompt("What is subject " );
// 29 que

// QUESTION - 1                  

//Prompt the user to enter a city name
// var city = prompt("Please enter the name of a city:");

// Check if the city name is "Karachi"
// if (city === "Karachi") {
//     // Display a welcome message if the city is "Karachi"
//     alert("Welcome to the city of lights");
// } else {
//     // Optionally handle other city names or provide a default message
//     alert("Welcome to " + city);
// }

// QESTION - 2

// var city2 = prompt("please enter your gender:");

// if(city2 === "male"){
//     alert("good morning Sir!")    
// }else{
//     alert("good morning Ma,am!")

// }

// QUESTION - 7


// QESTION-8
//Prompt the user to enter a number
// var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
// if (number % 3 === 0) {
//     alert("The number is divisible by 3.");
// } else {
//     alert("The number is not divisible by 3.");
// }

// QESTION-9
// var number = parseInt(prompt("Enter a number:"));

// // Check if the number is even or odd
// if (number % 2 === 0) {
//     alert("The number is even.");
// } else {
//     alert("The number is odd.");
// }

// QUESTION-10

// var temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");

// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");

// } else if (temperature > 20) {
//     alert("Todays Weather is cool.");

// } else if (temperature > 10) {
//     alert("OMG! Todays weather is so Cool.");

// } else {
//     alert("The temperature is very low.");
// }

// QUESTION-11

// var firstNumber = parseFloat(prompt("Enter the first number:"));

// var secondNumber = parseFloat(prompt("Enter the second number:"));

// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation === "+") {

//     result = firstNumber + secondNumber;

// } else if (operation === "-") {

//     result = firstNumber - secondNumber;

// } else if (operation === "*") {

//     result = firstNumber * secondNumber;

// } else if (operation === "/") {

//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;

//     } else {
//         result = "Error! Division by zero.";
//     }


// } else if (operation === "%") {
//     result = firstNumber % secondNumber;


// } else {
//     result = "Invalid operation!";
// }
// Display the result to the user
// alert("The result is: " + result);

// let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
//         let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
//         let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));

        // Take input for total marks
        // let totalMarks = parseFloat(prompt("Enter the total marks:"));

        // Calculate the marks obtained
        // let marksObtained = subject1 + subject2 + subject3;

        // Calculate the percentage
        // let percentage = (marksObtained / totalMarks) * 100;

        // Initialize variables for grade and remarks
        // let grade, remarks;

        // Determine grade and remarks based on the percentage
        // if (percentage >= 80) {
        //     grade = "A+";
        //     remarks = "Excellent";
        // } else if (percentage >= 70) {
        //     grade = "A";
        //     remarks = "very good";
        // } else if (percentage >= 60) {
        //     grade = "B";
        //     remarks = "Good";
        // } else if (percentage >= 50) {
        //     grade = "C";
        //     remarks = "Fair";
        // } else if (percentage >= 40) {
        //     grade = "D";
        //     remarks = "Needs Improvement";
        // } else {
        //     grade = "F";
        //     remarks = "Fail";
        // }

        // Display the results
        // document.write("<h3>Result:</h3>");
        // document.write("Total Marks: " + totalMarks + "<br>");
        // document.write("Marks Obtained: " + marksObtained + "<br>");
        // document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
        // document.write("Grade: " + grade + "<br>");
        // document.write("Remarks: " + remarks + "<br>");

// QuESTION-13


//Function to display the traffic signal message
// function showSignalMessage() {

//     const color = prompt("Enter the traffic signal color (red, yellow, green):").toLowerCase();

//     const signalMessages = {
//         red: "Stop",
//         yellow: "Ready",
//         green: "Go"
//     };

//     if (signalMessages[color]) {
//         alert(`The signal is ${color.charAt(0).toUpperCase() + color.slice(1)}. ${signalMessages[color]}`);
//     } else {
//         alert("Invalid color! Please enter red, yellow, or green.");
//     }
// }

// showSignalMessage();

// QUESTION-14

// function checkFuelLevel() {

//     const fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (fuel < 0.25) {
//         alert("Please refill the fuel in your car.");
//     } else {
//         alert("You have enough fuel.");
//     }
// }

// checkFuelLevel();


// QUESTION-15

//Part a
// var a = 4;
// if (++a === 5) {
//     alert("Given condition for variable a is true");
// }

// // Part b
// var b = 82;
// if (b++ === 83) {
//     alert("Given condition for variable b is true");
// }

// Part c
// var c = 12;
// if (c++ === 13) {
//     alert("Condition 1 is true");
// }
// if (c === 13) {
//     alert("Condition 2 is true");
// }
// if (++c < 14) {
//     alert("Condition 3 is true");
// }
// if (c === 14) {
//     alert("Condition 4 is true");
// }

// Part d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// Part e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
//Part f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// QUESTIoN-16

// function calculateGrade() {
//     // Get the input values
//     var subject1 = parseFloat(document.getElementById('subject1').value);
//     var subject2 = parseFloat(document.getElementById('subject2').value);
//     var subject3 = parseFloat(document.getElementById('subject3').value);
//     var totalMarks = parseFloat(document.getElementById('totalMarks').value);
    
//     // Calculate total obtained marks and percentage
//     var obtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (obtainedMarks / totalMarks) * 100;
    
//     // Determine grade and remarks based on percentage
//     var grade, remarks;
    
//     if (percentage >= 80) {
//         grade = 'A';
//         remarks = 'Excellent';
//     } else if (percentage >= 70) {
//         grade = 'B';
//         remarks = 'Good';
//     } else if (percentage >= 60) {
//         grade = 'C';
//         remarks = 'Fair';
//     } else if (percentage >= 50) {
//         grade = 'D';
//         remarks = 'Satisfactory';
//     } else {
//         grade = 'F';
//         remarks = 'Fail';
//     }
    
    // Display the result
//     document.getElementById('result').innerHTML = 
//         'Total Marks: ' + totalMarks + '<br>' +
//         'Marks Obtained: ' + obtainedMarks + '<br>' +
//         'Percentage: ' + percentage.toFixed(2) + '%<br>' +
//         'Grade: ' + grade + '<br>' +
//         'Remarks: ' + remarks;
// }

//Question-17
// let studentNames = [];

// Question-18
//let studentNames = new Array();

// Question-19
//let stringArray = ["Ali", "Ahmed", "Sara"];

// Question-20
//let numberArray = [10, 20, 30, 40, 50];

// Question-21
//let booleanArray = [true, false, true, false];

// Question-22
//let mixedArray = ["Ali", 25, true, {subject: "Math"}];

// Question-23
//let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// document.write("<h2>Education Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// for(let i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ul>");

// Question-24
// let students = ["Ali", "Ahmed", "Sara"];
// let scores = [400, 350, 450];
// let totalMarks = 500;

// for(let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     document.write(students[i] + " scored " + scores[i] + " marks and percentage is " + percentage + "%<br>");
// }

// Question-25
//let colors = ["Red", "Green", "Blue"];

// a.
// let colorToAddAtBeginning = prompt("Which color do you want to add to the beginning?");
// colors.unshift(colorToAddAtBeginning);
// document.write("Updated Colors: " + colors + "<br>");

// b.
// let colorToAddAtEnd = prompt("Which color do you want to add to the end?");
// colors.push(colorToAddAtEnd);
// document.write("Updated Colors: " + colors + "<br>");

// c.
// colors.unshift("Yellow", "Purple");
// document.write("Updated Colors: " + colors + "<br>");

// d.
// colors.shift();
// document.write("Updated Colors: " + colors + "<br>");

// e.
// colors.pop();
// document.write("Updated Colors: " + colors + "<br>");

// f.
// let indexToAdd = prompt("At which index do you want to add a color?");
// let colorToAdd = prompt("Enter the color name to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("Updated Colors: " + colors + "<br>");

// g.
// let indexToDelete = prompt("At which index do you want to delete color(s)?");
// let numberOfColorsToDelete = prompt("How many colors do you want to delete?");
// colors.splice(indexToDelete, numberOfColorsToDelete);
// document.write("Updated Colors: " + colors + "<br>");

// Question-26
// let studentScores = [450, 350, 400];
// studentScores.sort();
// document.write("Sorted Scores: " + studentScores);



// Question-27
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(1, 4);
// document.write("Selected Cities: " + selectedCities);

// Question-28
// let arr = ["This", " is", " my", " cat"];
// let joinedString = arr.join("");
// document.write("Joined String: " + joinedString);

// Question-29
// let queue = [];
// queue.push("First");
// queue.push("Second");
// queue.push("Third");

// document.write("FIFO: " + queue.shift() + "<br>");
// document.write("FIFO: " + queue.shift() + "<br>");
// document.write("FIFO: " + queue.shift() + "<br>");

// Question-30
// let stack = [];
// stack.push("First");
// stack.push("Second");
// stack.push("Third");

// document.write("LIFO: " + stack.pop() + "<br>");
// document.write("LIFO: " + stack.pop() + "<br>");
// document.write("LIFO: " + stack.pop() + "<br>");

// Question-31
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for(let i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");

// Question-32
//let multiArray = [[], []];

// Question-33
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// for(let i = 0; i < matrix.length; i++) {
//     document.write(matrix[i].join(" ") + "<br>");
// }

// Question-34
// for(let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// QUESTION-35
// let tableNumber = prompt("Enter the number for the multiplication table:");
// let tableLength = prompt("Enter the length of the table:");

// for(let i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }

// QUESTION-36
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// QUESTION-37

// // a. Counting
// document.write("Counting: ");
// for(let i = 1; i <= 15; i++) {
//     document.write(i + (i < 15 ? ", " : "<br>"));
// }

// // b. Reverse counting
// document.write("Reverse Counting: ");
// for(let i = 10; i >= 1; i--) {
//     document.write(i + (i > 1 ? ", " : "<br>"));
// }

// // c. Even numbers
// document.write("Even: ");
// for(let i = 0; i <= 20; i += 2) {
//     document.write(i + (i < 20 ? ", " : "<br>"));
// }

// // d. Odd numbers
// document.write("Odd: ");
// for(let i = 1; i <= 19; i += 2) {
//     document.write(i + (i < 19 ? ", " : "<br>"));
// }

// // e. Series
// document.write("Series: ");
// for(let i = 2; i <= 20; i += 2) {
//     document.write(i + "k" + (i < 20 ? ", " : "<br>"));
// }

// QUESTION-38
//let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter the item you want to search for:");

// if (A.includes(userInput.toLowerCase())) {
//     alert(userInput + " is available in the list.");
// } else {
//     alert(userInput + " is not available in the list.");
// }

// QUESTION-39
// let A = [24, 53, 78, 91, 12];
// let largest = Math.max(...A);
// document.write("The largest number is: " + largest);

// QUESTION-40
// let A = [24, 53, 78, 91, 12];
// let smallest = Math.min(...A);
// document.write("The smallest number is: " + smallest);

// QUESTION-41
// document.write("Multiples of 5: ");
// for(let i = 5; i <= 100; i += 5) {
//     document.write(i + (i < 100 ? ", " : "<br>"));
// }

// QUESTION-42
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");

// QUESTION-43
// let favoriteMobile = prompt("What is your favorite mobile phone model?");
// document.write("Your favorite mobile phone model is: " + favoriteMobile + "<br>");
// document.write("Length of your input: " + favoriteMobile.length);

// QUESTION-44
// let word = "Pakistani";
// let index = word.indexOf("n");
// document.write("Index of 'n' in 'Pakistani': " + index);

// QUESTION-45
// let word2 = "Hello World";
// let lastIndex = word2.lastIndexOf("l");
// document.write("Last index of 'l' in 'Hello World': " + lastIndex);

// QUESTION-46
// let charAt3rdIndex = word.charAt(3);
// document.write("Character at 3rd index in 'Pakistani': " + charAt3rdIndex);

// QUESTION-47
// let fullNameConcat = firstName.concat(" ", lastName);
// alert("Hello, " + fullNameConcat + "!");

// QUESTION-48
// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("Replaced word: " + newCity);

// QUESTION-49
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// document.write("Updated message: " + newMessage);

// QUESTION-50
// let stringNumber = "472";
// let convertedNumber = Number(stringNumber);
// document.write("String: " + stringNumber + "<br>");
// document.write("Number: " + convertedNumber);

// QUESTION-51
// let stringNumber = "472";
// let convertedNumber = Number(stringNumber);
// document.write("String: " + stringNumber + "<br>");
// document.write("Number: " + convertedNumber);

// QUESTION-52
// let userInput = prompt("Enter some text:");
// let capitalLetters = userInput.toUpperCase();
// document.write("Input in capital letters: " + capitalLetters);

// QUESTION-53
// function toTitleCase(str) {
//     return str.replace(/\b\w/g, function(char) { return char.toUpperCase(); });
// }

// let titleCaseInput = toTitleCase(userInput);
// document.write("Input in title case: " + titleCaseInput);

// QUESTION-54
// let num = 35.36;
// let stringNum = num.toString().replace(".", "");
// document.write("Number without dot: " + stringNum);

// QUESTION-55
// let username = prompt("Enter your username:");
// let invalidChars = ["@", ".", ",", "!"];

// for (let i = 0; i < invalidChars.length; i++) {
//     if (username.includes(invalidChars[i])) {
//         alert("Please enter a valid username without special characters like @, ., !, ,");
//         break;
//     }
// }

// QUESTION-56
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Enter the item you are searching for:").toLowerCase();

// if (A.includes(searchItem)) {
//     alert(searchItem + " is available in the list.");
// } else {
//     alert(searchItem + " is not available in the list.");
// }

// QUESTION-57
// let password = prompt("Enter your password:");
// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } else if (!isNaN(password.charAt(0))) {
//     alert("Password should not start with a number.");
// } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     alert("Password must contain both letters and numbers.");
// } else {
//     alert("Your password is valid.");
// }

// QUESTION-58
// let university = "University of Karachi";
// let universityArray = university.split(" ");

// for (let i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

// QUESTION-59
// let lastChar = userInput.charAt(userInput.length - 1);
// document.write("Last character of your input: " + lastChar);

// QUESTION-60
// let sentence = "The quick brown fox jumps over the lazy dog";
// let occurrences = (sentence.toLowerCase().match(/the/g) || []).length;
// document.write("Number of occurrences of 'the': " + occurrences);

