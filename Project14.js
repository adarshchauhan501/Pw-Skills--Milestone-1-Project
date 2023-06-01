const calculateTotalCost = (cart) => {
    let totalCost = 0;
    
    cart.forEach((item) => {
      const { unitPrice, quantity } = item;
      totalCost += unitPrice * quantity;
    });
    
    return totalCost;
  };
  

  // Example 

  let flpkartCart = [
    {unitPrice: 20, quantity: 4},
    {unitPrice: 45, quantity: 2},
    {unitPrice: 60, quantity: 4},
    {unitPrice: 70, quantity: 5}
];

let totalCost = calculateTotalCost(flpkartCart);
console.log(totalCost);