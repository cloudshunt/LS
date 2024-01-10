// Struggl

let maxAge = 5;
let minAge = 1;
let randomAge = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
let randomAge2 = Math.round(Math.random() * (maxAge - minAge ) + minAge);
/**
 * break down random number from 20 ~ 120, inclusive
 *  random() gives num 0 ~ 0.99999
 *  - if random() gives 0.9999,
 *    if I do 0.9999 * 120. This will give 119(if round down) or 120(if round or round up)
 *  - if random() gives 0.000. This will give 0. So cur potential output is 0 ~ 119
 *  - Need to find way to have min age.
 *    after random 0 ~ 100(max - min + 1(if i floor)),  plus the min age
 *    
 */

console.log(`Age is ${randomAge2}`);
