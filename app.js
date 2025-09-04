// ch=1 ALERTS
// i)
//alert("Hello World");
// ii)
//alert("Error! Please enter a vaild password.");
// iii)
//alert("Wellcome to js land... \n  Happy coding!" );
// iv)
//alert("Wellcome to js land..");
//alert("Happy Coding! \n Prevent this page from creating additional dialogs.");
// v)
//alert("Hello... I can run js through my web browser's console");
// Qestion vi and vii complete.

// ch=2 VARIABLES FOR STRINGS
// i)
var  username;
// ii)
var  myName ="Full Name";
// iii)
var  message="“Hello World”";
//alert(message);
// iv)
var name="Jhone Doe";
//alert(name);
var age="15 Years old"
//alert(age);
var eud="Certifide Mobile Application Development";
//alert(eud);
// v)
var p="PIZZA \n PIZZ \n PIZ \n PI \n P";
//alert(p);
// vi)
var m="My email address is";
var  email ="example@example.com";
//alert(m + " " + email);
// vii)
var t="I am trying to learn from the book";
var   book =" A smarter \n way to learn JavaScript";
//alert(t + " " +  book);
// viii)
document.write("Yah! i can write HTML content through JavaScript");
// ix)
var s="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
//alert(s);

// ch=3 VARIABLES FOR NUMBERS 

// i)
var age="15 Years old"
//alert(age);
// ii)
var visiter="“You have visited this site 14 times";
//alert(visiter);
// iii)
var  birthYear="<p> My birth month is 1990 </br> Data type of my ddeclared variable is number </p>";
document.write(birthYear);
// iv)
var  visitorsName="John Doe";
var  productTitle =" T-shirt";
var  Quantity=5;
document.write("<p>" + visitorsName ," " ,"ordered" ,Quantity, productTitle," ","(s) on XYZ Clothing store </p>");

// ch=4 VARIABLE NAMES: LEGAL & ILLEGAL
// i)
var a=5, b=10, c=15;
// ii)
//  legal
var myVariable;
var my_variable;
var $;
var variables4;
var _;
//  illegal
// var 1variables;
// var sec variables;
// var if;
// var #var;
// var .variables;

// iii)
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p> Variable names can only contain,numbers, $, and _. For example $my_1stVariable </p>");
document.write("<p> Variables must begin with a letter, $ or _.  For example $name, _name or name  </p>");
document.write("<p> Variable names are case sensitive </p>");
document.write("<p> Variable names should not be JS keywords </p>");

// ch=5 MATH EXPRESSIONS
// i)
var a=2;
var b=5;
var c=a+b;
document.write("<p>Sum of "+ a +"and"+b+"is"+c+"</p>");
// ii)
var a=2;
var b=5;
var c=a-b;
document.write("<p>Sum of "+ a +"and"+b+"is"+c+"</p>");

var a=2;
var b=5;
var c=a*b;
document.write("<p>Sum of "+ a +"and"+b+"is"+c+"</p>");

var a=2;
var b=5;
var c=a/b;
document.write("<p>Sum of "+ a +"and"+b+"is"+c+"</p>");

var a=2;
var b=5;
var c=a%b;
document.write("<p>Sum of "+ a +"and"+b+"is"+c+"</p>");

// iii)
// a
var variable;
// b
document.write("<p>Value after variable declaration is: "+variable+"</p>");
// c
variable=5;
// d
document.write("<p>Initial value: "+variable+"</p>");
// e
variable++;
// f
document.write("<p>Value after increment is:  "+variable+"</p>");
// g
variable=variable+7;
// h
document.write("<p>Value after addition is:  "+variable+"</p>");
// i
variable--;
// j
document.write("<p>Value after decrement is:  "+variable+"</p>");
// k
variable=variable%3;
// l
document.write("<p>The remainder is :  "+variable+"</p>");
// iv
var  price=600;
 price= price*5;
 document.write("<p>Total cost to buy 5 tickets to a movie is "+ price+"PKR</p>");
// v
var table=2;
document.write("<h4>Table of "+table+"</h4>") ;
document.write("<p>2x1= "+table+"</p>"); 
table=2*2;
document.write("<p>2x2= "+table+"</p>"); 
table=2*3;
document.write("<p>2x3= "+table+"</p>"); 
table=2*4;
document.write("<p>2x4= "+table+"</p>"); 
table=2*5;
document.write("<p>2x5= "+table+"</p>"); 
table=2*6;
document.write("<p>2x6= "+table+"</p>"); 
table=2*7;
document.write("<p>2x7= "+table+"</p>"); 
table=2*8;
document.write("<p>2x8= "+table+"</p>"); 
table=2*9;
document.write("<p>2x9= "+table+"</p>"); 
table=2*10;
document.write("<p>2x10= "+table+"</p>"); 
// vi)
var CelsiusT1=25;
var  FahrenheitT1=(CelsiusT1 * 9/5)+32;
document.write(CelsiusT1 + "oC is"+ FahrenheitT1 + "oF.<br>");
var FahrenheitT2=77;
var CelsiusT2 =(FahrenheitT2 - 32)* 5/9;
document.write(FahrenheitT2 + "oF is "+ CelsiusT2 + "oC" );
// vii)
var Price1="Price of item 1 is 650";
var Price2=" Price of item 2 is 100";
var quantity1 =" Ordered quantity of item 1 is 3";
var quantity2 =" Ordered quantity of item 2 is 7";
var charges =" Shipping charges 100";
var total="Total cost of your order is 2750";
document.write("<h2>Shopping Cart</h2>");
document.write(Price1 +"<br>"+quantity1+"<br>"+Price2+"<br>"+quantity2+"<br>"+charges);
document.write("<p>"+total+"</p>");
// viii)
var  totalM=980;
var obtainedM=804;
var per= totalM/obtainedM;
document.write("<h3> Marks Sheet</h3>")
document.write("<p> Total marks" +totalM +"</p>")
document.write("<p>  Obtained marks" +obtainedM +"</p>")
document.write(per +"%");

// ix)

// x)

// xi)

// xii)

// xiii)


// ch=6-9 MATH EXPRESSIONS
// i)

// ii)
var a = 2, b = 1; 
document.write("<p>a is "+a+ "<br> b is"+b+"</p>");
var result = --a - --b + ++b + b--; 
//--a=1; - --b=0; + ++b=1 + b-- =1
document.write("result is"+result );
// iii)
var  user=prompt("Hello user \n please enter name");
// iv) 4 question is not here
// v)
var table5=5;
var  table5=+prompt("Enter a number to display its multiplication table");
document.write("<h4>Table of "+table5+"</h4>") ;
document.write("<p>5x1= "+table5+"</p>"); 
table5=5*2;
document.write("<p>5x2= "+table5+"</p>"); 
table5=5*3;
document.write("<p>5x3= "+table5+"</p>"); 
table5=5*4;
document.write("<p>5x4= "+table5+"</p>"); 
table5=5*5;
document.write("<p>5x5= "+table5+"</p>"); 
table5=5*6;
document.write("<p>5x6= "+table5+"</p>"); 
table5=5*7;
document.write("<p>5x7= "+table5+"</p>"); 
table5=5*8;
document.write("<p>5x8= "+table5+"</p>"); 
table5=5*9;
document.write("<p>5x9= "+table5+"</p>"); 
table5=5*10;
document.write("<p>5x10= "+table5+"</p>"); 

// vi)


// END