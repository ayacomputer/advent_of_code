import { syncReadFile } from '../helpers/helper.js'
const data_array = syncReadFile('./input.txt');
const sum_array = [];
let sum = 0;
console.log(data_array);

for (let data of data_array) {
    if (data !== "") {
        sum += +data
    } else {
        sum_array.push(sum)
        sum = 0;
    }
};

// const largest_num = Math.max(...sum_array);

let largest = 0;
for (let i = 0; i < sum_array.length; i++) {
    if (largest < sum_array[i]) {
        largest = sum_array[i];
    }
}

console.log("Q1: largest sum >>>>>>>>>", largest);


// const sorted_sum_array = sum_array.sort((a, b) => a - b).reverse();
// console.log(sorted_sum_array);

function bubbleSortDesc(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] < array[i]) {
                done = false;
                var temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
}


const sorted_sum_array = bubbleSortDesc(sum_array);
console.log(sorted_sum_array);
const big3_sum = sorted_sum_array[0] + sorted_sum_array[1] + sorted_sum_array[2];
console.log("Q2: big 3 sum >>>>>>>>>>", big3_sum);
