const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if ( targetSum === 0) return [];
    if ( targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];
            // if the combination is shorter than the current 'shortest',update it
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
                
            }
        }
    }

    memo[targetSum] = shortestCombination;
    console.log(memo)
    return shortestCombination;
}

console.log(bestSum(107,[2,3,4]))