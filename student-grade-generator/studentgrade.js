//Grade Calculator
function calculateGrade() {
  // Asks the user to input the student's marks and stores the value in the variable 'marks'
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));
    
    // Check if marks is a number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter marks between 0 and 100");
        return;
    }

    // Determine the grade using the mark ranges
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
    
    // Displaying the calculated grade to the user using an alert
    alert("Student Grade: " + grade);
}

calculateGrade();