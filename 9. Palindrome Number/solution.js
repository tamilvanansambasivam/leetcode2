var isPalindrome = function(x) {
    // If x is negative or ends with a zero (except for zero itself), it can't be a palindrome
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let originalX = x;

    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    // Check if the reversed number is equal to the original number
    if (originalX === reversed) {
        return true;
    } else {
        return false;
    }
};