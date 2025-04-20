//arthimetic operators
let a=3,b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
//relational operators
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a!=b);
a=5,b='5'
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
//logical operators
console.log((5>3)&&(5>2))
console.log((2>3)||(5>2))
console.log(!(8>2))
//assignment operators
a=4;
a+=2
console.log(a)
a-=2
console.log(a)
a*=3
console.log(a)
a/=4
console.log(a)
a=3;
a%=2
console.log(a)
//increment and decrement operators
let c=10;
y=c++
y=++c
console.log(y)
y=c++
console.log(y)
 x=10,y=20;
let z= x++ + --y + y-- + ++x
console.log(z)
//terenary operator
let age=42;
let res =(age>=18)? "manasa":"vijay";
console.log(res)
age=6;
 res =(age>=18)? "manasa":"vijay";
console.log(res)
//special operator(unary+/unary-)
let k=(5+'5')
console.log(k);
k=(5 + +'5')
console.log(k);
//nulliesh collision
a="cake",b="fruits"
let choice = a ?? b
console.log(choice);
a= undefined, b="banana"
choice = a ?? b
console.log(choice);