let total = 0
let baseStats = [525, 395, 320, 490, 435, 600, 680]

console.log(getAverage(baseStats))

function getAverage(array) {
    // Your code here
    let count = 0
    for(const stat of baseStats) 
        count += stat
    return count/baseStats.length
}