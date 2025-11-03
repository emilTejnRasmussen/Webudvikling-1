function countVowels(sentence) {
    // Your code here
    let count = 0
    for(let char of sentence){
        if(isVowel(char))
            count++
    }
    return count
}

function isVowel(char) {
    const VOWELS = ["a", "e", "i", "o", "u"]
    // Your code here
    if(VOWELS.includes(char.toLowerCase()))
        return true
    return false
}

console.log(countVowels("Pikachu is cute")) // → 6