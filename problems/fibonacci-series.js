const getFibonacciSeries = function (n) {
    const series = [];

    let fib1 = 1;
    let fib2 = 1;

    if (n === 1) {
        series.push(fib1);
        return series;
    }
    if (n === 2) {
        series.push(fib1);
        series.push(fib2);
        return series;
    }

    series.push(fib1);
    series.push(fib2);

    while (n - 2) {

        let fib3 = fib1 + fib2;
        series.push(fib3);
        [fib1, fib2] = [fib2, fib3]
        n--;
    }

    return series;

}

// console.log(getFibonacciSeries(100))

const MemoisedSeries = function () {
    let cache = {};

    return function getSeries(n) {
        if (cache[n]) {
            console.log("already cached")
            return cache[n];
        }
        const series = getFibonacciSeries(n);
        cache[n] = series;
        return series;
    }
}

// const series = MemoisedSeries();

// console.log(series(5));
// console.log(series(5));
