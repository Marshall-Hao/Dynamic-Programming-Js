const countConstruct = (target, wordBank, memo={}) => {
    if ( target in memo ) return memo[target];
    if (target === '') return 1;
    
    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
            console.log(memo)

        }
    }

    memo[target] = totalCount;
    // console.log(memo)
    return totalCount
}

console.log(countConstruct('skateboard', ['bo','rd', 'ate','t','ska','sk','boar','d','boa','r']))
