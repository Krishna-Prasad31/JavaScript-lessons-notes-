import {PI, getCircumference, getArea, getvolume} from './mathUtil.js';

console.log(PI)

const circumference = getCircumference(5);
const area = getArea(5);
const volume = getvolume(5);

console.log(`Circumference: ${circumference.toFixed(2)}cm`);
console.log(`Area: ${area.toFixed(2)}cm²`);
console.log(`Volume: ${volume.toFixed(2)}cm³`);