const accountID = 556677
let accountEmail = "ank@gmail.com"
var accountCity = "Bilaspur"
accountPassword = "asnk123"

let accountState;

console.log(accountID);

//dont use var but use let and const this avoids the problem of var in block and function scope//

accountEmail = "ac@baopiu.com"
accountCity = "bengalore"
accountPassword = "wtf"

console.table([accountID,accountEmail,accountCity,accountPassword,accountState])