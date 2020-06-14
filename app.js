// // CHAPTER # 1
// // TASK NO 1
// alert("Welcome!");


// // TASK NO 2
// alert("Error! Please enter a valid password.");


// // TASK NO 3
// alert("Welcome to JS Land...\nHappy Coding!");


// // TASK NO 4
// alert("Welcome to Js land...")

// var check = document.createElement('input');
// check.type = 'checkbox';
// checkbox.id = "id";
// var lable = document.createElement('label');
// lable.htmlFor = 'id';
// lable.appendChild(document.createTextNode('Prevent this page from creating additional dialogs.'))
// var myDiv = document.getElementById('myDiv');
// myDiv.appendChild(check);
// myDiv.appendChild(lable);
// confirm(myDiv) 


// // TASK NO 5
// // run from console
// alert("Hello... I  Can run js from my web browser's console")


// // TASK NO 6 and 7
// // in html file



// // CHAPTER # 2
// // TASK NO 1
// var username;


// // TASK NO 2
// var myName = "Shayan Irfan";


// // TASK NO 3
// var message;
// message = "Hello World";
// alert(message);


// // TASK NO 4
// var name = "John Doe";
// var age = 15;
// var qualification = "Certified Mobile Application Development";
// alert(name);
// alert(age + " years old");
// alert(qualification);


// // TASK NO 5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");


// // TASK NO 6
// var email = "ishayan767@gmail.com";
// alert("My email address is " + email);


// // TASK NO 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);


// // TASK NO 8
// document.write("Yah! I can write HTML content through JavaScript");


// // TASK NO 9
// var a = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);



// // CHAPTER # 3
// // TASK NO 1
// var age = 19;
// alert("I am " + age + " years old");


// // TASK NO 2
// var number_of_visits = 15;
// alert("You have visited " + number_of_visits + " times.");


// // TASK NO 3
// var birthYear = 2001;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof birthYear);


// // TASK NO 4
// var visitor_name = "John Doe";
// var product_title = "T-shirt";
// var quantity = "5";
// document.write(visitor_name.bold() + " ordered " + quantity.bold() + " " + product_title.bold() + "(s) on XYZ Clothing store");



// // CHAPTER # 5
// // TASK NO 1
// var num1 = parseInt(prompt("Enter 1st Number: "));
// var num2 = parseInt(prompt("Enter 2nd Number: "));
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum) 


// // TASK NO 2
// // Subtraction
// alert("For Subtraction")
// var num1 = parseInt(prompt("Enter 1st Number: "));
// var num2 = parseInt(prompt("Enter 2nd Number: "));
// var sum = num1 - num2;
// document.write("Difference of " + num1 + " and " + num2 + " is " + sum + "<br>")

// // Multiplication 
// alert("For Multiplication")
// var num1 = parseInt(prompt("Enter 1st Number: "));
// var num2 = parseInt(prompt("Enter 2nd Number: "));
// var sum = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + sum + "<br>")

// // Division
// alert("For Division")
// var num1 = parseInt(prompt("Enter 1st Number: "));
// var num2 = parseInt(prompt("Enter 2nd Number: "));
// var sum = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + sum + "<br>")


// // TASK NO 3
// var number;
// document.write("Value after variable declaration is " + number + "<br>") ;
// var num = 5;
// document.write("Initial value: " + num + "<br>");
// num++;
// document.write("Value after increment:" + num + "<br>");
// num = num + 7;
// document.write("Value after addition:" + num + "<br>");
// num--;
// document.write("Value after decrement: " + num + "<br>")
// num = num % 3
// document.write("The remainder is: " + num + "<br>")


// // TASK NO 4
// var ticket_price = parseInt(prompt("Enter price for one Ticket: "));
// var final_price = ticket_price * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + final_price + "RS");


// // TASK NO 5
// var a = parseInt(prompt("Enter the number whose table do you want: "));
// document.write("Table of " + a + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(a + " x " + i + " = " + a * i + "<br>");
// }


// // TASK NO 6
// var C = parseInt(prompt("Enter °C: "));
// var F = (C * 9/5) + 32;
// document.write(C + "°C is " + F + "°F" + "<br>"); 
// F = parseInt(prompt("Enter °F: "));
// C = (F - 32) * 5/9;
// document.write(F + "°F is " + C + "°C");


// // TASK NO 7
// var a = 650;
// var b = 100;
// var c = 3;
// var d = 7;
// var z = 100;
// var x = a * c;
// var y = b * d;
// var e = x + y + z;
// var i = "Shopping Cart";
// document.write(i.bold().fontsize(6) + "<br>" + "<br>" + "<br>" + "<br>");
// document.write("Price of item 1 is " + a + "<br>");
// document.write("Quantity of item 1 is " + c + "<br>");
// document.write("Price of item 2 is " + b + "<br>");
// document.write("Quantity of item 2 is " + d + "<br>");
// document.write("Shipping Charges " + z + "<br>" + "<br>");
// document.write("Total cost of your order is " + e);


// // TASK NO 8
// var a = 980;
// var b = 804;
// var c = b / a * 100;
// var i = "Marks Sheet";
// document.write(i.bold().fontsize(6) + "<br>" + "<br>" + "<br>" + "<br>");
// document.write("Total marks: " + a + "<br>");
// document.write("Marks obtained: " + b + "<br>");
// document.write("Percentage: " + c + "%");


// // TASK NO 9
// var a = (10 * 104.80) + (25 * 28);
// document.write("Currency in PKR".bold().fontsize(6) + "<br>" + "<br>" + "<br>" + "<br>");
// document.write("Total Currency in PKR: " + a);


// // TASK NO 10
// var a = 10;
// var b = (10 + 5) * 10 / 2;
// document.write("The Answer of the Calculation is: " + b);


// // TASK NO 11
// var a = parseInt(prompt("Enter current year: "));
// var b = parseInt(prompt("Enter birth year: "));
// var c = a - b;
// var d = c - 1;
// document.write("Age Calculator".bold().fontsize(6) + "<br>" + "<br>" + "<br>" + "<br>");
// document.write("Current Year: " + a + "<br>");
// document.write("Birth Year: " + b + "<br>");
// document.write("You are either " + c + " or " + d + " years old.");


// // TASK NO 12
// var r = parseInt(prompt("Enter radius of the circle: "));
// var c = 2 * 3.142 * r;
// var a = 3.142 * r ** 2;
// document.write("The Geometrizer".bold().fontsize(6) + "<br>" + "<br>" + "<br>" + "<br>");
// document.write("Radius of a circle: " + r + "<br>");
// document.write("The circumference is: " + c + "<br>");
// document.write("The area is: " + a);


// // TASK NO 13
// var a = "Chocolate Chip";
// var b = 15;
// var c = 65;
// var d = 3;
// var e = (c - b) * 365 * 3;
// document.write("The Lifetime Supply Calculator".bold().fontsize(6) + "<br>" + "<br>" + "<br>" + "<br>");
// document.write("Favourite Snack: " + a + "<br>");
// document.write("Current age: " + b + "<br>");
// document.write("Estimated Maximum age: " + c + "<br>");
// document.write("Amount of Snacks per day: " + d + "<br>");
// document.write("You will need " + e + " to last you until the ripe of old age " + c);



// // CHAPTER # 6-9
// // TASK NO 1
// var a = 21;
// document.write("Result: <br> The value of a is: " + a + "<br>" + "<br>" + "<hr>" + "<br>");
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a);


// // TASK NO 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// // Explanation:-
// // At --a, the value of --a is 1 and now the value a becomes 1;

// // At --a - --b, here the value of --b is 0 and now the value of b becomes 0, 
// // so the calculation will be  1 - 0 = 1;

// // At  --a - --b + ++b, here the value of ++b is 1 and now the value of b becomes 1, 
// // so the calculation will be 1 - 0 + 1 = 2;

// // At --a - --b + ++b + b--, here the value of b-- remains same as ++b, but at this point b becomes 0, 
// // so finally the calculation will be 1 - 0 + 1 + 1 = 3;
// document.write("a is " + a + "<br>" + "b is " + b + "<br>" + "result is " + result);


// // TASK NO 3
// var name = prompt("Enter your name: ");
// alert("Welcome! " + name);


// // TASK NO 5
// var a = parseInt(prompt("Enter the number whose table do you want: ", 5));
// document.write("Table of " + a + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(a + " x " + i + " = " + a * i + "<br>");
// }


// // TASK NO 6
// // solution at index.html page 



// // CHAPTER # 9-11
// // TASK NO 1
// var city = prompt("Enter your city name").toUpperCase();
// if(city == "KARACHI"){
//     alert("Welcome to the city of lights")
// }


// // TASK NO 2
// var gender = prompt("Enter your gender").toUpperCase();
// if(gender === 'MALE'){
//     alert('Good Morning Sir');
// }else if(gender === 'FEMALE'){
//     alert("Good Morning Ma'am")
// }


// // TASK NO 3
// var color = prompt("Enter color of traffic signal").toUpperCase();
// if(color === "RED"){
//     alert("Must Stop")
// }else if(color === "YELLOW"){
//     alert("Ready To Move")
// }else if(color === "GREEN"){
//     alert("Move Now")
// }


// // TASK NO 4
// var fuel = prompt("Enter fuel in litre");
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }


// // TASK NO 5
// a
// var a = 4;
// if (++a === 5){ 
//     alert("given condition for variable a is true");
// } 

// // b
// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

// // c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }if(c === 14){
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }

// // e
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }

// // f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }


// // TASK NO 6
// var sub1 = prompt("Enter marks of sub1");
// var total1 = prompt("Enter total marks of sub1");

// var sub2 = prompt('Enter marks of sub2');
// var total2 = prompt("Enter total marks of sub2");

// var sub3 = prompt("Enter marks of sub3");
// var total3 = prompt("Enter total marks of sub3");

// var obt = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
// var total = parseInt(total1) + parseInt(total2) + parseInt(total3);

// var percentage = (obt/total) * 100;

// document.write("<h1>Mark Sheet</h1><br><br><br>");
// document.write("Obtained Marks = ",obt);
// document.write("<br>Total Marks = ",total);
// document.write("<br>Percentage = ", percentage);

// if (percentage >= 80){
//     document.write("<br>Grade = A one");
//     document.write("<br>Remarks = Excellent")
// }else if(percentage >= 70){
//     document.write("<br>Grade = A");
//     document.write("<br>Remarks = Good")
// }else if(percentage >= 60){
//     document.write("<br>Grade = B");
//     document.write("<br>Remarks = You Need To Improve")
// }else if(percentage < 60){
//     document.write("<br>Grade = Fail");
//     document.write("<br>Remarks = Sorry")
// }


// // TASK NO 7
// var sec_number = 5;
// var user_input_number = prompt("Enter number");
// if (user_input_number === sec_number){
//     alert("Bingo! Correct answer");
// }else if (user_input_number === (sec_number+1)){
//     alert("Close enough to the correct answer")
// }


// // TASK NO 8
// var number = prompt("Enter a number");
// if (number%3 === 0){
//     alert("This number is divisible by 3")
// }


// // TASK NO 9
// var number = prompt("Enter a number");
// if (number%2 === 0){
//     alert('Even')
// }else if(number%2 !== 0){
//     alert('Odd')
// }


// // TASK NO 10
// var temp = prompt("Enter temperature");
// if(temp > 40){
//     alert('It is too hot outside.')
// }else if(temp > 30){
//     alert('The Weather today is Normal.')
// }else if(temp > 20){
//     alert("Today's weather is cool.")
// }else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }


// // TASK NO 11
// var fno = parseInt(prompt("Enter first no"));
// var lno = parseInt(prompt("Enter  second number"));
// var operator = prompt("Enter operator");
// if(operator === "+"){
//     alert('The sum is ' + (fno + lno));
// }else if(operator === "-"){
//     alert('The sum is ' + (fno - lno));
// }else if(operator === "*"){
//     alert('The sum is ' + (fno * lno));
// }else if(operator === "/"){
//     alert('The sum is ' + (fno/lno));
// }else if(operator === "%"){
//     alert('The sum is ' + (fno%lno));
// }



// // CHAPTER # 12-13
// // TASK NO 1
// var letter = prompt("Enter a letter");
// if("abcdefghijklmnopqrstuvwxyz".indexOf(letter) > -1){
//     alert("This is lowercase")
// }else if("ABCDEFGHIJKLMNOPQURSTUVWXYZ".indexOf(letter) > -1){
//     alert("This is uppercase")
// }


// // TASK NO 2
// var no1 = parseInt(prompt("Enter 1st number"));
// var no2 = parseInt(prompt("Enter 2nd number"));
// if(no1> no2){
//     alert("1st number is greater");
// }else if(no2 > no1){
//     alert("2nd number is greater");
// }else if(no1 === no2){
//     alert("Both numbers are same");
// }


// // TASK NO 3
// var number = prompt("Enter a number");
// if (number > 0){
//     alert("number is positive")
// }else if(number < 0){
//     alert("number is negative")
// }else if(number === 0){
//     alert("number is equal to zero")
// }


// // TASK NO 4
// var str = prompt("Enter a letter").toLowerCase();
// if("aeiou".indexOf(str)> -1){
//     alert("True")
// }else{
//     alert("False")
// }


// // TASK NO 5
// var pas = "12345";
// var pas1 = prompt("Enter pasword 1");
// if (pas1 === pas){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Pasword")
// }


// // TASK NO 6
// var greeting;
// var hour = 13;
// if(hour < 18){ 
//     greeting = "Good day";
// }
// else{
//      greeting = "Good evening";
// }


// // TASK NO 7
// var time = parseInt(prompt("Enter time in 24hr format"));
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night")
// }



// // CHAPTER # 14-16
// // TASK NO 1
// var students_list = new Array();


// // TASK NO2 2
// var students_list = new Array();


// // TASK NO 3
// var string_array = ['a' , 'b' , 'c'];


// // TASK NO 4
// var number_array = [1,2,3];


// // TASK NO 5
// var bolean_array = [ true, false, false, true];


// // TASK NO 6
// var mixed_array = ['a', 1, 1.1, true];


// // TASK NO 7
// var degree = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phill', 'Ph.D'];
// for(i = 0; i< degree.length; i++){
//     document.write("<br>",i+1,") ",degree[i]);
// }


// TASK NO 8
// var name_array = ["Shayan Irfan", "Padela", "Muhammad Irfan"];
// var score_array = [400,350,450];
// var percent_array = [(400/500)*100, (350/500)*100, (450/500)*100];
// for(i = 0; i < name_array.length; i++){
//     document.write("<br><br>Score of ",name_array[i], " is ", score_array[i] , ". Percentage is: ", percent_array[i]);
// }


// // TASK NO 9
// var color = ['red', 'green', 'blue'];
// document.write("<br>The array before addition");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_first = prompt("Enter color to put in begining");
// document.write("<br>The array after adding color in beginning");
// color.unshift(color_first);
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_last = prompt("Enter color to put in begining");
// color.push(color_first);
// document.write("<br>The array after adding color in end");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }

// document.write("<br>The array after adding more colors");
// color.unshift("black", 'white', 'pink');
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }


// document.write("<br>The array after deleting first color");
// color.splice(0,1)
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }


// // TASK NO 10
// var marks = [200,400,100,300];
// document.write("<br>Score of students: ")
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }

// marks.sort();

// document.write("<br>Ordered Scores of Students: ");
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }


// // TASK NO 11
// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// document.write("<br>List of cities: ")
// for(i = 0; i < cities.length; i++){
//     document.write(cities[i] + " ");
// }

// document.write("<br>Selected cities: " ,cities.slice(2,4))


// // TASK NO 12
// var list = ['This',"is",'my','cat'];
// document.write("<br>Array<br>",list);
// document.write("<br>String<br>",list.join(" "));


// // TASK NO 13
// var devices = [];
// devices.unshift('keyboard');
// devices.unshift('mouse');
// devices.unshift('monitor');
// devices.unshift('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }


// // TASK NO 14
// var devices = [];
// devices.push('keyboard');
// devices.push('mouse');
// devices.push('monitor');
// devices.push('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }


// // TASK NO 15
// // solution at index.html page



// // CHAPTER # 17-20
// // TASK NO 1
// var array_0f_array = [[] , [] , [] , []];


// // TASK NO 2
// var array = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]];
// document.write("<br>")
// for(i = 0; i < array.length; i++){
//     for(j = 0; j < array[i].length; j++){
//         document.write(array[i][j]," ");
//     }
//     document.write("<br>")
// }


// // TASK NO 3
// for(i = 0; i<11; i++){
//     document.write("<br>",i, "<br>");
// }


// // TASK NO 4
// var number = parseInt(prompt("Enter number for multiplicaiton"));
// var length = parseInt(prompt("Enter length of multiplicaiton table"));

// for(i = 1; i< (length+1);i++){
//     document.write("<br>" + number + "   x    " + i + "    =    " + "    " + (number*i))
// }


// // TASK NO 5
// var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawerry'];
// for(i = 0; i < fruits.length ; i++){
//     document.write(fruits[i], "<br>")
// }
// for(i = 0; i < fruits.length ; i++){
//     document.write("Element at index ", i , " is " , fruits[i] , "<br>");
// }


// // TASK NO 6
// document.write("Counting<br>");
// for(i = 1; i < 16; i++){
//     document.write(i," ")
// }

// document.write("<br>Reverse Counting<br>");
// for(i = 10; i > 0; i--){
//     document.write(i," ");
// }

// document.write("<br>Even<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 === 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Odd<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 !== 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Series<br>");
// for(i = 0; i < 11; i++){
//     document.write(2*i,"K ")
// }


// // TASK NO 7
// var items = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var order = prompt("Welcome to pre to pro bakery! What do you want to order");
// if(items.indexOf(order) > -1){
//     document.write("<br><br>",order," is available at index", items.indexOf(order), " in our bakery")
// }else{
//     document.write("<br><br>We are sorry ", order, " is not available in our bakery")
// }


// // TASK NO 8
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Largest number: ", num[num.length - 1]);


// // TASK NO 9
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Smallest number: ", num[0]);


// // TASK NO 10
// document.write("<br>")
// for(i = 0; i < 101; i++){
//     if(i%5 === 0){
//         document.write(i,", ")
//     }
// }