let x = 1

function foo() {
    x = 2
    if (true) {
        let x = 3
        console.log(x)
    }
    console.log(x)
}

foo()

console.log(x)

// Printed 
// 3
// 2
// 2

