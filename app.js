console.log("Hello World!\n==========\n");
let favoriteNumber = 8;

favoriteNumber =prompt("Enter a number");

if (favoriteNumber <= 7){
  console.log ("too low");
} else if (favoriteNumber >= 9){
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
  console.log("Tank top");

  break;
case "02":
  console.log("T-Shirt");

  break;
  case "03":
    console.log("Long Sleeve");

    break;
  case "04":
    console.log("Sweat Shirt");

    break;
    default: 
    console.log("Other");


}
switch(colorId){
  case "BK":
    console.log("Black");
  
    break;
  case "BL":
    console.log("Blue");
  
    break;
    case "RD":
      console.log("Red");
  
      break;
    case "PU":
      console.log("Purple");
  
      break;
      default: 
      console.log("White");
  
  
  }

  switch(sizeId){
    case "S":
      console.log("Small");
    
      break;
    case "M":
      console.log("Medium");
    
      break;
      case "L":
        console.log("Large");
    
        break;
      case "XL":
        console.log("Extra Large");
    
        break;
        default: 
        console.log("One Size Fits All");
    
    
    }
console.log(`Product: ${size} ${color} ${type}`);
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
