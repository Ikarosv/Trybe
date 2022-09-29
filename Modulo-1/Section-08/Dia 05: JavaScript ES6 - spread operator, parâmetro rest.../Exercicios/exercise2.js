const sum = (...rest) => rest.reduce((total, curr) => total + curr, 0);

console.log(sum(4, 5, 6));

