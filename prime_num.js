
function isPrime(num) {
    // If the number is less than 2, it's not prime
    if (num < 2) {
        return false;
    }

    // Check for factors from 2 to the number just before the given number
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            // If num is divisible by any i, it's not prime
            return false;
        }
    }

    // If no factors were found, the number is prime
    return true;
}

// Example usage
let num = 13; // Change this number to check other numbers
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}
