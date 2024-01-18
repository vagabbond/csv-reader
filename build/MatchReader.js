"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAtchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MAtchReader extends CsvFileReader_1.FileReader {
    mapRow(row) {
        return [
            (0, utils_1.stringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MAtchReader = MAtchReader;
