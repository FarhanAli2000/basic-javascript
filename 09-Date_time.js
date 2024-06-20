let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let mycreatedDate=new Date(2023,5,20);
console.log(mycreatedDate.toDateString());

//Important note
console.log(myDate.toLocaleString('default',{
    weekday:"long"
}));


//___________________________Time____________________________________
let mytimestamp=Date.now();
console.log(Math.floor(mytimestamp/1000));