// NAIVE solution


function maxSumSlice (arr, num) {
    if(arr.length < num) {
        return null;
    };
    // In order to we can summ negative numbers;
    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for(let j = 0; j < num; j++) {
            // arr[i + j]
            // arr[0 + 0] = arr[0] + arr[0 + 1] = arr[1] + arr[0 + 2] = arr[2];
            // arr[1 + 0] = arr[1] + arr[1 + 1] = arr[2] + arr[1 + 2] = arr[3];
            // arr[2 + 0] = arr[2] + arr[2 + 1] = arr[3] + arr[2 + 2] = arr[4];
            // ...
            temp += arr[i + j];
        }

        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

maxSumSlice([1,2,3], 2);


// Sliding Window Pattern Solution

 function maxSumSlice(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;

    // проходим первые num элементов и складываем их
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;

    // заметим, что цикл начинается с num для примера возьмем num = 3
    // допустим есть массив [1,2,3,4,5,6]
    // tempSum при первом шаге = 6
    // в этом цикле мы вычитаем из tempSum первый элемент и добавляем следующий, т.е tempSum = 6 - 1 + 4;
    // затем сравнивается значение tempSum после операций выше, и сравнивается с первой суммой
    // следующая итерация num = 4; tempSum = tempSum - arr[4-3]=arr[1]=2 + arr[4]=5 = tempSum - 2 + 5;
    // ...
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}
