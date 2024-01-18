import fs from "fs";

export abstract class FileReader<T> {
 data: T[] = [];

 constructor(public filename: string) {}
 abstract mapRow(row: string[]): T;

 read(): void {
  this.data = fs
   .readFileSync("football.csv", {
    encoding: "utf-8",
   })
   .split("\n")
   .map((row: string): string[] => row.split(","))
   .map(this.mapRow);
 }
}
