// Vowel Counter in Name

// Vowel counter 
function countVowels(name){
    const Vowels = "aeiouAEIOU"
    let vowelCount = 0;
    

    for(i=0; i<name.length; i++){
        if(Vowels.includes(name[i])){
            vowelCount++;
        }
    }
    return vowelCount;
    
}


//Example usage

const Name = countVowels('I Love My India')

console.log("Number of vowels:",Name);

// Number of vowels:  6
