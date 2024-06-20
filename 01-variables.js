const accountId=623646;
let accountEmail='tofarhanali@gamil.com';
var account_Password='2454';
let accountState;
accountCity='Okara';//this will give output
// accountId=6;   //not allowed when you are using const
//accountEmail='ytrr@gmail.com';//let value will be updated
// var account_Password='5432';   //var will also be 2nd time declare and its value will also change it work globally.
accountCity='Islamabad'; //its value will also updated
console.log(accountCity);
//console.table is also a method in javascript to show output 
console.table([accountEmail,accountId,account_Password,accountCity,accountState]);

/*
Prefer not to use var because of issue in block scope and function scope.
*/