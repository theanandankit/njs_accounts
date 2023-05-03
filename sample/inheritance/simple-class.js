class BankProfile {
    constructor(bankName, bankAccountNumber) {
        this.bankName = bankName;
        this.bankAccountNumber = bankAccountNumber;
    }

    check() {
        console.log(`Hello, my bankName is ${this.bankName} and I'm ${this.bankAccountNumber} years old.`);
    }

    getBankDetails() {
        this.bankAccountNumber++;
        console.log(`Bank Details for , ${this.bankName}! You are now ${this.bankAccountNumber} years old.`);
    }
}

// Create a new person object and call its methods
const bankProfile = new BankProfile('Alice', 25);
bankProfile.check();        // "Hello, my bankName is Alice and I'm 25 years old."
bankProfile.getBankDetails(); // "Happy birthday, Alice! You are now 26 years old."
bankProfile.check();        // "Hello, my bankName is Alice and I'm 26 years old."
