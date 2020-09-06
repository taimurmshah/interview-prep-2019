/*  STRIPE CODE CHALLENGE
 * Nouns:
 * - Merchant
 * - Charge
 * - Card Processing Fee
 * - Stripe Processing Fee
 *
 * Verbs (functions/methods):
 * - Confirm
 * - Refund
 * - Payout
 *
 *  */

const test1 = [
  "2",
  "visa 2.0",
  "mastercard 3.0",
  "3",
  "/charge?network=visa&amount=100&merchant_id=m001&charge_id=c001",
  "/confirm?charge_id=c001",
  "/payout?merchant_id=m001"
];

const test2 = [
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

class Merchant {
  constructor({ merchant_id }) {
    this.merchantId = merchant_id;
    this.charges = [];
    this.payoutHistory = [];
  }
  payout() {
    const chargesToBePaidOut = this.charges.filter(
      charge => charge.hasBeenPaidOut === false
    );
    let merchantBalance = 0;
    chargesToBePaidOut.forEach(charge => (merchantBalance += charge.payout()));
    this.payoutHistory.push(merchantBalance);
  }
  formatPayoutInformation() {
    return this.payoutHistory
      .map(n => this.merchantId + ", " + n.toString())
      .join("\n");
  }
}

class Charge {
  constructor({ charge_id = "", merchant_id = "", network = 0, amount = 0 }) {
    if (typeof amount !== "number") amount = parseInt(amount);
    this.charge_id = charge_id;
    this.merchant_id = merchant_id;
    this.network = network;
    //since stripe processing fee is fixed, should it be a property, or just a variable in a method?
    this.isConfirmed = false;
    this.isRefunded = false;
    this.amount = amount;
    this.hasBeenPaidOut = false;
  }
  //should i consolidate the confirm action and the refund action into a single boolean value?
  confirmCharge() {
    this.isConfirmed = true;
    return this;
  }

  refundCharge() {
    this.isRefunded = true;
    this.amount = -(this.amount * this.network);
    console.log("refund amount:", this.amount);
    return this;
  }

  applyFeesToAmount() {
    const stripeFee = 0.02;
    this.amount -= this.amount * this.network + this.amount * stripeFee;
    return this;
  }

  payout() {
    if (this.hasBeenPaidOut) return 0;
    else {
      this.hasBeenPaidOut = true;
      return Math.ceil(this.amount);
    }
  }
}

let MERCHANT = null;

const solution = chargeData => {
  const { cardNetworkFees, chargeActions } = getCardAndURLInfo(chargeData);
  for (let i = 0; i < chargeActions.length; i++) {
    const url = chargeActions[i];
    const urlParamObject = parseURLParams(url);
    if (urlParamObject.network)
      urlParamObject.network = cardNetworkFees[urlParamObject.network];

    useParamObj(urlParamObject);
  }

  return MERCHANT.formatPayoutInformation();
};

const getCardAndURLInfo = chargeData => {
  const cardNetworkFees = {};
  let numberOfCards = parseInt(chargeData[0]);
  for (let i = 1; i <= numberOfCards; i++) {
    let card = chargeData[i].split(" ");
    cardNetworkFees[card[0]] = parseInt(card[1]) / 100;
  }
  const chargeActions = chargeData.slice(numberOfCards + 2);
  return { cardNetworkFees, chargeActions };
};

const parseURLParams = url => {
  const params = new URLSearchParams(url);
  const urlParamObject = {};
  for (let pair of params.entries()) {
    if (pair[0].startsWith("/")) {
      const type = pair[0].split("?")[0];
      pair[0] = pair[0].split("?")[1];
      urlParamObject.type = type;
    }
    urlParamObject[pair[0]] = pair[1];
  }
  return urlParamObject;
};

const useParamObj = urlParamObject => {
  let { type, merchant_id, charge_id, network, amount } = urlParamObject;
  if (type === "/charge") {
    if (!MERCHANT) MERCHANT = new Merchant({ merchant_id });
    const charge = new Charge({ merchant_id, charge_id, network, amount });
    MERCHANT.charges.push(charge);
  } else if (type === "/confirm") {
    MERCHANT.charges
      .filter(charge => charge.charge_id === charge_id)[0]
      .confirmCharge()
      .applyFeesToAmount();
  } else if (type === "/refund") {
    MERCHANT.charges
      .filter(charge => charge.charge_id === charge_id)[0]
      .refundCharge();
  } else if (type === "/payout") {
    MERCHANT.payout();
  }
};

console.log(solution(test3));
