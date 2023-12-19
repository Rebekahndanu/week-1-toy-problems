// Calculate PAYE deduction
function calculatePayee(grossIncome) {
  let payee = 0;
  if (grossIncome <= 24000) {
    payee = grossIncome * 0.1;
  }
  else if (grossIncome >=24001 && grossIncome <=32333) {
    payee = grossIncome * 0.25;
  }
  else if (grossIncome >=32334 && grossIncome <=500000) {
    payee = grossIncome * 0.3;
  }
  else if (grossIncome >=500001 && grossIncome <=800000) {
    payee = grossIncome * 0.325;
  }
  else {
    payee = grossIncome * 0.35;
  }
  return payee;
}
//Calculate NHIF deduction
function calculateNHIF(grossIncome) {
  let nhifDeduction = 0;
    if (grossIncome <= 5999) {
      deduction = 150;
    } 
    else if (grossIncome >= 6000 && grossIncome <= 7999) {
        nhifDeduction = 300;
    } 
    else if (grossIncome >= 8000 && grossIncome <= 11999) {
        nhifDeduction = 400;
    } 
    else if (grossIncome >= 12000 && grossIncome <= 14999) {
        nhifDeduction = 500;
    } 
    else if (grossIncome >= 15000 && grossIncome <= 19999) {
        nhifDeduction = 600;
    } 
    else if (grossIncome >= 20000 && grossIncome <= 24999) {
        nhifDeduction = 750;
    } 
    else if (grossIncome >= 25000 && grossIncome <= 29999) {
        nhifDeduction = 850;
    } 
    else if (grossIncome>= 30000 && grossIncome <= 34999) {
        nhifDeduction = 900;
    } 
    else if (grossIncome >= 35000 && grossIncome <= 39999) {
        nhifDeduction = 950;
    } 
    else if (grossIncome >= 40000 && grossIncome <= 44999) {
        nhifDeduction = 1000;
    } 
    else if (grossIncome >= 45000 && grossIncome <= 49999) {
        nhifDeduction = 1100;
    } 
    else if (grossIncome >= 50000 && grossIncome <= 59999) {
        nhifDeduction = 1200;
    } 
    else if (grossIncome >= 60000 && grossIncome <= 69999) {
        nhifDeduction = 1300;
    } 
    else if (grossIncome >= 70000 && grossIncome <= 79999) {
        nhifDeduction = 1400;
    } 
    else if (grossIncome >= 80000 && grossIncome <= 89999) {
        nhifDeduction = 1500;
    } 
    else if (grossIncome >= 90000 && grossIncome <= 99999) {
        nhifDeduction = 1600;
    } 
    else {
        nhifDeduction = 1700;
  }
  return nhifDeduction;
}
  
// Calculate NSSF deduction
function calculateNSSF(grossIncome){
let nssfDeduction = 400;
return nssfDeduction;
}

// Calculate net salary after all the deductions
function calculateNetSalary() {
  let basicSalary = parseFloat(document.getElementById("basicSalary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  let grossIncome = basicSalary + benefits;

  let payee = calculatePayee(grossIncome);
  let nhif = calculateNHIF(grossIncome);

  let nssf = calculateNSSF(grossIncome);

  let netSalary = grossIncome - (payee + nhif + nssf);

  document.getElementById("result") .innerHTML = "Net salary: " + netSalary.toFixed(2)
}

calculateNetSalary()