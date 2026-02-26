// Function to calculate GCD using Euclidean algorithm
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate LCM
function lcm(a, b) {
    if (a === 0 || b === 0) return 0; // LCM involving zero is zero
    return Math.abs(a * b) / gcd(a, b);
}

// Main program
try {
    // Get user input
    let num1 = prompt("Enter the first integer:");
    let num2 = prompt("Enter the second integer:");

    // Convert to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Validate inputs
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        throw new Error("Invalid input. Please enter integers only.");
    }

    // Calculate results
    const gcdResult = gcd(num1, num2);
    const lcmResult = lcm(num1, num2);

    // Display results
    console.log(`GCD of ${num1} and ${num2} is: ${gcdResult}`);
    console.log(`LCM of ${num1} and ${num2} is: ${lcmResult}`);
    alert(`GCD: ${gcdResult}\nLCM: ${lcmResult}`);

} catch (error) {
    console.error(error.message);
    alert(error.message);
}
