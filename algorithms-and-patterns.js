// NAIVE solution O(n^2)


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


// Sliding Window Pattern Solution O(n)

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

// ------------------------------------------------------------------------------------------------------------------------ //

// Multiple Pointers Pattern solution (works only with SORTED arrays) O(n)


function countUniqueValues(arr) { 
    if(arr.length === 0) return 0;
    let i = 0;
    // проверяем первый элемент, со следующим
    // если первый элемент не равен следующему, тогда  увеличиваем каунтер и меняем элемент 
    // [1,1,2,3,4]; arr[i] = arr[0] = 1; arr[j] = arr[1] = 1;
    // проверяем, 1 !== 1 = false, идем дальше
    // arr[i] = arr[0] = 1; arr[j] = arr[2] = 2;
    // условие проходит, увеличиваем i на 1, и меняем arr[1] = arr[2] = 2;
    // [1,2,2,3,4] -> [1,2,2,3,4] -> [1,2,3,3,4] -> [1,2,3,4,4];
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

countUniqueValues([1,1,1,1,1,1,1,1]);

// BINARY SEARCH O(log n)

function binarySearch(array, value) {

    // array = [1,2,3,5,7,8,9,10,11, 13]; 0 - 8;
    // value = 3;
    
    let min = 0; 
    let max = array.length - 1;

    while (max => min) {
        let middle = Math.floor((min + max) / 2); // index = 4; | ITERATION_2: index = 1; 
        let currentElement = array[middle];
        
        if(array[middle] < val) { // if 8 < 3; false; | ITERATION_2: if 1 < 3 = true; min = 1 + 1 = 2;
            min = middle + 1;
        } 
        else if (array[middle] > val) { // if 8 > 3 true; | 
            max = middle - 1; // max = 4 - 1 = 3; | 
        }

        else {
            return middle;
        }
    }
    return -1;
}

// PigLatin Algorithm solution

function translatePigLatin(str) {
    let regex = /[aiueo]/;
    let pigLatin = '';

    if(str[0].match(regex)) pigLatin = `${str}way`;
    else if(str.match(regex) === null) pigLatin = `${str}ay`;
    else {
        let vowel = str.indexOf(str.match(regex)[0]);
        console.log(str.substr(vowel) , str.substr(0, vowel));
        // str.substr(vowel) -> cut chars from vowel 'hhhello' -> 'ello'
        // str.substr(0, vowel) ->  'hhh'
        // ellohhhay
        pigLatin = str.substr(vowel) + str.substr(0, vowel) + 'ay';
    }
    return pigLatin;
}

translatePigLatin('hhhello');
