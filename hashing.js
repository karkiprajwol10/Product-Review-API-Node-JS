/* 
hashing
  same text has different hash code( due to security reason)
  generate hash code
  verify hash code
*/
//Prajwol@123 =>$2b$10$yusHg64XwU9Y3b7qJrHqieGo6ti6M8l570GoYwRb6GGzkrLjtkSk6
import bcrypt from "bcrypt";

// let password = "Prajwol@321";
// let hashedPassword = await bcrypt.hash(password, 10);
// console.log(hashedPassword);

let dbPassword = "$2b$10$YQst8F.b89cs46bb7omxYuoW7MaF/k8UUzKAXOxesLXQsDFEaoCEq";

let isValidPassword = await bcrypt.compare("Prajwol@321", dbPassword);
console.log(isValidPassword);

/* 
bcrypt.hash("abc",10) =>10 means 2 pow 10 times hashing 
    here this code convert abc to  hashed code
bcrypt.compare("Password@123", dbPassword);
    this code result either true or false
    if Password@123 is used to make dbPassword it will return true else return false
*/
