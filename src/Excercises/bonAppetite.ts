function bonAppetit(bill: number[], k: number, b: number): void {
  const totalCost = bill.reduce((sum, item) => sum + item, 0);
  const annaShare = totalCost - bill[k];

  if (annaShare === b) {
    return console.log("Bon Appetit");
  } else {
    return console.log(b - annaShare);
  }
}

export default bonAppetit;
