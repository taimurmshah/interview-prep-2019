//assumption: contract belongs to a school and to a student; a contract is an agreement between a school and a student.

class School {
  constructor({ name }) {
    this.id = "";
    this.name = name;
    this.contracts = [];
  }

  getStudentContract(studentId) {
    return this.contracts.filter(
      contract => contract.studentId === studentId
    )[0];
  }
}

class Contract {
  constructor({
    studentId,
    schoolId,
    percentIncomeShare,
    paymentCap,
    contractLength
  }) {
    this.contractId = "";
    this.studentId = studentId;
    this.schoolId = schoolId;
    this.percentIncomeShare = percentIncomeShare;
    this.paymentCap = paymentCap;
    this.contractLength = contractLength;
    this.contractAdjustments = [];
  }

  discount(discountAmount, discountType, discountRationale) {
    this.createContractAdjustment(
      this.contractId,
      discountRationale,
      discountType
    );
    //discountAmount validation? should i check whether it's a whole integer?
    switch (discountType) {
      case "percentIncomeShare":
        this.percentIncomeShare -= discountAmount / 100;
        break;
      case "paymentCap":
        this.paymentCap -= discountAmount;
        break;
      case "contractLength":
        this.contractLength -= discountAmount;
        break;
    }

    return this;
  }

  createContractAdjustment(contractId, discountRationale, discountType) {
    let contractAdjustment = new ContractAdjustment({
      contractId,
      discountRationale,
      discountType
    });
    this.contractAdjustments.push(contractAdjustment);
  }

  //does a contract have to receive a written notice;
  //how is the logic of the new values determined
}

class ContractAdjustment {
  //maybe doesn't need the discountType; perhaps some contract method could look through each ContractAdjustment and see what changed.
  constructor({ contractId, discountRationale, discountType }) {
    this.contractId = contractId;
    this.discountRationale = discountRationale;
    this.discountType = discountType;
  }
}

/*something like: a school finds the particular student's contract, and calls contract.discount() on it, with the appropriate parameters.*/

const solution = (schoolId, studentId) => {
  //get school;
  //get particular student contract
  //generate discount parameters -> discountParamsObj; reduce ambiguity here
  //call contract.discount with discountParameters as arguments
};
