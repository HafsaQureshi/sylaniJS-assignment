// function agecal(){
// var dob = new Date( prompt("enter your dob"))
// var dobmili = dob.getTime()
// var today = new Date()
// var todaymili = today.getTime()
// var diff = todaymili - dobmili
// var accuage = math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage)
// }
// agecal();

//functions

// function greeting(greet){
//     alert(greet)
// }
// greeting("hello sir" );
///////// global and local variable me diffrence (gkobal ko func me use karsakty hn local ko func k bahir use nhi karsakty)
// function greeting(a,b,c){
//     var z = a+b+c
//     return z;
// }
// var g = greeting(2,3,2 );
// alert(g)

// function calc(num1,opr,num2){
//     if(opr === "+" ){
//         return num1 + num2
//     }
//     else if(pr === "-" ){
//         return num1 - num2
//     }
//     else if(pr === "*" ){
//         return num1 * num2
//     } 
//     else{
//         return "incorrect"
//     }
// }
// var result = calc(5,"-",2)
// console.log(result)


// switch break
// var name = prompt("enter your name ")
// switch(name) {
//      case "hafsa" :
//      alert("Whoopee");
//      break;
//      case "wania " :
//      alert("hello");
//      break;
//      case "asjad" :
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
//      }

// chap 21-25
// task1

// var firstName = prompt( "enter your 1st name ");
// var lastName = prompt("enter your last name");
// var fullName = firstName + lastName;
// alert(fullName)

// task2

// var str = prompt("enter your favorite mobile phone model.")
// var n = str.length;
// document.write("MY FAVOURITE PHONE IS: " + str + "<br>")
// document.write("Length of the string is:" + n)

//task3

// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("String:" + str + "<br>")
// document.write("Index of n:" + n)

// task4
// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write("String:" + str + "<br>")
//  document.write("last Index of l:" + n)

//task5
// var str = "Pakistani";
// var res = str.charAt(3);
// document.write("String:" + str + "<br>")
//  document.write("character at index 3:" + res)

// task7
//   var str = "HYDERABAD";
// var res = str.replace("HYDER", "ISLAM");
// document.write("CITY:" + str + "<br>")
//  document.write("CITY after replacement:" + res)

//task8
// var str = "Ali and Sami are best friends. They play cricket and football together.";
// var res = str.replace("and", "&");
// document.write( str + "<br>")
// document.write( res)

// task9
//task10
// var str = prompt("user input")
// string = str.toUpperCase()
// document.write("user input = " + str + "<br>")
// document.write("UPPER CASE =" + string) 

//task11
 
//  var str = prompt("enter string");
// // var str = "javasrip";
// document.write(
// str.split(' ')
//    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
//    .join(' ')

// )

//task12

// var num = parseFloat(35.368);
// var n = num.toString();
// document.write(n);
//task13
// var str = prompt('enter your name ')
// for(i=0;i<str.length;i++){
//     if(str[i]=='@' && str[i]=='.'&& str[i]==','&& str[i]=='!'){
//     document.write("enter valid unt");
//     }
   
// }
// else
// {
// document.write("perfcet");

// }
//TASK14
// var A=["cake","apple pie","cookie","chips","patties"]
// var input=prompt("Welcome to ABC Bakery . what do you want to order sir/ma'am")
// var bak=input.toLowerCase()
// var bakery=A.indexOf(bak)
// if(A.indexOf(bak)!=-1){
//     alert(bak +" is available at "+bakery+" index in our bakery")
// }
//  else{
//     alert("we are sorry "+bak+" is not available in our bakery")
//  }



//task 16


//task17
// var myString = prompt("enter a string");
//  alert(myString[myString.length-1])

//task18
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));








//  chap 26-30
//task1
// var num = prompt('enter a positive integer')
// document.write('number= ' + num + "<br>")
//  document.write("round of value is = " + math.round(num) + "<br>")
// document.write("floor value is = " + Math.floor(num) + "<br>");  
// document.write("ceil value is = " + Math.ceil(num));  

//task3

// document.write('absolute value of -4 is ' )
// document.write(math.abs(-4));

//task4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);

//task5
// var heads = 0;
// var tails = 0;
// function click() {  
//     x = (Math.floor(Math.random() * 2) == 0);
//     if(x){
//         flip("heads");
//     }else{
//         flip("tails");
//     }
// };
// function flip(coin) {
//     document.getElementById("result").innerHTML = coin;
// };

//task6

// function randomNumber(min, max) { 
// 	return Math.random() * (max - min) + min; 
// } 
// document.write("Random Number between 1 and 100: ") 

// document.write( randomNumber(1, 100) ); 
								 
//task8

// var theNumber = Math.floor((Math.random() * 10) + 1);
// var userSelect = 0;

// while (theNumber != userSelect) {
//   userSelect = prompt("What is the number?");
//   if (userSelect < theNumber) {
//     alert("Guess Higher!");
//   } else if (userSelect > theNumber) {
//     alert("Guess Lower!");
//   }
// }

// alert("Congrats! You guessed the right number!");

//    chap: 31-34

//task1
// var d=new Date();
// var y=d.getYear();
// if (y < 1000)
//  y+=1900;
// var day=d.getDay();
// var m=d.getMonth();
// var daym=d.getDate();
// if (daym<10)
//  daym="0"+daym;
//  var mon=new Array("January", "February", "March", "April", "May", "June", "July",  "August", "September", "October", "November", "December");
// document.write("<font size='2' color='#660000'>"+mon[m]+" "+daym+", "+y+"</font>");

//task2
// var month_name = function(dt){
//     mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return mlist[dt.getMonth()];
//     };
//     console.log(month_name(new Date("6/19/2020")));

//task3


//task4
// var today = new Date();
// if(today.getDay() == 6 || today.getDay() == 0) alert('Its Fun Day!');

  //task5
//   var a = new Date()
//   var b = a.getDate()
//   if ( b<16){
//       document.write('First Fifteen days of the month')
//   }else
//   {
//       document.write('Last Fifteen days of the month')
//   }  

//task6

// var mins = new Date()
// var milimins = mins.getTime()
// var minsconvert = milimins/(1000*60*60)
// document.write('current date = ' + mins + "<br>")
// document.write('elapsed miliseconds since jan 1,1970: ' + milimins + "<br>")
// document.write('elapsed minutes since jan 1,1970: ' minsconvert + "<br>")    

//task13
 
// function myAgeValidation() {
 
//     var lre = /^\s*/;
//     var datemsg = "";
    
//     var inputDate = document.as400samplecode.myDate.value;
//     inputDate = inputDate.replace(lre, "");
//     document.as400samplecode.myDate.value = inputDate;
//     datemsg = isValidDate(inputDate);
//         if (datemsg != "") {
//             alert(datemsg);
//             return;
//         }
//         else {
//             //Now find the Age based on the Birth Date
//             getAge(new Date(inputDate));
//         }
 
// }
 
// function getAge(birth) {
 
//     var today = new Date();
//     var nowyear = today.getFullYear();
//     var nowmonth = today.getMonth();
//     var nowday = today.getDate();
 
//     var birthyear = birth.getFullYear();
//     var birthmonth = birth.getMonth();
//     var birthday = birth.getDate();
 
//     var age = nowyear - birthyear;
//     var age_month = nowmonth - birthmonth;
//     var age_day = nowday - birthday;
    
//     if(age_month < 0 || (age_month == 0 && age_day <0)) {
//             age = parseInt(age) -1;
//         }
//     alert(age);
    
//     if ((age == 18 && age_month <= 0 && age_day <=0) || age < 18) {
//     }
//     else {
//         alert("You have crossed your 18th birthday !");
//     }
 
// }
 
// function isValidDate(dateStr) {
 
    
//     var msg = "";
   
//     var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
 
//     var matchArray = dateStr.match(datePat); // is the format ok?
//     if (matchArray == null) {
//         msg = "Date is not in a valid format.";
//         return msg;
//     }
 
//     month = matchArray[1]; // parse date into variables
//     day = matchArray[3];
//     year = matchArray[4];
 
    
//     if (month < 1 || month > 12) { // check month range
//         msg = "Month must be between 1 and 12.";
//         return msg;
//     }
 
//     if (day < 1 || day > 31) {
//         msg = "Day must be between 1 and 31.";
//         return msg;
//     }
 
//     if ((month==4 || month==6 || month==9 || month==11) && day==31) {
//         msg = "Month "+month+" doesn't have 31 days!";
//         return msg;
//     }
 
//     if (month == 2) { // check for february 29th
//     var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
//     if (day>29 || (day==29 && !isleap)) {
//         msg = "February " + year + " doesn't have " + day + " days!";
//         return msg;
//     }
//     }
 
//     if (day.charAt(0) == '0') day= day.charAt(1);
    
//     return msg;  
// }
 
 

//   Functions

// question # 01
// var displayDate = () => {
//     var date = new Date();
//     document.write('<h2>Question # 01</h2>');
//     document.write(date);
//     document.write("<br>")
// }
// displayDate();
// question # 02
// var greet = () => {
//         var firstName = prompt("Enter your first name");
//         var lastName = prompt("Enter your first name");
//         document.write('<h2>Question # 02</h2>');

//         document.write('Welcome to Our page ' + firstName + ' ' + lastName);


//     }
// greet();
// question # 03
// function add_num(num1, num2) {
//     document.write('<h2>Question # 03</h2>');

//     var res = num1 + num2;
//     document.write(res);
//     document.write("<br>")

// }
// add_num(2, 9);
// question # 04
// question # 05
// var sqr = (num) => {
//         document.write('<h2>Question # 05</h2>');

//         document.write('sqauare root of ' + ' ' + num + ' ' + 'is' + ' ' + Math.sqrt(num) + "<br>");
//         document.write('sqt')
//     }
// sqr(9);

// question # 06

// var num = parseInt(prompt("enter number to find its fact"));

// function fact() {
//     var fact = 1;

//     for (i = 1; i <= num; i++) {
//         fact = fact * i;

//     }
//     document.write('<h2>Question # 06</h2>');

//     document.write('factorial of ' + ' ' + num + ' ' + 'is' + ' ' + fact);
// }

// fact();
// question # 07
// var count = () => {
//         var start = prompt("enter the start num");
//         var end = prompt("enter the end num");
//         for (i = start; i <= end; i++) {
//             document.write(i);
//             document.write("<br>");
//         }

//     }
// count();
// question # 08
// var hypo = () => {
//     var Base = prompt("enter the Base");
//     var perp = prompt("enter the perpendicular");
//     var res = (Base * Base) + (perp * perp);
//     document.write(res);
//     document.write("<br>")
//     var hypoSqrt = () => {
//         document.write("<br>")
//         document.write(Math.sqrt(res));
//     }
//     hypoSqrt();

// }
// hypo();
// question # 09
// var area = (width, height) => {
//     document.write('Area is ' + " " + (width * height));
// }
// area(2, 3);
// question # 11
// var upperCase = (name) => {
//     document.write('<h2>Question # 11</h2>');

//     name = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
//     document.write(name);
// }
// upperCase("saylani");
// question # 12
// function findLongestWord(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// document.write('<h2>Question # 12</h2>');

// document.write(findLongestWord('Web Development Tutorial'));

// question # 13
// var specificLetter = (string, letter) => {
//     var j = 0;
//     for (i = 0; i < string.length; i++) {
//         if (letter == string[i]) {
//             j++;
//         }

//     }
//     console.log('j is ' + ' ' + j);

// }
// specificLetter('JSResourceS.com', 'o');

// question # 14
// var calcCircumference = (radius) => {
//     document.write('The circumference is ' + ' ' + (2 * 3.142 * radius));
//     document.write('<br>');



// }
// var calcArea = (radius) => {
//     document.write('The Area is ' + ' ' + (3.142 * (radius * radius)))

// }
// calcCircumference(3);
// calcArea(2);function find_longest_word(str)


