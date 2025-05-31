/*let day = "punday";

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("its Tuesday")
    break;
  case 3:
      console.log("its Wednesday")
      break;
  case 4:
    console.log("Its Thursday")
    break;
  case 5:
    console.log("Its Friday")
    break;
  case 6:
    console.log("its Saturday")   
    break;
  case 7:
    console.log("Its Sunday") 
    break;
  default:
    console.log(`${day} is not a valid day`);
    break;
}*/

let testScore = 88;
let letterGrade;

switch (true) {
  case testScore >= 90:
  letterGrade = "A";
  break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
    case testScore >= 60:
      letterGrade = "D";
      break;
      case testScore >= 50:
        letterGrade = "E";
        break;
        case testScore <= 40:
          letterGrade = "F";
          break;
          default:
            letterGrade = "Invalid score";
            break;
}

console.log(`Your letter grade is ${letterGrade}`); // Your letter grade is A