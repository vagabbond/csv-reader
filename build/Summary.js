"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
