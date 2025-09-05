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
document.write ("<h4>Table of "+table+"</h4>") ;
document.write(table,"x 1 =",table*1,"<br>",
table,"x 2 =",table*2,"<br>",
table,"x 3 =",table*3,"<br>",
table,"x 4 =",table*4,"<br>",
table,"x 5 =",table*5,"<br>",
table,"x 6 =",table*6,"<br>",
table,"x 7 =",table*7,"<br>",
table,"x 8 =",table*8,"<br>",
table,"x 9 =",table*9,"<br>",
table,"x 10 =",table*10,"<br><br>",
)

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
var per= (totalM/obtainedM)*100;
document.write("<h3> Marks Sheet</h3>")
document.write("<p> Total marks" +totalM +"</p>")
document.write("<p>  Obtained marks" +obtainedM +"</p>")
document.write(per +"%");

// ix)

// x)
var number=7;
var result=(number+5)*10/2;
document.write("<br> <br>resulte of Qusetion 10 is ", result);
// xi)
var  currentYear=2025, birthYear=2006;
var age1= currentYear-birthYear,age2=age1-1;
document.write("<h1>Age Calculator</h1>Current Year is ",
currentYear,"<br>Birth Year is ",birthYear,"<br>They are either ",age2," or ",age1," years old.");
// xii)
var _radius=20,pI=3.142;
var circumference=2*pI*_radius, area=pI* _radius*_radius;
document.write("<h1>The Geometrizer</h1> Radius of a circle is ",
_radius,"<br>The circumference is : ",circumference,"<br>The area is :  ",area);

// xiii)
var favoriteSnack="Chocolet Bar",currentAge=15, maximumAge=65,amountperDay=3;
var yearsRemaining=maximumAge-currentAge,
daysRemaining=yearsRemaining*365,
totalSnack=daysRemaining*amountperDay;
document.write("<h1>The Lifetime Supply Calculator</h1> Favorite snack :",favoriteSnack,"<br>Current age : ",
    currentAge,"<br> Estimated maximum age :  ",maximumAge,"<br> Amount of snacks per day : ",amountperDay,
    "<br>You will need ",totalSnack," ",favoriteSnack," to last you until the ripe old age of ",maximumAge,". ");
// ch=6-9 MATH EXPRESSIONS
// i)
var a=10;
document.write("<h3>Resulte:</h3> The value of a is:",a,"<br>............................<br>");

document.write(" The value of ++a is : ",++a,"<br>Now the value of a is : ", a,"<br>");

document.write("<br> The value of ++a is : ",a++,"<br>Now the value of a is : ", a,"<br>");

document.write("<br> The value of ++a is : ",--a,"<br>Now the value of a is : ", a,"<br>");

document.write("<br> The value of ++a is : ",a--,"<br>Now the value of a is : ", a);

// ii)
var a = 2, b = 1; 
document.write("<br><br>a is "+a+ "<br> b is"+b+"</h5>");
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
document.write(table5," x 1 =",table5*1,"<br>",
table5," x 2 =",table5*2,"<br>",
table5," x 3 =",table5*3,"<br>",
table5," x 4 =",table5*4,"<br>",
table5," x 5 =",table5*5,"<br>",
table5," x 6 =",table5*6,"<br>",
table5," x 7 =",table5*7,"<br>",
table5," x 8 =",table5*8,"<br>",
table5," x 9 =",table5*9,"<br>",
table5," x 10 =",table5*10,"<br><br>",
);
// vi)
var subject1=prompt("Enter the name of subject1 :");
var subject2=prompt("Enter the name of subject2 :");
var subject3=prompt("Enter the name of subject3 :");

var  totalMarksPerSubject=100;

var  obtainedMarks1=+prompt("Enter obtained marks for ${subject1}:");
var  obtainedMarks2=+prompt("Enter obtained marks for ${subject2}:");
var  obtainedMarks3=+prompt("Enter obtained marks for ${subject3}:");

var totalObtainedMarks=obtainedMarks1 +obtainedMarks2 +obtainedMarks3;
var totalPossibleMarks=totalMarksPerSubject*3;
var persentage=(totalObtainedMarks/totalPossibleMarks)*100;
document.write(
    "<table><tr><th>Subjects</th> <th> Total marks</th> <th> Obtained marks</th> <th> percentage</th></tr>",
    "<tr><td>",subject1,"</td>","<td>",totalMarksPerSubject,"</td>","<td>", obtainedMarks1,"</td>","<td>",persentage,"%</td>","</tr>",
     "<tr><td>",subject2,"</td>","<td>",totalMarksPerSubject,"</td>","<td>", obtainedMarks2,"</td>","<td>",persentage,"%</td>","</tr>",
      "<tr><td>",subject3,"</td>","<td>",totalMarksPerSubject,"</td>","<td>", obtainedMarks3,"</td>","<td>",persentage,"%</td>","</tr>",

      "<tr><td colspan='2'>",totalObtainedMarks,"</td>","<td colspan='2'>",totalPossibleMarks,"</td>","<td colspan='2'>", persentage.toFixed(2),"%</td></tr>",
    "</table>"
)
// END