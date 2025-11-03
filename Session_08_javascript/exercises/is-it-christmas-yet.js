function daysUntilChristmas() {
    let today = new Date()
    let year = today.getMonth() === 11 && today.getDay() > 24 ? today.getFullYear() + 1 : today.getFullYear() // Checker om jul har været der
    let christmas = new Date(`${year}-12-24`)
    let timeDifference = christmas - today
    let daysDifference = timeDifference / (1000 * 3600 * 24)

    return Math.ceil(daysDifference)
}

console.log(daysUntilChristmas())




// Kaspers solution:
// function daysUntilChristmas() {
//     const today = new Date()
//     const christmas = new Date(today.getFullYear(), 11, 24)

//     if (today > christmas) christmas.setFullYear(today.getFullYear() + 1)

//     const differenceInMs = christmas - today
//     const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24))

//     return differenceInDays
// }

// console.log("Days until Christmas: " + daysUntilChristmas())
