// Calculate the percentage of the discount

const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedPercentage = Math.round(discountPercentage * 100) / 100; // Round to two decimal places
    return roundedPercentage;
  };
  


  let originalPrice = 40000;
  let discountedPrice = 7500;

  let discountAmount = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(discountAmount);