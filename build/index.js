"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MAtchReader("football.csv");
reader.read();
let manUnitedWin = 0;
for (let match of reader.data) {
    if ((match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWin += 1;
    }
}
console.log(manUnitedWin);
