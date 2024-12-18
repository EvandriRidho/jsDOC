import { readFileSync } from 'node:fs'
import { mean, median } from 'simple-statistics'


const fileBuffer = readFileSync('./score.txt', { encoding: 'utf-8' });
const lines = fileBuffer.split('\n');
const nums = lines.map(line => parseInt(line))


const avg = mean(nums);
const med = median(nums);

console.log({ avg, med });