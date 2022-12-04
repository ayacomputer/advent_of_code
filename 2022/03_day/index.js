import { syncReadFile } from '../helpers/helper.js'
const data_array = syncReadFile('./input.txt');
console.log(data_array);

let total_score = 0;

let split_data_array = [];
function splitIntoHalfInArray(array) {
    for (let i = 0; i < array.length; i++) {
        let half_length = array[i].length / 2
        let split = [array[i].slice(0, half_length), array[i].slice(half_length, array[i].length)];
        split_data_array.push(split);
    }
}
splitIntoHalfInArray(data_array);
console.log("formatted", split_data_array);

function compareTwo(first, second) {
    for (let i = 0; i < first.length; i++) {
        if (first.includes(second[i])) {
            if (second[i] === undefined) {
                console.log("undefined here", [i]);
            }
            return second[i];
        }
    }
}
function getScore(array) {
    for (let i = 0; i < array.length; i++) {
        let common_letter = compareTwo(array[i][0], array[i][1])
        let score = getPriorityScore(common_letter)
        console.log("common letter is >>>>>", common_letter, score)
        total_score += score;
    }
}

let priority_score = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
    l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
}

function isUpperCase(letter) {
    if (letter.toUpperCase() === letter) {
        return true
    } else {
        return false
    }
}

function getPriorityScore(letter) {
    let lowercase_letter = letter.toLowerCase();
    let score = priority_score[lowercase_letter];
    if (isUpperCase(letter)) {
        score += 26;
    }
    return score;
}


getScore(split_data_array);
console.log("Q1:", total_score);

// Part 2

const group_array = []; // three lines in each group
function getThreeInArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (i && (i % 3 === 0)) {
            let group = [array[i], array[i + 1], array[i + 2]];
            group_array.push(group);
        }
    }
}

getThreeInArray(data_array);
console.log("group array", group_array);
