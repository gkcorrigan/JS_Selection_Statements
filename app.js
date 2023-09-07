console.log("Hello World!\n==========\n");
let favoriteNumber = 8;

const userInput =prompt("Enter a number");

if (userInput <= 7){
  console.log ("too low");
} else if (userInput >= 9){
  console.log ("too high");
} else {
  console.log ("Congratulations!!!");
}


let birthMonth = prompt("What is your birth month?");

switch(birthMonth){
  case "March":
  case "April":
  case "May":
    console.log("spring");
   break;
  case "June":
  case "July":
  case "August":
    console.log("summer");
    break;
    case "September": 
    case "October": 
    case "November":
      console.log("fall");
      break;
    case "December": 
    case "January": 
    case "February":
      console.log("winter");
      break;
      default:
        console.log("invaild birth month");
     
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

if (colorId == "BK") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch(typeId){
case "01":
  type="Tank top";

  break;
case "02":
  type="T-Shirt";

  break;
  case "03":
    type="Long Sleeve";

    break;
  case "04":
    type="Sweat Shirt";

    break;
    default: 
    type="Other";


}
switch(colorId){
  case "BK":
    color="Black";
  
    break;
  case "BL":
    color="Blue";
  
    break;
    case "RD":
      color="Red";
  
      break;
    case "PU":
      color="Purple";
  
      break;
      default: 
      color="White";
  
  
  }

  switch(sizeId){
    case "S":
      size="Small";
    
      break;
    case "M":
      size="Medium";
    
      break;
      case "L":
        size="Large";
    
        break;
      case "XL":
        size="Extra Large";
    
        break;
        default: 
        size="One Size Fits All";
    
    
    }
console.log(`Product: ${size} ${color} ${type}`);
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
