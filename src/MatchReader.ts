import { FileReader } from "./CsvFileReader";
import { stringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MAtchReader extends FileReader<MatchData> {
 mapRow(row: string[]): MatchData {
  return [
   stringToDate(row[0]),
   row[1],
   row[2],
   parseInt(row[3]),
   parseInt(row[4]),
   row[5] as MatchResult,
   row[6],
  ];
 }
}
