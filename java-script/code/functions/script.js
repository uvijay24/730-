function display() 
{
console.log("hello world")
}
display()
display()
//simple function to add two numbers and print result
function add()
{
    let a= 2 ,b=3;
    console.log(a+b)
}
add()
/* function with parameters/arguments */
function add(a,b)
{
    console.log(a+b)
}
add(10,20)
// create a function sub which accepts two parameters and print its difference
function sub(a,b)
{
    console.log(a-b)
}
sub(8,4)
//functions can have default parameters
function add2(a,b=3,c=3)
{
    console.log(a+b+c)
}
add2(1,2)
//functions can have multiple  parameters
function add3(a,...b)
{
    console.log(a,b)
    console.log(add3.length)
}
add3(10,20,30,40,50)  //(10,[20,30,40,50])
function add31(...b)
{
    console.log(b)
    console.log(add31.length)
}
add31(10,20,30,40,50)
function add4(...b)
    {
        let c=[10,11,b];
       // let c=[10,11,...b];
console.log(c.length)
 }
 add4(1,2,3,4,5);
 //functions can return the values
 function add5(a,b)
{
   return(a+b)
  
}
let x=add5(20,20);
console.log(x);
//rest operator
function names(users)
{
    console.log(users);
    console.log("Total users : "+users.length)
}
names("ram","sita","lakshman","hanuman");

function names1(...users)
{
    console.log(users);
    console.log("Total users : " +users.length)
    let newUsers=["admin",users]
    console.log(newUsers);
   
}
names1("ram","sita","lakshman","hanuman");
names1("kavitha");
names1("raj","dev","deep");
 
