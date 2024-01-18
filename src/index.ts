import { FileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new FileReader("football.csv");
reader.read();
let manUnitedWin = 0;

for (let match of reader.data) {
 if (
  (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
  (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
 ) {
  manUnitedWin += 1;
 }
}

console.log(manUnitedWin);
