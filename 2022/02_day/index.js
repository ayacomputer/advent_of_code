import { syncReadFile } from '../helpers/helper.js'
const data_array = syncReadFile('./input.txt');
console.log(data_array);

const split_array = [];
function splitData(array) {
    for (let i = 0; i < array.length; i++) {
        let split_data = array[i].split(" ");
        split_array.push(split_data);
    }
}
splitData(data_array);
console.log(split_array);

let score = 0;

function outcomePoint(opponent, player) {
    if (opponent == "A" && player == "X" || opponent == "B" && player == "Y" || opponent == "C" && player == "Z") {
        score += 3
    } else if (opponent == "A" && player == "Z" || opponent == "B" && player == "X" || opponent == "C" && player == "Y") {
        score += 0
    } else {
        score += 6
    }
};

function shapePoint(player) {
    switch (player) {
        case "X":
            score += 1;
            break;
        case "Y":
            score += 2;
            break;
        case "Z":
            score += 3;
            break;
        default: console.log("error passing through switch statement")
    }
};


function getScore(array) {
    for (let i = 0; i < array.length; i++) {
        const opponent = array[i][0];
        const player = array[i][1]
        outcomePoint(opponent, player);
        shapePoint(player)
    }
    console.log("Q1 score:", score);
};

getScore(split_array);


const shapes = {
    //Rock     shape Point - rock 1 paper 2 scissors 3
    A: [{ key: "X", value: 3 },  // lose
    { key: "Y", value: 1 },  // draw
    { key: "Z", value: 2 }],  // win
    // Paper
    B: [{ key: "X", value: 1 },
    { key: "Y", value: 2 },
    { key: "Z", value: 3 }],
    // Scissors
    C: [{ key: "X", value: 2 },
    { key: "Y", value: 3 },
    { key: "Z", value: 1 }],
}

let new_score = 0;

function newShapePoint(opponent, player) {

    switch (opponent) {
        case "A":
            for (let j = 0; j < shapes["A"].length; j++) {
                console.log(`Opponent is "A" and player is ${player}`)
                if (player == shapes["A"][j].key) {
                    new_score += shapes["A"][j].value
                    console.log(`${player} value is ${shapes["A"][j].value}`)
                }
            };
            break;
        case "B":
            for (let j = 0; j < shapes["B"].length; j++) {
                console.log(`Opponent is "B" and player is ${player}`)
                if (player == shapes["B"][j].key) {
                    new_score += shapes["B"][j].value
                    console.log(`${player} value is ${shapes["B"][j].value}`)
                }
            };
            break;
        case "C":
            for (let j = 0; j < shapes["C"].length; j++) {
                console.log(`Opponent is "C" and player is ${player}`)
                if (player == shapes["C"][j].key) {
                    new_score += shapes["C"][j].value
                    console.log(`${player} value is ${shapes["C"][j].value}`)
                }
            };
            break;
        default: console.log("error passing in switch")

    }

}



function newOutcomePoint(player) {
    switch (player) {
        case "X": // lose
            new_score += 0;
            break;
        case "Y": // draw
            new_score += 3;
            break;
        case "Z": // win
            new_score += 6;
            break;
        default: console.log("error passing through switch statement")
    }
}

function getNewScore(array) {
    for (let i = 0; i < array.length; i++) {
        const opponent = array[i][0]
        const player = array[i][1]
        newOutcomePoint(player);
        newShapePoint(opponent, player);
    }

    console.log("Q2 score:", new_score);
};

getNewScore(split_array);
