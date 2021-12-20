const hasDuplicate = (arr) => arr.length !== [... new Set(arr)].length

const vowelCount = (str) => {
    const vowels = [..."aeiou"];
    let onlyVowels = str.toLowerCase().split("").filter(ltr => vowels.includes(ltr));
    // return onlyVowels;
    let vowelMap = new Map();
    for (let ltr of onlyVowels) {
        if (vowelMap.has(ltr)){
            vowelMap.set(ltr, vowelMap.get(ltr) + 1)
        } else {
            vowelMap.set(ltr, 1)
        }
        
    }
    return vowelMap
}