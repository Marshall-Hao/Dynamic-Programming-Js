const gridTraveler = (m,n, memo={}) => {
    //are the args in the memo
    const key = m + ',' + n;
    console.log(key);
    if (key in memo) return memo[key];
    if ( m == 1 && n == 1) return 1;
    if ( m == 0 || n == 0) return 0;

    memo[key] = gridTraveler(m-1, n,memo) + gridTraveler(m, n - 1,memo);
    console.log(memo)
    return memo[key];
};

console.log(gridTraveler(1,1))
console.log(gridTraveler(2,3))
console.log(gridTraveler(3,2))
// console.log(gridTraveler(16,37))
// console.log(gridTraveler(17,16))