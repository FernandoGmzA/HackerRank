import getTotalX from "./Excercises/betweenTwoSets.js";
import breakingRecords from "./Excercises/breakingBestAndWorst.js";

const a = [2, 4];
const b = [16, 96, 32];

console.log(`Between two sets: ${getTotalX(a, b)}`);

const c = [10, 5, 20, 20, 4, 5, 2, 25, 1];

console.log(`Breaking records: ${breakingRecords(c)}`);
