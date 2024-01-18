"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
const stringToDate = (dateString) => {
    const dateParse = dateString.split("/").map((value) => {
        return parseInt(value);
    });
    return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
exports.stringToDate = stringToDate;
