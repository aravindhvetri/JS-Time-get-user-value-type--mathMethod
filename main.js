// find time to season get value user:

let number = new Date();
let num =number.setTime(prompt("Enter your  time"));
if(num <= 12){
	 console.log("MORNING");
 }
 else if(num <= 15){
	 console.log("AFTERNOON");
 }
 else if(num <= 18){
	 console.log("EVENING");
 }
 else if(num <= 23){
	 console.log("NIGHT");
 }
 else if(num > 23){
	 console.log("ENTER CORRECT TIME");
 }