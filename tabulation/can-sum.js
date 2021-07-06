const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] =  true;
    for (let i = 0; i <= targetSum; i++) { //be carefull with the array.length problem, length 3 but arr[10] =x will have 7 empty element in the middle
        if (table[i] === true) {
            for (let num of numbers) {
               table[i + num] = true;
            }
        }
    }

    return table[targetSum];
}

console.log(canSum(300,[7,14]))