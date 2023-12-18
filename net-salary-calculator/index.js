function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const taxRates = {
      "Up to 24,000": 10,
      "24,001 - 40,000": 15,
      "40,001 - 60,000": 20,
      "60,001 - 80,000": 25,
      "Above 80,000": 30
    };
    const nssfDeduction = 200;
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate payee (tax)
    let payee = 0;
    for (const rate in taxRates) {
      const [lower, upper] = rate.split(" - ");
      if (upper) {
        const lowerLimit = parseInt(lower.replace(/,/g, ""));
        const upperLimit = parseInt(upper.replace(/,/g, ""));
        if (grossSalary > lowerLimit && grossSalary <= upperLimit) {
          payee = (grossSalary - lowerLimit) * (taxRates[rate] / 100);
          break;
        }
      } else {
        const limit = parseInt(lower.replace(/,/g, ""));
        if (grossSalary > limit) {
          payee = (grossSalary - limit) * (taxRates[rate] / 100);
          break;
        }
      }
    }
  
    // Calculate NHIF Deductions
    let nhifDeductions = 0;
    for (const rate in nhifRates) {
      const [lower, upper] = rate.split(" - ");
      if (upper) {
        const lowerLimit = parseInt(lower.replace(/,/g, ""));
        const upperLimit = parseInt(upper.replace(/,/g, ""));
        if (grossSalary > lowerLimit && grossSalary <= upperLimit) {
          nhifDeductions = nhifRates[rate];
          break;
        }
      } else {
        const limit = parseInt(lower.replace(/,/g, ""));
        if (grossSalary > limit) {
          nhifDeductions = nhifRates[rate];
          break;
        }
      }
    }
  
    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeduction;
  
    // Return the calculated values
    return {
      payee,
      nhifDeductions,
      nssfDeduction,
      grossSalary,
      netSalary
    };
  }
  
  // Test Case
  const basicSalary = 40000;
  const benefits = 10000;
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log(salaryDetails)