//Grade Calculator
function calculateGrade() {
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter marks between 0 and 100");
        return;
    }

    let grade;
    if (marks > 79){
       grade = "A"
    } else if (marks >= 60 && marks  <= 79){
      grade="B"
    } else if (marks >=50 && marks <= 59){
      grade="C"
    } else if (marks >=40 && marks <= 49){
      grade="D"
    } else{
        grade ="E"    
    }
    
    alert("Student Grade: " + grade);
}

calculateGrade();