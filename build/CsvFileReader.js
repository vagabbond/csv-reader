"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class FileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync("football.csv", {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row) => row.split(","))
            .map((row) => {
            return [
                (0, utils_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.FileReader = FileReader;