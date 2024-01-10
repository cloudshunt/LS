/**
 * 
 */


function calcAvg(grade1, grade2, grade3) {
  const SCOREAMT = 3;
  return (grade1 + grade2 + grade3) / SCOREAMT; 
}

function getGrade(grade1,grade2,grade3) {
  let avgScore = calcAvg(grade1, grade2, grade3);

  if (avgScore >= 90 && avgScore <= 100) {
    return 'A';
  } else if (avgScore >= 80 && avgScore < 90) {
    return 'B';
  } else if (avgScore >= 70 && avgScore < 80) {
    return 'C';
  } else if (avgScore >= 60 && avgScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

