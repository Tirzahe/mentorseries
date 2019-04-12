function isAlpha(character){
    return /[a-z]/gi.test(character);
}
function isVowel(character){
    return /[aeiouy]/gi.test(character);
}
function isConsonant(character){
    return isAlpha(character) && !isVowel(character);
}
function isOther(character){
    return !isAlpha(character);
}

//TODO refactor this
// function counting(string) {
//     let strArr = string.split("");
//     let vowelCount = 0;
//     let consonantCount = 0;
//     let otherCount = 0;
//     // let counts = [vowelCount, consonantCount, otherCount];
//     strArr.forEach((item) => {
//         if (isVowel(item)){
//             vowelCount++;
//         }
//         else if(isAlpha(item)){
//             consonantCount++;
//         }
//         else {
//             otherCount++;
//         }
//     });
//     // console.log(counts);
//     return {
//         vowels: vowelCount,
//         consonants: consonantCount,
//         others: otherCount,
//         total: vowelCount + consonantCount + otherCount,
//     };
// };

function counting(string){
    const stringAsArray = string.split('');

    const vowels = stringAsArray.filter(isVowel).length;
    const consonants = stringAsArray.filter(isConsonant).length;
    const others = stringAsArray.filter(isOther).length;
    const total = string.length;

    return {
        vowels,
        consonants,
        others,
        total,
    };
}

export default counting;
