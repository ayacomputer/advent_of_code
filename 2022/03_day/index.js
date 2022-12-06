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
    console.log("letter passed", letter)
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
    group_array.push([array[0], array[1], array[2]])
    for (let i = 0; i < array.length; i++) {
        if (i && (i % 3 === 0)) {
            let group = [array[i], array[i + 1], array[i + 2]];
            group_array.push(group);
        }
    }
}

getThreeInArray(data_array);
console.log("group array", group_array);


function compareThree(first, second, third) {

    let common_letters = [];
    for (let i = 0; i < first.length; i++) {
        if (first.includes(second[i])) {
            common_letters.push(second[i]);
            console.log("common_letters", common_letters);
        }
    }
    for (let j = 0; j < common_letters.length; j++) {
        if (third.includes(common_letters[j])) {
            if (common_letters[j] === undefined) {
                console.log("undefined here", [j]);
            }
            console.log("common_letter", common_letters[j])
            return common_letters[j];
        }

    }
}
let total_score_2 = 0;
function getScoreForStep2(array) {
    for (let i = 0; i < array.length; i++) {

        let sort_array = array[i].sort(function (a, b) { return b.length - a.length });
        console.log(sort_array);

        let common_letter = compareThree(sort_array[0], sort_array[1], sort_array[2]);
        console.log("common letter passed", common_letter);
        let score = getPriorityScore(common_letter);
        total_score_2 += score;
    }
}





getScoreForStep2(group_array);


console.log("Q2 >>>>>>>>>", total_score_2)
