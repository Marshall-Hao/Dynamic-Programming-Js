const canConstruct = (target, wordBank, memo={}) => {
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true
                console.log(memo)
                return true
            }
        }
    }

    memo[target] = false
    console.log(memo)
    return false
}



// console.log(canConstruct('skateboard', ['bo','rd', 'ate','t','ska','sk','boar']))
console.log(canConstruct(('abcdefmvlmsvmsmvsmvmfvm'), ['ab','cd','abc','ef','def']))