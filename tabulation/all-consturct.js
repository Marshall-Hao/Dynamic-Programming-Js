const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
    .fill()
    .map(() => []);

    table[0] = [[]];
    console.log(table)
    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
              const newCombinations =  table[i].map(subarray => [...subarray, word]);
              table[i + word.length].push(...newCombinations);
            }
         }
    }

    return table[target.length];
}

console.log(allConstruct('skateboard', ['bo','rd', 'ate','t','ska','sk','boar','d','boa','r']))
console.log(allConstruct('asddsaasddda',['asd','dsa','aaa','d','a','dd','ddd']))