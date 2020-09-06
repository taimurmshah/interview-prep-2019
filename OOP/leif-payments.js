class Invoice {
  constructor({ contractId }) {
    this.contractId = contractId;
  }

  calculatePayment(percentIncomeShare) {
    return (
      this.totalMonthlyIncome *
      /*represents query*/ this.contract.percentIncomeShare
    );
  }

  calculateTotalMonthlyIncome() {
    let totalMonthlyIncome = 0;
    let incomeReports = Student.getIncomeReportsByDate(month, date);
    incomeReports.forEach(
      incomeReport => (totalMonthlyIncome += incomeReport.amount)
    );
    this.totalMonthlyIncome = totalMonthlyIncome;
    return this;
  }
}

class Contract {
  constructor({}) {
    this.isFulfilled = false;
  }
  //if this.isFulfilled -> don't create Invoice
}

/*
 * to calc totalMonthlyIncome
 * 1. query each IncomeReport that a student has;
 * 2. return the relevent Month + year
 * 3. in the invoice, i'd multiply it by the percentIncomeShare and return
 *
 * */
