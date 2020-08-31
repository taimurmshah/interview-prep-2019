// const { test1, test2, test3 } = require("./inputs");

const solution = input => {
  let cardInfo = {};
  input[0] = parseInt(input[0]);
  input[input[0] + 1] = parseInt(input[input[0] + 1]);
  const merchants = {};
  const charges = {};
  const numOfCards = input[0];
  const res = [];
  for (let i = 1; i < numOfCards + 1; i++) {
    let str = input[i].split(" ");
    let card = str[0];
    cardInfo[card] = parseInt(str[1]) / 100;
  }

  for (let i = numOfCards + 2; i < input.length; i++) {
    handleOperation(input[i], cardInfo, merchants, charges);
  }

  const keys = Object.keys(merchants);

  for (let i = 0; i < keys.length; i++) {
    let m = merchants[keys[i]];
    for (let j = 0; j < m.payoutHistory.length; j++) {
      res.push(`${m.id}, ${m.payoutHistory[j]}`);
    }
  }
  return res.join("\n");
};

const handleOperation = (str, cardInfo, merchants, charges) => {
  str = str.split("?");
  const type = str[0];
  let data = {};
  let params = new URLSearchParams(str[1]);
  for (let pair of params.entries()) {
    data[pair[0]] = pair[1];
  }

  if (type === "/charge") {
    let { merchant_id, charge_id, network, amount } = data;
    network = cardInfo[network];
    let charge = new Charge(network, amount, charge_id, merchant_id);
    charges[charge_id] = charge;
    if (merchants[merchant_id]) {
      let merchant = merchants[merchant_id];
      merchant.addCharge(charge);
    } else {
      let merchant = new Merchant(merchant_id);
      merchant.addCharge(charge);
      merchants[merchant_id] = merchant;
    }
  } else if (type === "/confirm") {
    let charge = charges[data.charge_id];
    charge.confirm();
  } else if (type === "/refund") {
    let charge = charges[data.charge_id];
    charge.refund();
  } else {
    merchants[data.merchant_id].payout();
  }
};

//need to return merchant info in the end.
class Merchant {
  constructor(merchant_id) {
    this.id = merchant_id;
    this.charges = [];
    this.balance = 0;
    this.payoutHistory = [];
  }

  addCharge(charge) {
    this.charges.push(charge);
  }

  payout() {
    this.balance = 0;
    for (let i = 0; i < this.charges.length; i++) {
      if (this.charges[i].alreadyProcessed) continue;
      let charge = this.charges[i];
      this.balance += charge.payout();
      this.charges[i].alreadyProcessed = true;
    }
    this.payoutHistory.push(Math.ceil(this.balance).toString());
    this.balance = 0;
  }
}

class Charge {
  constructor(network, amount, charge_id) {
    this.id = charge_id;
    this.network = network;
    this.stripeFee = 0.02;
    this.isConfirmed = false;
    this.isRefunded = false;
    this.principleAmount = amount;
    this.alreadyProcessed = false;
  }

  confirm() {
    this.isConfirmed = true;
  }

  refund() {
    this.isRefunded = true;
  }

  payout() {
    if (this.isConfirmed) {
      return (
        this.principleAmount -
        this.principleAmount * this.network -
        this.principleAmount * this.stripeFee
      );
    } else return -(this.principleAmount * this.network);
  }
}

const test1 = [
  "2",
  "visa 2.0",
  "mastercard 3.0",
  "3",
  "/charge?network=visa&amount=100&merchant_id=m001&charge_id=c001",
  "/confirm?charge_id=c001",
  "/payout?merchant_id=m001"
];

let test2 = [
  "2",
  "visa 2.0",
  "mastercard 3.0",
  "5",
  "/charge?network=visa&amount=100&merchant_id=m001&charge_id=c001",
  "/charge?network=mastercard&amount=50&merchant_id=m001&charge_id=c002",
  "/refund?charge_id=c001",
  "/confirm?charge_id=c002",
  "/payout?merchant_id=m001"
];

const test3 = [
  "2",
  "visa 2.0",
  "mastercard 3.0",
  "8",
  "/charge?merchant_id=m001&charge_id=c001&amount=1000&network=mastercard",
  "/charge?merchant_id=m001&charge_id=c002&amount=1000&network=visa",
  "/confirm?charge_id=c001",
  "/confirm?charge_id=c002",
  "/payout?merchant_id=m001",
  "/charge?merchant_id=m001&charge_id=c003&amount=1000&network=visa",
  "/confirm?charge_id=c003",
  "/payout?merchant_id=m001"
];
//
// console.log(solution(test1));
// console.log(solution(test2));
// console.log(solution(test3));
