const test1 = [
  "2",
  "visa 2.0",
  "mastercard 3.0",
  "3",
  "/charge?network=visa&amount=100&merchant_id=m001&charge_id=c001",
  "/confirm?charge_id=c001",
  "/payout?merchant_id=m001"
];

const parser = input => {
  let N = parseInt(input[0]),
    M = parseInt(input[N + 1]);

  const cardInfo = [];
  const operations = [];
  let request;
  for (let i = 1; i < N + 1; i++) {
    let c = input[i];
    cardInfo.push(new Card(c));
  }

  for (let i = N + 2; i < input.length; i++) {
    let o = input[i].split("?");
    let type = o[0];
    let ops = o[1].split("&");
    ops = ops.map(o => o.split("="));
    for (let j = 1; j < o.length; j++) {
      if (type === "/charge") {
        let charge = new Charge();
        charge.addValues(ops);
        debugger;
        operations.push(charge);
      } else if (type === "/refund") {
      } else if (type === "/confirm") {
      } else if (type === "/payout") {
      }
    }
  }
};

class Request {
  constructor() {
    this.operations = [];
    this.obj = {};
  }
}

class Card {
  constructor(info) {
    info = info.split(" ");
    const p = parseInt(info[1]) / 100;

    this.card = info[0];
    this.percent = p;
  }
}

class Charge {
  constructor() {
    this.network = "";
    this.merchant_id = "";
    this.charge_id = "";
    this.amount = null;
  }

  addValues = function(input) {
    for (let i = 0; i < input.length; i++) {
      let k = input[i];
      this[k[0]] = k[1];
    }
    this.amount = parseInt(this.amount);
    return this;
  };
}

class Payout {
  constructor() {
    this.merchant_id = "";
  }
}

class Confirmation {
  constructor() {
    this.charge_id = "";
  }
}

class Refund {
  constructor() {
    this.charge_id = "";
  }
}

console.log("test1:", parser(test1));
