const max = (numbers) => {
    let max = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] >= max) {
            max = numbers[i];
        }
    }

    return max;
}

const min = (numbers) => {
    let min = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] <= min) {
            min = numbers[i];
        }
    }

    return min;
}

console.log(max([3,6,11,9,10,15,16,72,90,80,1,2,91,80,74]))
console.log(min([3,6,11,9,10,15,16,72,90,80,1,2,91,80,74]))