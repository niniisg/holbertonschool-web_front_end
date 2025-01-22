function countPrimeNumbers() {
    let count = 0;
    for (let num = 2; num <= 100; num++) {
        let primeNum = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                primeNum = false;
                break;
            }
        }
        
        if (primeNum) {
            count++;
        }
    }
    return count;
}

const start = performance.now();


setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    const end = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
}, 0);