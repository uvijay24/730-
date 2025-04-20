let obj={
    name:"manasa",
    age:30
}
console.log(obj.age);
console.log(obj['name']); 
let user={
email:"majjari@gmail.com",
password:"manu123"
}
console.log(user.email);
console.log(user.password);


//  objects can be copied into other objects
let x = user//deep copy
const users=[{
    email:"majjari@gmail.com",
    password:"manu123" 
},
{
email:"majjari1@gmail.com",
password:"manu123"
},
{
    email:"majjari2@gmail.com",
password:"manu123"
},

]
//wap to print all email in console

//users.forEach(function(ele){
//console.log(ele.email)
//})
users.forEach(ele => {
  console.log(ele.email);
});
//wap to add 55  at the end of  password  and return all password values
 const users1=[
    {
        name:"manasa",
        password:1,
        email:"kavya@gmail.com",
    },
    {
        name:"prasad",
        password:25,
        email:"ramya@gmail.com",
    },
    {
        name:"majjari",
        password:3,
        email:"divya@gmail.com",
    },
 ]
 let x1=users1.map(function(ele){
    return ele.password+'55'
 })
 console.log(x1)
 //arrow format
 let x11 = users1.map(ele=>ele.password+"55");
 console.log(x11);


 //------------------------------------
 //wap to print in console with name "prasad"
 let x2 = users1.filter(function(ele)
 {
    return ele.name== "prasad"
 })
 console.log(x2[0].password) 
 //above program in arrow format
 let x21 = users1.filter(ele=>ele.name=='prasad')
 console.log(x21[0].password)
//-------------------------------------------
 /* create a dummy array movies ,with objects having properties name,year,collectionInCr*/
  let movies=[{
    name:"bahubali",
    year:2018,
    collectionInCr:700,
  },
  {
    name:"nani",
    year:2012,
    collectionInCr:90,
  },
  {
    name:"rrr",
    year:2024,
    collectionInCr:600,
  },

]






/* print all movies names in console*/
 movies.forEach(function(ele){
    console.log( ele.name)
 })
 /* print only the movies released in 2024*/
 let m = movies.filter(function(ele){
    return ele.year==2024
})
    console.log(m[0].name);
/*arrow foramt let m1=movies .filter ((ele)=>ele.year==2024)
    console.log(m1[0].name);*/
    /*add each object a new property (status)which might be"HIT" OR "FLOP"
    "HIT"--> collectionInCr>100*/ 
    movies.forEach((ele) =>
      {
      if(ele.collectionInCr >= 100)
      {
ele.status="HIT"
      }
      else

      {
        ele.status="FLOP"
      }
    });
    console.log(movies);