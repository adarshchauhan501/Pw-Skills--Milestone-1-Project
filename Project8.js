function printInvertedTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let pattern = '';
      for (let j = 1; j <= row; j++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  // Example usage
  const numRows = 10;
  printInvertedTriangle(numRows);
  