import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summury = Summary.winsAnalysisWithHtmlReport("Watford");

matchReader.load();
summury.buildAndPrintReport(matchReader.matches);
