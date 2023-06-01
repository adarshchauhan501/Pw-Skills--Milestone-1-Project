// Create a customer object
const customer = {
    name: "John Doe",
    balance: 5000,
    
    // Function to deposit money into the account
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
      } else {
        console.log("Invalid amount. Deposit failed.");
      }
    },
    
    // Function to withdraw money from the account
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      } else {
        console.log("Insufficient funds or invalid amount. Withdrawal failed.");
      }
    }
  };
  
  // Test the functions
  console.log(`Customer: ${customer.name}`);
  console.log(`Initial balance: ${customer.balance}`);
  
  customer.deposit(1000); // Deposit $1000
  customer.withdraw(2000); // Withdraw $2000
  customer.withdraw(5000); // Withdraw $5000 (more than balance)
  customer.deposit(-100); // Invalid deposit amount


  // sorry sir, i have completed this assignment using chatGpt
  
  
  