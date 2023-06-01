function printDivisibleByThree(arr) {
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
  
      if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
      } else {
        continue;
      }
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printDivisibleByThree(numbers);
  