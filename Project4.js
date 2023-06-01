
// Project No.4 - Highest Marks

const marks = [84,99,87,105,99.5];


let highestMarks =0 ;

for(let i = 0; i < marks.length; i++){
    highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}

console.log("The highest marks scored by any student is: "  +highestMarks);


