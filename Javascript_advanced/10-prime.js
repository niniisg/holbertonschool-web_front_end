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
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
    
}
const end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
