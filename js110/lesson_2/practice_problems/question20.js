/* eslint-disable max-lines-per-function */
/**
 * Agenda:create a uuid compose of nums and
 * lower case alphabat
 * Algorithm
 * SET "0123456789abcdefghijklmnopqrstuvwxyz"
 * Will divide into 5 sections
 * where each section will randomlize each character
 * then at the end I will append all 5 sections together
 * with "-" as the delimiter
 *
 *  How does randomlize work?
 * Will be between number 0~25, randomize the number
 * which will access the idx of the string.
 * and do that for each section.
 * 
 */


function createUUID() {
  let chars = "0123456789abcdef"; //total 16 characters
  //2 short functions
  let randomNumGen = () => Math.floor(Math.random() * 16); // 0 ~ 15
  let randomCharPick = (ranNum) => chars[ranNum];

  function sectionCreation(charAmt) {
    let resultSection = "";

    for (let num = 0; num < charAmt; num += 1) {
      let randomNum = randomNumGen();
      let randomChar = randomCharPick(randomNum);
      resultSection += randomChar;
    }
    return resultSection;
  }

  let sectionOne = sectionCreation(8);
  let sectionTwo = sectionCreation(4);
  let sectionThree = sectionCreation(4);
  let sectionFour = sectionCreation(4);
  let sectionFive = sectionCreation(12);
  let resultUUID = `${sectionOne}-${sectionTwo}-${sectionThree}-${sectionFour}-${sectionFive}`;

  return resultUUID;
}


console.log(createUUID());