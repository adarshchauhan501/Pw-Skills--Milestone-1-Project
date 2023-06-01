// Calculate rental cost


function calculateRentalCost(numDays, carType) {
    let rentalCostPerDay;
  
    switch (carType) {
      case "Economy":
        rentalCostPerDay = 4000;
        break;
      case "Midsized":
        rentalCostPerDay = 15000;
        break;
      case "Luxury":
        rentalCostPerDay = 25000;
        break;
      default:
        return "Invalid car type";
    }
  
    var totalCost = rentalCostPerDay * numDays;
    return totalCost;
  }
  let totalCost = calculateRentalCost(5, "Luxury")
  console.log(totalCost);
  